import { useState, useRef, useEffect } from 'react';
import { SendHorizontal } from 'lucide-react';
import FileInput from './inputs/FileInput';
import UploadedFile from '../../UploadedFile';
import TextareaInput from './inputs/TextareaInput';
import CustomBtn from '../../btns/CustomBtn';
import { cn } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addComment } from '@/features/InvoicesApproval/services/AddComment';
import { MAX_CHAR_LENGTH } from '@/features/InvoicesApproval/components/Invoices/constants/invoiceConstants';
import { toast } from 'react-toastify';

export default function MessageInput({ reqId, reportType, waitForReply }) {
  const [newMessage, setNewMessage] = useState('');
  const [isWaitingForReply, setIsWaitingForReply] = useState(waitForReply);

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const textAreaRef = useRef(null);

  const { mutateAsync, isPending: isSending } = useMutation({
    mutationFn: addComment,
  });

  const queryClient = useQueryClient();

  const processSubmit = async () => {
    if (!newMessage.trim()) return;
    const formData = new FormData();
    formData.append('ReportType', reportType);
    formData.append('Message', newMessage.trim());
    if (file) {
      formData.append('Attachement', file);
    }
    formData.append('RequestId', reqId);
    formData.append('IslegalOwner', true);

    await mutateAsync(formData, {
      onSuccess: () => {
        setFile(null);
        setNewMessage('');

        toast.success(
          'تم إرسال التعليق بنجاح وسيقوم فريق إدارة العمليات بالرد في اقرب وقت.'
        );
        queryClient.invalidateQueries({
          queryKey: ['invoice-chat'],
        });
        queryClient.invalidateQueries({
          queryKey: ['invoices-requests'],
        });
        setIsWaitingForReply(true);
      },
      onError: (error) => {
        console.error('Error uploading file:', error);
        toast.error('حدث خطأ أثناء إرسال التعليق');
      },
    });
  };

  // Auto resize textarea on component mount and when content changes
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [newMessage]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className="border-t p-4 bg-white"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div
        className={`flex items-center flex-row-reverse gap-2 ${
          isDragging
            ? 'bg-blue-50 border border-dashed border-blue-300 rounded-md p-2'
            : ''
        }`}
      >
        <div className="flex-1 relative">
          {/* Text Input with character limit - Auto-expanding textarea */}
          <div
            className={cn(
              'flex-1 flex items-center relative w-full border border-ivory-300 rounded-md pr-3 pl-2 py-2',
              {
                'bg-ivory-200/70': isWaitingForReply,
              }
            )}
          >
            {/* File Input Button */}
            <FileInput
              fileInputRef={fileInputRef}
              handleFileChange={handleFileChange}
              disabled={isWaitingForReply || isSending}
              isDragging={isDragging}
              handleRemoveFile={handleRemoveFile}
              file={file}
            />
            <TextareaInput
              textAreaRef={textAreaRef}
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              disabled={isWaitingForReply || isSending}
              MAX_CHARS={MAX_CHAR_LENGTH}
              placeholder="اكتب هنا..."
              className="flex-1"
            />
          </div>

          <div className="text-xs text-gray-400 absolute left-1 -bottom-5">
            {newMessage.length}/{MAX_CHAR_LENGTH}
          </div>
        </div>

        {/* Send Button */}

        <CustomBtn
          variant="ghost"
          onClick={processSubmit}
          disabled={!newMessage.trim() || isWaitingForReply || isSending}
          className={
            !newMessage.trim() || isWaitingForReply
              ? 'text-ivory-50 bg-primary-600 flex items-center justify-center rounded-md p-3'
              : 'text-ivory-50 bg-primary-600 flex items-center justify-center rounded-md p-3'
          }
          icon={<SendHorizontal className="h-6 w-6 rotate-180" />}
        />
      </div>
      {/* UPLOADED FILE */}
      <UploadedFile handleRemoveFile={handleRemoveFile} file={file} />
    </div>
  );
}

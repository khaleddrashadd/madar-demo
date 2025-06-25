import { useRef, useState } from 'react';
import { X, SendHorizontal } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import CustomBtn from '@/components/partials/btns/CustomBtn';
import AlertComponent from '@/components/partials/CommentForm/AlertComponent';
import DefaultSelectDropdown from '@/components/partials/CommentForm/DefaultSelectDropdown';
import DefaultTextarea from '@/components/partials/CommentForm/DefaultTextarea';
import FileUpload from '@/components/partials/CommentForm/FileUpload';
import ChatInstructions from '@/components/partials/CommentForm/ChatInstructions';
import { commentSchema } from '@/features/InvoicesApproval/Schema/addCommentSchema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addComment } from '@/features/InvoicesApproval/services/AddComment';
import { MAX_CHAR_LENGTH } from '../constants/invoiceConstants';

const CommentForm = ({ setIsOpen, data, isPending, reqId, setReqId }) => {
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const {
    handleSubmit,
    reset,
    setValue,
    watch,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      reportType: '',
      comment: '',
      attachments: null,
    },
    mode: 'onChange',
  });

  // Watch the comment field to display character count
  const commentValue = watch('comment');

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setValue('attachments', files, { shouldValidate: true });
      setFile(files[0]);
    } else {
      // Clear the file names if no files selected
      setValue('attachments', null);
      setFile(null);
      fileInputRef.current.value = ''; // Reset the file input
    }
  };

  const { mutateAsync, isPending: isSending } = useMutation({
    mutationFn: addComment,
  });

  const queryClient = useQueryClient();

  const processSubmit = async (data) => {
    const formData = new FormData();
    formData.append('ReportType', data.reportType);
    formData.append('Message', data.comment);
    if (file) {
      formData.append('Attachement', file);
    }
    formData.append('RequestId', reqId);
    formData.append('IslegalOwner', true);

    await mutateAsync(formData, {
      onSuccess: () => {
        setFile(null);
        setIsOpen(false);
        reset();
        setReqId(null);
        toast.success('تم التعليق بنجاح');
        queryClient.invalidateQueries({
          queryKey: ['invoices-requests'],
        });
      },
      onError: (error) => {
        console.error('Error uploading file:', error);
        toast.error('حدث خطأ أثناء إرسال التعليق');
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(processSubmit)}
      className="grid grid-rows-[repeat(2,max-content)] gap-y-2 mt-6 h-full px-6 py-4"
    >
      <AlertComponent />

      <div className="space-y-4 mt-4">
        <DefaultSelectDropdown
          title="التقرير المعني"
          options={data}
          isPending={isPending}
          label="nameAr"
          value="id"
          onChange={(value) => {
            setValue('reportType', value, { shouldValidate: true });
          }}
          error={errors.reportType}
          required={true}
          isSelected={watch('reportType') !== ''}
        />

        <DefaultTextarea
          title="التفاصيل"
          error={errors.comment}
          register={register}
          name="comment"
          value={commentValue}
          maxLength={MAX_CHAR_LENGTH}
          onChange={(e) => {
            const value = e.target.value;
            setValue('comment', value, { shouldValidate: true });
          }}
        />

        <div className="space-y-2">
          <FileUpload
            file={file}
            handleFileChange={handleFileChange}
            error={errors.attachments}
            fileInputRef={fileInputRef}
          />
          <ChatInstructions />
        </div>
      </div>

      <div className="flex justify-center  py-4 mt-auto gap-4">
        <CustomBtn
          title="إلغاء"
          icon={<X className="ml-2" />}
          onClick={() => setIsOpen(false)}
          disabled={isSubmitting}
          className="px-9 py-4 h-10 flex-1 w-full border border-primary-500 text-primary-500 shadow-sm hover:bg-ivory-50"
          variant="outline"
        />

        <CustomBtn
          title="إرسال"
          isLoading={isSending}
          loadingText="إرسال"
          icon={<SendHorizontal className="ml-2 h-4 w-4 rotate-180" />}
          type="submit"
          disabled={isSubmitting || isSending}
          className=" bg-primary-500 flex gap-2 px-9 py-4 h-10 flex-1 w-full shadow-sm"
        />
      </div>
    </form>
  );
};

export default CommentForm;

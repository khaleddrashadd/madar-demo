import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { MAX_FILE_SIZE } from '../constants/contractUpload';
import UploadFileDragAndDropZone from './UploadFileDragAndDropZone';
import SelectedFile from '@/components/SelectedFile';
import { useMutation } from '@tanstack/react-query';
import getOnboardingContractSamples, {
  onboardingContractSamples,
} from '../services/getOnboardingContractSamples';
import { downloadFile } from '@/lib/utils';
import { getFileName } from '@/utils/getFileName';

const Step = ({ title, onSelectFile, onRemoveFile, file, currentStep }) => {
  const [dragActive, setDragActive] = useState(false);

  const inputRef = useRef(null);

  const removeFile = () => {
    onRemoveFile();
    setDragActive(false);
  };
  const replaceFile = () => {
    inputRef?.current.click();
  };
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleFiles = (files) => {
    const selectedFile = files[0];
    if (selectedFile.size > MAX_FILE_SIZE) {
      inputRef.current.value = '';
      return toast.error('حجم الملف يجب ألا يتخطى 25 ميجا بايت');
    }
    const extension = selectedFile.name.split('.').at(1).toLowerCase();
    const acceptedExtensions = ['csv', 'xls', 'xlsx'];
    if (acceptedExtensions.indexOf(extension) === -1) {
      inputRef.current.value = '';
      return toast.error('الرجاء اختيار ملف بصيغة CSV أو XLSX');
    }
    onSelectFile(selectedFile);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  useEffect(() => {
    if (!file) {
      setDragActive(false);
      inputRef.current.value = '';
    }
  }, [file]);

  const { mutate: handleDownloadSample, isPending: isFetchingFile } =
    useMutation({
      mutationFn: getOnboardingContractSamples,
      onSuccess: (res) => {
        const fileName = getFileName(res.headers['content-disposition']);
        downloadFile(res, fileName);
      },
    });

  return (
    <div className="w-full px-4 md:px-0 md:w-1/2 mx-auto h-[calc(100%-65px)]">
      <div className="flex items-center justify-between py-3 pb-0 md:pt-12">
        <h3 className="text-ivory-900 font-semibold">{title}</h3>
        <Button
          variant="link"
          className="text-primary-500 font-semibold"
          disabled={isFetchingFile}
          onClick={() =>
            handleDownloadSample(onboardingContractSamples[currentStep])
          }
        >
          <FileText className="h-4 w-4" />
          تنزيل نموذج
        </Button>
      </div>
      {file ? (
        <SelectedFile
          file={file}
          onRemoveFile={removeFile}
          onReplaceFile={replaceFile}
        />
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => inputRef?.current?.click()}
        >
          <UploadFileDragAndDropZone
            dragActive={dragActive}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer sr-only"
        accept=".csv,.xls,.xlsx"
        onChange={handleChange}
      />
    </div>
  );
};
export default Step;

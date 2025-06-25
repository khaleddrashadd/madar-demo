import { useState } from 'react';
import { CloudUpload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UploadedFile from '../UploadedFile';

const FileUpload = ({ file, handleFileChange, error, fileInputRef }) => {
  const [isDragging, setIsDragging] = useState(false);

  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Pass the dropped files to the parent component
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="w-full h-20 border border-ivory-300 flex items-center justify-center gap-2 relative bg-ivory-100 hover:bg-ivory-100"
      >
        <CloudUpload className="text-blue-500" width={'40'} height={'40'} />
        <span className="font-semibold">
          {isDragging ? 'اترك الملفات هنا' : 'اضف أو اسحب الملف هنا'}
        </span>{' '}
        <input
          id="file-upload"
          type="file"
          className=" absolute w-full opacity-0 h-full cursor-pointer"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          ref={fileInputRef}
        />
      </Button>
      {file && <UploadedFile file={file} handleRemoveFile={handleFileChange} />}
      {/* {fileNames.length > 0 && (
        <div className="mt-2">
          <p className="font-semibold">الملفات المرفقة:</p>

          <ul className="list-disc list-inside">
            {fileNames.map((name, index) => {
              return (
                <li key={index} className="text-sm text-ivory-900">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )} */}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </>
  );
};

export default FileUpload;

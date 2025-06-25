import { File, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UploadedFile = ({ file, handleRemoveFile }) => {
  return (
    <>
      {file && (
        <div className="mt-6 p-2 bg-gray-50 rounded flex items-center justify-between">
          <div className="flex items-center gap-2">
            <File className="h-4 w-4 text-blue-500" />
            <span className="text-sm truncate max-w-56">{file.name}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 p-0 px-2"
            onClick={handleRemoveFile}
          >
            <X className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      )}
    </>
  );
};

export default UploadedFile;

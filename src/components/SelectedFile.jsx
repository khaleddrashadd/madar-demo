import { File, Trash2, Upload } from 'lucide-react';

const SelectedFile = ({ file, onRemoveFile, onReplaceFile }) => {
  return (
    <div className="mt-3 space-y-3">
      <div
        key={file.name}
        className="flex items-center justify-between bg-gray-50 border border-ivory-300 rounded-lg p-3"
      >
        <div className="flex items-center w-[calc(100%-72px)]">
          <div className="w-8 h-8 rounded flex items-center justify-center border border-ivory-300 rtl:ml-2 ltr:mr-2">
            <File className="h-5 w-5 text-ivory-900" />
          </div>
          <div className="max-w-[80%]">
            <p className="text-sm font-medium text-gray-900 truncate">
              {file.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onReplaceFile}
            className="text-secondary-400 bg-secondary-100 p-2 rounded-md"
          >
            <Upload className="h-4 w-4" />
          </button>
          <button
            onClick={onRemoveFile}
            className="text-red-500 bg-[#FFEDED] p-2 rounded-md"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SelectedFile;

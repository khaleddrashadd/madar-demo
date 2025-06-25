import { Paperclip, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FileInput = ({
  fileInputRef,
  handleFileChange,
  disabled,
  isDragging,
}) => {
  return (
    <div className="relative w-5 h-5">
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      <Button
        variant="ghost"
        size="icon"
        disabled={disabled}
        onClick={() => fileInputRef.current?.click()}
        className="relative w-5 h-5"
      >
        {isDragging ? (
          <Upload
            className={cn('h-5 w-5', {
              'text-primary-500': !disabled,
              'text-ivory-500': disabled,
            })}
          />
        ) : (
          <Paperclip
            className={cn('h-5 w-5', {
              'text-ivory-900': !disabled,
              'text-ivory-500': disabled,
            })}
          />
        )}
      </Button>
    </div>
  );
};

export default FileInput;

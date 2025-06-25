import { Download, File, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
const MessageAttachment = ({
  sender,
  onDownloadFile,
  fileId,
  isLoading,
  fileName = 'File',
}) => {
  const colorSchemes = {
    legalOwner: {
      bg: 'bg-ivory-60',
      text: 'text-ivory-850',
      border: 'border-primary-50',
      icon: 'text-ivory-850',
      file: 'bg-primary-50',
    },
    operations: {
      bg: 'bg-primary-110',
      text: 'text-ivory-50',
      border: 'border-primary-50',
      icon: 'text-ivory-50',
      file: 'border border-primary-110',
    },
  };

  const colorScheme = colorSchemes[sender] || {};

  return (
    <div
      className={cn(
        'p-1 flex items-center justify-between',
        colorScheme.border,
        colorScheme.bg,
        'rounded-md shadow-sm'
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex-shrink-0 w-8 h-8 text-ivory-850 rounded-md flex items-center justify-center',
            colorScheme.text,
            colorScheme.file
          )}
        >
          <File className={cn('h-5 w-5', colorScheme.icon)} />
        </div>

        <div className="max-w-32">
          <h4
            className={cn(
              'text-sm font-medium text-ellipsis whitespace-nowrap overflow-hidden',
              colorScheme.text
            )}
          >
            {fileName}
          </h4>
        </div>
      </div>

      <button
        onClick={() => onDownloadFile(fileId)}
        disabled={isLoading}
        className={cn(
          'inline-flex items-center gap-1 text-ivory-850 text-sm px-2 py-1 rounded-md'
        )}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Download className={cn('h-4 w-4', colorScheme.icon)} />
        )}
      </button>
    </div>
  );
};

export default MessageAttachment;

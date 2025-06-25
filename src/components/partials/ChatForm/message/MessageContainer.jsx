import { cn, downloadFile } from '@/lib/utils';
import MessageAttachment from './MessageAttachment';
import { downloadMessageFile } from '@/features/InvoicesApproval/services/getMessageFile';
import { useState } from 'react';

const colorSchemes = {
  operations: {
    bg: 'bg-ivory-60',
    text: 'text-ivory-850',
  },
  legalOwner: {
    bg: 'bg-primary-500',
    text: 'text-ivory-50',
  },
};
function getFileName(contentDisposition, fallback) {
  const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
  const matches = regex.exec(contentDisposition);
  if (matches != null && matches[1]) {
    return matches[1].replace(/['"]/g, '');
  }
  return fallback;
}
const MessageContainer = ({
  message,
  sender,
  timestamp,
  hasFile,
  fileName,
  fileId,
}) => {
  const colorScheme = colorSchemes[sender] || {};
  const [isFileLoading, setIsFileLoading] = useState(false);

  const handleDownloadFile = async (fileId) => {
    try {
      setIsFileLoading(true);
      const res = await downloadMessageFile({
        fileId,
      });
      const fileName = getFileName(
        res.headers['content-disposition'],
        'downloaded_file'
      );
      downloadFile(res, fileName);
    } catch (err) {
      console.error(err);
    } finally {
      setIsFileLoading(false);
    }
  };

  return (
    <div
      className={cn(
        'rounded-lg p-3 break-words shadow-sm flex flex-col gap-2',
        'border',
        colorScheme.bg,
        colorScheme.border
      )}
    >
      <p
        className={cn('text-right text-base leading-normal', colorScheme.text)}
      >
        {message}
      </p>
      {hasFile && (
        <MessageAttachment
          sender={sender}
          fileName={fileName}
          hasFile={hasFile}
          fileId={fileId}
          onDownloadFile={handleDownloadFile}
          isLoading={isFileLoading}
        />
      )}
      <span className={cn('text-2xs mt-1 mr-auto', colorScheme.text)}>
        {timestamp}
      </span>
    </div>
  );
};

export default MessageContainer;

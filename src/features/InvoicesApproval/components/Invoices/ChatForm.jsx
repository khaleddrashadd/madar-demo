import { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import MessageHeading from '@/components/partials/ChatForm/message/MessageHeading';
import MessageContainer from '@/components/partials/ChatForm/message/MessageContainer';
import MessageState from '@/components/partials/ChatForm/message/MessageState';
import MessageInput from '@/components/partials/ChatForm/message/MessageInput';
import EmptyState from '@/components/partials/ChatForm/EmptyState';

const formatDateForDisplay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Format time for display
const formatTimeForDisplay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-UK', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
const ChatForm = ({ isReadOnly, chatMessages, reqId, waitForReply = true }) => {
  const scrollAreaRef = useRef(null);

  // Smooth scroll to bottom function
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current;
      if (viewport) {
        viewport.scrollTo({
          top: viewport.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  };

  // Scroll to bottom when component mounts or when messages change
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className="flex flex-col h-full">
      <ScrollArea
        className="flex-1 pt-6 pb-4 px-6"
        dir="rtl"
        containerRef={scrollAreaRef}
        containerClassname={
          chatMessages?.items?.length > 0 ? '' : 'flex items-center'
        }
      >
        {chatMessages?.items?.length > 0 ? (
          <div className="flex flex-col gap-6 items-end">
            {chatMessages.items?.map((dayGroup, dayIndex) => (
              <div key={dayIndex} className="w-full">
                {/* DATE HEADER */}
                <div className="font-medium text-ivory-650 text-sm w-full text-center mb-4">
                  {formatDateForDisplay(dayGroup.createdDate)}
                </div>

                {/* MESSAGES FOR THIS DAY */}
                <div className="flex flex-col gap-4">
                  {dayGroup.messages.map((message, messageIndex) => {
                    const sender = message.isFromLegalOwner
                      ? 'legalOwner'
                      : 'operations';

                    // Check if this is the last message and it's from legal owner
                    const isLastMessage =
                      messageIndex === dayGroup.messages.length - 1;
                    const shouldShowMessageState =
                      isLastMessage && message.isFromLegalOwner;

                    return (
                      <div
                        key={`${dayIndex}-${messageIndex}`}
                        className={cn(
                          'flex gap-2',
                          sender === 'legalOwner'
                            ? 'justify-end'
                            : 'justify-start'
                        )}
                      >
                        <div className="flex flex-col w-full max-w-[80%] gap-1">
                          <MessageHeading name={message.userName} />

                          <MessageContainer
                            message={message.message}
                            sender={sender}
                            timestamp={formatTimeForDisplay(
                              message.createdDate
                            )}
                            hasFile={message.hasFile}
                            fileName={message.fileName}
                            fileId={message.fileId}
                          />

                          {shouldShowMessageState && <MessageState />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </ScrollArea>

      {/* INPUT */}
      {!isReadOnly && (
        <MessageInput
          reportType={chatMessages?.items?.[0]?.messages[0]?.reportTypeId}
          reqId={reqId}
          waitForReply={waitForReply}
        />
      )}
    </div>
  );
};

export default ChatForm;

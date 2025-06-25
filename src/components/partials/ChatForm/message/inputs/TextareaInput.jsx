import { cn } from '@/lib/utils';

const TextareaInput = ({
  textAreaRef,
  newMessage,
  setNewMessage,
  disabled,
  MAX_CHARS = 300,
  placeholder,
  dir = 'rtl',
  className,
}) => {
  return (
    <div
      className={cn('text-right min-h-6 max-h-40 overflow-y-auto', className)}
    >
      <textarea
        dir={dir}
        ref={textAreaRef}
        placeholder={placeholder}
        className={cn(
          'w-full outline-none text-right bg-transparent resize-none overflow-hidden block placeholder:text-ivory-660 text-sm',
          {
            'placeholder:text-ivory-400': disabled,
          }
        )}
        style={{ height: 'auto' }}
        value={newMessage}
        onChange={(e) => {
          if (e.target.value.length <= MAX_CHARS) {
            setNewMessage(e.target.value);
            // Auto-resize height
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }
        }}
        rows={1}
        disabled={disabled}
      />
    </div>
  );
};

export default TextareaInput;

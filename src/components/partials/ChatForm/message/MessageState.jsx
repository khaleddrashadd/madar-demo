import { Check } from 'lucide-react';

const MessageState = () => {
  return (
    <div className="flex gap-1 items-center justify-end text-xs text-ivory-650">
      <>
        <Check className="w-3 h-3" />
        تم الإرسال
      </>
    </div>
  );
};

export default MessageState;

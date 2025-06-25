import { UserRound } from 'lucide-react';

const MessageHeading = ({ name }) => {
  return (
    <div className="flex gap-2 justify-start">
      <span className="">
        <UserRound className="stroke-primary-500 bg-primary-150 rounded-full p-1" />
      </span>
      <span className="text-sm text-gray-500">{name}</span>
    </div>
  );
};

export default MessageHeading;

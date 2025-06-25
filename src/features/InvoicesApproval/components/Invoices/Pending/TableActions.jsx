import { Check, Clock, PencilLine, Loader2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TableActions = ({
  item,
  setIsLogDialogOpen,
  setIsConfirmDialogOpen,
  setIsCommentSidebarOpen,
  setIsChatSidebarOpen,
  setReqId,
  isRequestApprovalPending,
  reqId,
}) => {
  const isTheSameRequest = reqId === item.id;
  return (
    <>
      <div className="flex gap-3 justify-center">
        {/* HANDLE APPROVAL */}
        <Button
          variant="outline"
          size="sm"
          className="text-ivory-50 hover:text-ivory-50 bg-secondary-400 hover:bg-secondary-400/90 flex items-center gap-1 p-3"
          onClick={() => {
            setIsConfirmDialogOpen(true);
            setReqId(item.id);
          }}
          disabled={isTheSameRequest && isRequestApprovalPending}
        >
          {isTheSameRequest && isRequestApprovalPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Check className="h-4 w-4" />
          )}
          <span className="hidden md:inline">موافقة</span>{' '}
        </Button>

        {/* HANDLE LOG */}
        <Button
          variant="secondary"
          size="sm"
          className="items-center gap-2 p-2"
          onClick={() => {
            setIsLogDialogOpen(true);
            setReqId(item.id);
          }}
        >
          <Clock className="h-4 w-4" />
        </Button>

        {/* HANDLE Comment Sidebar */}

        {item.hasChat ? (
          <Button
            variant="secondary"
            size="sm"
            className={`items-center gap-2 p-2 relative ${
              item.hasMessageToRead ? 'border-extended-500' : ''
            }`}
            onClick={() => {
              setIsChatSidebarOpen(true);
              setReqId(item.id);
            }}
          >
            {item.hasMessageToRead && (
              <span className="absolute -top-1 -left-1 h-2 w-2 bg-red-500 rounded-full" />
            )}
            <MessageSquare
              className={`h-4 w-4 ${
                item.hasMessageToRead ? 'text-extended-500' : ''
              }`}
            />
          </Button>
        ) : (
          <Button
            variant="secondary"
            size="sm"
            className="items-center gap-2 p-2"
            onClick={() => {
              setIsCommentSidebarOpen(true);
              setReqId(item.id);
            }}
          >
            <PencilLine className="h-4 w-4" />
          </Button>
        )}
      </div>
    </>
  );
};

export default TableActions;

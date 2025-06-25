import { Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/partials/Sidebar';
import ChatForm from '@/features/InvoicesApproval/components/Invoices/ChatForm';

const TableActions = ({
  item,
  isChatSidebarOpen,
  setIsLogDialogOpen,
  setIsChatSidebarOpen,
  setReqId,
}) => {
  return (
    <>
      {/* Chat Sidebar using Sheet directly */}
      <Sidebar
        title="التعليقات"
        open={isChatSidebarOpen}
        onOpenChange={setIsChatSidebarOpen}
      >
        <ChatForm isReadOnly={true} />
      </Sidebar>

      <div className="flex gap-3 justify-center">
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

        {/* HANDLE Chat Using Reusable Sidebar */}
        <Button
          variant="secondary"
          size="sm"
          className="items-center gap-2 p-2 relative bg-ivory-200"
          onClick={() => {
            setIsChatSidebarOpen(true);
            setReqId(item.id);
          }}
        >
          <MessageSquare className="h-4 w-4 " />
        </Button>
      </div>
    </>
  );
};

export default TableActions;

import ConfirmationDialogue from '@/components/partials/ConfirmationDialogue';
import LogDialog from '../LogDialog';
import Sidebar from '@/components/partials/Sidebar';
import ChatForm from '@/features/InvoicesApproval/components/Invoices/ChatForm';
import CommentForm from '@/features/InvoicesApproval/components/Invoices/Pending/CommentForm';
import useGetReportTypesQuery from '@/features/InvoicesApproval/hooks/useGetReportTypes';
import { useQueryClient } from '@tanstack/react-query';

const PendingDialogs = ({
  isConfirmDialogOpen,
  setIsConfirmDialogOpen,
  isLogDialogOpen,
  setIsLogDialogOpen,
  isCommentSidebarOpen,
  setIsCommentSidebarOpen,
  isChatSidebarOpen,
  setIsChatSidebarOpen,
  data,
  reqId,
  handleApproveInvoice,
  legalOwner,
  isRequestApprovalPending,
  setReqId,
  disabled,
  messages,
  waitForReply,
}) => {
  const { isReportTypesPending, reportTypes } = useGetReportTypesQuery(
    legalOwner,
    isCommentSidebarOpen
  );
  const queryClient = useQueryClient();
  return (
    <>
      <ConfirmationDialogue
        isOpen={isConfirmDialogOpen}
        setIsOpen={setIsConfirmDialogOpen}
        onConfirm={handleApproveInvoice}
        isLoading={isRequestApprovalPending}
      />
      <LogDialog
        isLogDialogOpen={isLogDialogOpen}
        setIsLogDialogOpen={setIsLogDialogOpen}
        data={data?.items?.find((item) => item.id === reqId)}
      />
      {/* Comment Sidebar using Sheet directly */}
      <Sidebar
        title="إضافة تعليق"
        open={isCommentSidebarOpen}
        onOpenChange={setIsCommentSidebarOpen}
      >
        <CommentForm
          setIsOpen={setIsCommentSidebarOpen}
          data={reportTypes}
          isPending={isReportTypesPending}
          reqId={reqId}
          setReqId={setReqId}
        />
      </Sidebar>

      {/* Chat Sidebar using Sheet directly */}
      <Sidebar
        title={messages?.items?.[0]?.messages[0]?.reportType || 'التعليقات'}
        open={isChatSidebarOpen}
        onOpenChange={(isOpen) => {
          queryClient.invalidateQueries({
            queryKey: ['invoices-requests'],
          });
          setIsChatSidebarOpen(isOpen);
        }}
      >
        <ChatForm
          isReadOnly={disabled}
          chatMessages={messages}
          reqId={reqId}
          waitForReply={waitForReply}
        />
      </Sidebar>
    </>
  );
};

export default PendingDialogs;

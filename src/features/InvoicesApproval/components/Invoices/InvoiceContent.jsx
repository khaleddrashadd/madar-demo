import { useEffect, useState } from 'react';
import TablePending from './Pending/TablePending';
import TableApproved from './Approved/TableApproved';
import MobileTableCard from './MobileCard';
import useRequestApprovalMutation from '../../hooks/useRequestApprovalMutation';
import { useDispatch } from 'react-redux';
import { useInvoiceRequests } from '../../hooks/useInvoicesRequests';
import TabsPicker from './TabsPicker';
import TabsPickerSkeleton from '@/components/TablePickerSkeleton';
import TableSkeleton from '@/components/TableSekelton';
import { setHasPending } from '../../store/invoicesApprovalSlice';
import PendingDialogs from './Pending/PendingDialogs';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getChatMessages } from '../../services/getChatMessages';

const InvoiceContent = ({ tabStatus, legalOwner }) => {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isLogDialogOpen, setIsLogDialogOpen] = useState(false);
  const [isCommentSidebarOpen, setIsCommentSidebarOpen] = useState(false);
  const [isChatSidebarOpen, setIsChatSidebarOpen] = useState(false);
  const [reqId, setReqId] = useState(null);

  const dispatch = useDispatch();

  const { data: invoicesData, isLoading: invoiceLoading } =
    useInvoiceRequests(legalOwner);

  const { approveRequest, isRequestApprovalPending } =
    useRequestApprovalMutation();

  const handleApproveInvoice = async () => await approveRequest(reqId);

  const { data: chatMessages } = useQuery({
    queryKey: ['invoice-chat', reqId],
    queryFn: async () => getChatMessages({ RequestId: reqId }),
    placeholderData: keepPreviousData,
    select: (data) => {
      const reversedItems = data?.items?.reverse();
      return {
        ...data,
        items: reversedItems,
      };
    },
    enabled: isChatSidebarOpen && reqId !== null,
  });
  useEffect(() => {
    if (tabStatus.pending && invoicesData && invoicesData?.items?.length > 0) {
      dispatch(setHasPending(true));
    }
    if (
      tabStatus.pending &&
      invoicesData &&
      invoicesData?.items?.length === 0
    ) {
      dispatch(setHasPending(false));
    }
  }, [tabStatus.pending, invoicesData, dispatch]);

  return (
    <>
      {invoiceLoading ? <TabsPickerSkeleton /> : <TabsPicker />}
      {invoiceLoading ? (
        <TableSkeleton />
      ) : (
        <div>
          {tabStatus.pending ? (
            <TablePending
              data={invoicesData}
              classNames={'hidden md:block'}
              legalOwner={legalOwner}
              isChatSidebarOpen={isChatSidebarOpen}
              isCommentSidebarOpen={isCommentSidebarOpen}
              isConfirmDialogOpen={isConfirmDialogOpen}
              isLogDialogOpen={isLogDialogOpen}
              setIsChatSidebarOpen={setIsChatSidebarOpen}
              setIsCommentSidebarOpen={setIsCommentSidebarOpen}
              setIsLogDialogOpen={setIsLogDialogOpen}
              setIsConfirmDialogOpen={setIsConfirmDialogOpen}
              approveRequest={approveRequest}
              isRequestApprovalPending={isRequestApprovalPending}
              reqId={reqId}
              setReqId={setReqId}
            />
          ) : (
            <TableApproved
              data={invoicesData}
              classNames={'hidden md:block'}
              legalOwner={legalOwner}
              isChatSidebarOpen={isChatSidebarOpen}
              isLogDialogOpen={isLogDialogOpen}
              setIsChatSidebarOpen={setIsChatSidebarOpen}
              setIsLogDialogOpen={setIsLogDialogOpen}
              setReqId={setReqId}
              reqId={reqId}
            />
          )}
          <MobileTableCard
            data={invoicesData}
            classNames={'block md:hidden space-y-4'}
            legalOwner={legalOwner}
            isApprovedTab={!tabStatus.pending}
            setIsChatSidebarOpen={setIsChatSidebarOpen}
            setIsCommentSidebarOpen={setIsCommentSidebarOpen}
            setIsLogDialogOpen={setIsLogDialogOpen}
            setIsConfirmDialogOpen={setIsConfirmDialogOpen}
            approveRequest={approveRequest}
            isRequestApprovalPending={isRequestApprovalPending}
            setReqId={setReqId}
          />
        </div>
      )}
      <PendingDialogs
        data={invoicesData}
        handleApproveInvoice={handleApproveInvoice}
        isConfirmDialogOpen={isConfirmDialogOpen}
        setIsConfirmDialogOpen={setIsConfirmDialogOpen}
        isLogDialogOpen={isLogDialogOpen}
        setIsLogDialogOpen={setIsLogDialogOpen}
        isCommentSidebarOpen={isCommentSidebarOpen}
        isChatSidebarOpen={isChatSidebarOpen}
        setIsCommentSidebarOpen={setIsCommentSidebarOpen}
        setIsChatSidebarOpen={setIsChatSidebarOpen}
        reqId={reqId}
        setReqId={setReqId}
        legalOwner={legalOwner}
        isRequestApprovalPending={isRequestApprovalPending}
        disabled={!tabStatus.pending}
        messages={chatMessages}
        waitForReply={
          !invoicesData?.items?.find((item) => item.id === reqId)
            ?.ableToSendMessage
        }
      />
    </>
  );
};

export default InvoiceContent;

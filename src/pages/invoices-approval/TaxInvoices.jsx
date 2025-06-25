// THIS COMPONENT IS COMMENTED OR DEPRECATED

import { useEffect, useState } from 'react';
import TableFilters from '@/features/TaxInvoices/TableFilters';
import { useInvoiceRequests } from '@/features/InvoicesApproval/hooks/useInvoicesRequests';
import TableSkeleton from '@/components/TableSekelton';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';
import TableDoubleAccordion from '@/features/TaxInvoices/components/tables/TableInvoices';

import {
  getTabStatus,
  setHasPending,
} from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useDispatch, useSelector } from 'react-redux';
import MobileTableCard from '@/features/TaxInvoices/components/MobileCard';

const LEGAL_OWNER = localStorage.getItem('legalOwner');

const TaxInvoices = () => {
  const [isLogDialogOpen, setIsLogDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const { data: invoicesData, isLoading: invoiceLoading } =
    useInvoiceRequests(LEGAL_OWNER);

  const tabStatus = useSelector(getTabStatus);

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
    <div className="px-2 sm:px-6 mt-4  flex flex-col gap-4 mb-20">
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-[max-content,1fr] gap-7 items-center mb-4 w-full">
        <h2 className=" font-bold text-2xl">الفواتير الضريبية</h2>
        <TableFilters legalOwner={LEGAL_OWNER} />
      </div>

      {/*  */}
      {invoiceLoading ? (
        <TableSkeleton />
      ) : (
        <ErrorFallback>
          <TableDoubleAccordion
            data={invoicesData}
            classNames="hidden md:block"
            setIsLogDialogOpen={setIsLogDialogOpen}
            isLogDialogOpen={isLogDialogOpen}
          />
          <MobileTableCard
            data={invoicesData}
            classNames={'block md:hidden space-y-4'}
            legalOwner={LEGAL_OWNER}
            isApprovedTab={!tabStatus.pending}
            setIsLogDialogOpen={setIsLogDialogOpen}
          />
        </ErrorFallback>
      )}
    </div>
  );
};

export default TaxInvoices;

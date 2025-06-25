import TableFilters from '@/features/InvoicesApproval/components/Invoices/Filters/TableFilters';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';
import { getTabStatus } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useSelector } from 'react-redux';
import InvoiceContent from '@/features/InvoicesApproval/components/Invoices/InvoiceContent';

const LEGAL_OWNER = 'REDF';

const SrcInvoices = () => {
  const tabStatus = useSelector(getTabStatus);

  return (
    <div className="px-2 sm:px-6 mt-4  flex flex-col gap-4 mb-20">
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-[max-content,1fr] gap-7 items-center mb-4 w-full">
        <h2 className=" font-bold text-2xl">التقارير و شهادات الإنجاز</h2>
        <TableFilters legalOwner={LEGAL_OWNER} />
      </div>

      <ErrorFallback>
        <InvoiceContent legalOwner={LEGAL_OWNER} tabStatus={tabStatus} />
      </ErrorFallback>
    </div>
  );
};

export default SrcInvoices;

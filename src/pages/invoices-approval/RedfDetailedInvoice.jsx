import FileDetailsHeader from '@/features/InvoicesApproval/components/DetailedInvoice/Redf/Heading';
import TabsPicker from '@/features/InvoicesApproval/components/DetailedInvoice/Redf/TabsPicker';

import TableInstallments from '@/features/InvoicesApproval/components/DetailedInvoice/Redf/TableInstallments';
import TableOutstanding from '@/features/InvoicesApproval/components/DetailedInvoice/Redf/TableOutstanding';
import TableSadad from '@/features/InvoicesApproval/components/DetailedInvoice/Redf/TableSadad';
import TableSkeleton from '@/components/TableSekelton';
import TableMonthlyInstallment from '@/features/InvoicesApproval/components/DetailedInvoice/Redf/TableMonthlyInstallment';

import ErrorFallback from '@/features/contracts/components/ErrorFallback';

import { useParams } from 'react-router';
import { useRedfDetailedInvoiceRequest } from '@/features/InvoicesApproval/hooks/useInvoiceDetailedRequest';
import { useSelector } from 'react-redux';
import { getCurrentTab } from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';

const RedfDetailedInvoice = () => {
  const INSTALLMENTS = 'Installment';
  const SADAD = 'SadadTransaction';
  const OUTSTANDING = 'Outstanding';
  const MONTHLY_INSTALLMENT = 'MonthlyInstallment';

  const { requestId, reportId } = useParams();

  const currentTab = useSelector(getCurrentTab);

  const { data: detailedInvoiceData, isLoading: detailedInvoiceLoading } =
    useRedfDetailedInvoiceRequest(requestId, reportId);

  return (
    <div className="px-2 sm:px-6 mt-4 flex flex-col gap-4">
      {!detailedInvoiceLoading && (
        <FileDetailsHeader
          data={{
            requestId,
            reportId,
            status: detailedInvoiceData.status,
          }}
        />
      )}
      {/*  */}
      <TabsPicker />
      {/*  */}
      {detailedInvoiceLoading ? (
        <TableSkeleton />
      ) : (
        <ErrorFallback>
          {currentTab === INSTALLMENTS && (
            <TableInstallments
              invoice={detailedInvoiceData}
              params={{ requestId }}
            />
          )}
          {currentTab === OUTSTANDING && (
            <TableOutstanding
              invoice={detailedInvoiceData}
              params={{ requestId }}
            />
          )}
          {currentTab === SADAD && (
            <TableSadad invoice={detailedInvoiceData} params={{ requestId }} />
          )}
          {currentTab === MONTHLY_INSTALLMENT && (
            <TableMonthlyInstallment
              invoice={detailedInvoiceData}
              params={{ requestId }}
            />
          )}
        </ErrorFallback>
      )}
    </div>
  );
};
export default RedfDetailedInvoice;

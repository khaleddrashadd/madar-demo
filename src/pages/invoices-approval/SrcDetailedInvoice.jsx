import SrcInvoiceHeading from '@/features/InvoicesApproval/components/DetailedInvoice/SRC/Heading';
import DetailedInvoiceTable from '@/features/InvoicesApproval/components/DetailedInvoice/SRC/Table';
import { useParams } from 'react-router';
import { useSrcDetailedInvoiceRequest } from '@/features/InvoicesApproval/hooks/useInvoiceDetailedRequest';
import TableSkeleton from '@/components/TableSekelton';
import ErrorFallback from '@/features/contracts/components/ErrorFallback';
import SRCDetailedFilter from '@/features/InvoicesApproval/components/DetailedInvoice/SRC/SRCDetailedFilter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilterData,
  setFilterData,
} from '@/features/InvoicesApproval/store/srcDetailedInvoiceSlice';

const SrcDetailedInvoice = () => {
  const { requestId, reportId } = useParams();

  const { data: detailedInvoiceData, isLoading: detailedInvoiceLoading } =
    useSrcDetailedInvoiceRequest(requestId, reportId);

  const dispatch = useDispatch();

  const filterState = useSelector(getFilterData);
  const handleFilterChange = (key, value) => {
    dispatch(
      setFilterData({
        ...filterState,
        [key]: value?.trim(),
      })
    );
  };

  return (
    <div className="px-2 sm:px-6 mt-4  flex flex-col gap-4">
      {detailedInvoiceLoading ? (
        <TableSkeleton />
      ) : (
        <ErrorFallback>
          <SrcInvoiceHeading
            data={{ requestId, reportId, detailedInvoiceData }}
          />
          <SRCDetailedFilter
            filterState={filterState}
            onFilterChange={handleFilterChange}
          />
          <DetailedInvoiceTable invoice={detailedInvoiceData} />
        </ErrorFallback>
      )}
    </div>
  );
};
export default SrcDetailedInvoice;

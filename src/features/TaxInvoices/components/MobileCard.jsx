import { ChevronDown, Clock, Eye } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ar';
import { cn } from '@/lib/utils';
import NestedTable from './tables/TableReports';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';

import { getPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { setPagination } from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useDispatch, useSelector } from 'react-redux';
// import getTaxInvoicesFile from '../../services/taxinvoicesService';
import { toast } from 'react-toastify';
import NestedTableRowAccordion from './tables/NestedTableRowAccordion';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

dayjs.locale('ar');
const isNewMessage = false; // Placeholder for new message state

const formatDate = (date, format = 'DD/MM/YYYY') => {
  return date ? dayjs(date).format(format) : '--';
};
const mockData = {
  items: [
    { id: 1, portfolioName: 'Portfolio 1', creationDate: '2022-01-01' },
    { id: 2, portfolioName: 'Portfolio 2', creationDate: '2022-02-01' },
    { id: 3, portfolioName: 'Portfolio 3', creationDate: '2022-03-01' },
    { id: 4, portfolioName: 'Portfolio 4', creationDate: '2022-04-01' },
    { id: 5, portfolioName: 'Portfolio 5', creationDate: '2022-05-01' },
  ],
};
const MobileTableCard = ({
  classNames,
  data,
  legalOwner,
  setIsLogDialogOpen,
}) => {
  const dispatch = useDispatch();
  const pagination = useSelector(getPagination);

  const [openRowId, setOpenRowId] = useState(null);

  const handlePageChange = (pageNumber) => {
    return dispatch(setPagination({ ...pagination, pageNumber }));
  };

  const handlePageSize = (pageSize) => {
    return dispatch(setPagination({ pageNumber: 1, pageSize }));
  };
  const handleShowTaxInvoice = async (itemId) => {
    try {
      const res = await getTaxInvoicesFile(itemId);
      const blob = res.data;
      const file = new Blob([blob], { type: 'application/pdf' });
      const blobUrl = window.URL.createObjectURL(file);
      window.open(blobUrl, '_blank');
    } catch (error) {
      console.error(error);
      toast.error('حدث خطأ أثناء تحميل الفاتورة الضريبية.', {
        theme: 'colored',
      });
    }
  };

  return (
    <div className={`${classNames}`}>
      {data?.items?.length > 0 ? (
        data.items.map((item) => (
          <div
            className="mb-4 rounded-lg bg-white p-4 shadow-custom-md"
            key={item.id}
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-right text-sm text-ivory-900">
                  تاريخ الانشاء
                </span>
                <span className="text-ivory-950">
                  {formatDate(item.issuedAt, 'DD/MM/YYYY')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-right text-sm text-ivory-900">
                  شهر التحصيل
                </span>
                <span className="text-ivory-950">
                  {formatDate(item.fromCollection, 'MMMM')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-right text-sm text-ivory-900">
                  المحفظة
                </span>
                <span className="text-ivory-950">
                  {item.portfolioName || '--'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-right text-sm text-ivory-900">
                  فترة التحصيل
                </span>
                <div className="flex flex-col items-end">
                  <div>
                    <span className="font-semibold">من</span>{' '}
                    {formatDate(item.fromCollection)}{' '}
                  </div>
                  <div>
                    <span className="font-semibold">-</span>{' '}
                    <span className="font-semibold">إلى</span>{' '}
                    {formatDate(item.toCollection)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-right text-sm text-ivory-900">
                  الحالة
                </span>
                {item.statusCode === 'UnderProgressWithLegalOwner' ? (
                  <Badge className="bg-ivory-60 text-ivory-950 border border-ivory-600 px-4 py-1 rounded-full  hover:bg-extended-250">
                    مسودة
                  </Badge>
                ) : (
                  <Badge className="bg-secondary-350  border border-secondary-700 px-4 py-1 rounded-full text-ivory-950 hover:bg-extended-250">
                    تم الإصدار
                  </Badge>
                )}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-right text-sm text-ivory-900">
                  الفاتورة الضريبية
                </span>

                <Button
                  variant="outline"
                  className="border-extended-500 text-xs h-auto hover:bg-white text-extended-500 hover:text-extended-500  p-[7px] gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShowTaxInvoice(item.id);
                  }}
                >
                  <Eye />
                </Button>
              </div>

              <div className="flex gap-2 justify-center">
                <Button
                  variant="ghost"
                  className="w-full flex items-center justify-center text-secondary-600 bg-secondary-100"
                  onClick={() =>
                    setOpenRowId(openRowId === item.id ? null : item.id)
                  }
                >
                  المزيد
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      openRowId === item.id ? 'rotate-180' : ''
                    )}
                  />
                </Button>

                {/* HANDLE LOG */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="items-center gap-2 p-2"
                  onClick={() => setIsLogDialogOpen(true)}
                >
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {openRowId === item.id && (
              <Table dir="rtl">
                <TableBody>
                  <NestedTableRowAccordion
                    data={mockData}
                    tableClassName="border-separate border-spacing-y-3 p-1 pb-0"
                  />
                </TableBody>
              </Table>
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <EmptyState>لم نحصل على نتائج، برجاء المحاولة مرة أخرى.</EmptyState>
        </div>
      )}

      {data.totalPages > 0 && (
        <Pagination
          currentPage={pagination.pageNumber}
          pageSize={pagination.pageSize}
          totalPages={data.totalPages}
          totalItems={data.totalCount}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSize}
        />
      )}
    </div>
  );
};

export default MobileTableCard;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import EmptyState from '@/components/EmptyState';
import { cn } from '@/lib/utils';

import { getPagination } from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';
import { setPagination } from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@/components/Pagination';
import SaudiCurrency from '@/components/partials/SaudiCurrency';

const TableOutstanding = ({ invoice }) => {
  const dispatch = useDispatch();

  const pagination = useSelector(getPagination);

  const handlePageChange = (pageNumber) => {
    return dispatch(setPagination({ ...pagination, pageNumber }));
  };

  const handlePageSize = (pageSize) => {
    return dispatch(setPagination({ pageNumber: 1, pageSize }));
  };

  return (
    <Card className={cn('w-full shadow-sm')}>
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader className="text-sm">
            <TableRow className="bg-primary-50">
              <TableHead className="text-center font-semibold">
                رقم مرجع LMS
              </TableHead>
              {/* <TableHead className="text-center font-semibold">
                رقم الحساب
              </TableHead> */}
              <TableHead className="text-center font-semibold">
                رقم المرجع
              </TableHead>
              <TableHead className="text-center font-semibold">
                رقم الهوية
              </TableHead>
              <TableHead className="text-center font-semibold">
                اسم المستفيد
              </TableHead>
              <TableHead className="text-center font-semibold">
                حالة القسط
              </TableHead>
              <TableHead className="text-center font-semibold">
                المتبقي
              </TableHead>
              <TableHead className="text-center font-semibold">
                المبلغ الرئيسي المتبقي
              </TableHead>
              <TableHead className="text-center font-semibold">
                رسوم الشركة
              </TableHead>
              <TableHead className="text-center font-semibold">
                ضريبة الرسوم
              </TableHead>
              <TableHead className="text-center font-semibold">
                إجمالي الرسوم
              </TableHead>
              <TableHead className="text-center font-semibold">
                الملاحظات
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoice?.data?.items?.length > 0 ? (
              invoice?.data?.items.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    {row.lmsReferenceNo || '--'}
                  </TableCell>
                  {/* <TableCell className="text-center">
                    {row.accountNo || '--'}
                  </TableCell> */}
                  <TableCell className="text-center">
                    {row.redfRefNumber || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.nationalID || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.customerName || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.bucketStatus || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.outstanding} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.outstandingPrincipal} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.companyFees} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.feesTax} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.totalFees} />
                  </TableCell>
                  <TableCell className="text-center">
                    {row.note || '--'}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={12} className="text-center py-10">
                  <EmptyState>
                    لم نحصل على نتائج، برجاء المحاولة مرة أخرى.
                  </EmptyState>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {invoice.data.totalPages > 0 && (
        <Pagination
          currentPage={pagination.pageNumber}
          pageSize={pagination.pageSize}
          totalPages={invoice.data.totalPages}
          totalItems={invoice.data.totalCount}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSize}
        />
      )}
    </Card>
  );
};

export default TableOutstanding;

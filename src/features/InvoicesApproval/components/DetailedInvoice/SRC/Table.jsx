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

import { getPagination } from '@/features/InvoicesApproval/store/srcDetailedInvoiceSlice';
import { setPagination } from '@/features/InvoicesApproval/store/srcDetailedInvoiceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@/components/Pagination';
import { formatDate } from '@/lib/utils';
import SaudiCurrency from '@/components/partials/SaudiCurrency';

const DetailedInvoiceTable = ({ invoice }) => {
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
                رقم الحساب
              </TableHead>

              <TableHead className="text-center font-semibold">
                رقم الهوية
              </TableHead>
              <TableHead className="text-center font-semibold">
                اسم المستفيد
              </TableHead>
              <TableHead className="text-center font-semibold">
                إغلاق UBP
              </TableHead>
              <TableHead className="text-center font-semibold">
                فتح UBP
              </TableHead>
              <TableHead className="text-center font-semibold">
                حالة القسط
              </TableHead>
              <TableHead className="text-center font-semibold">
                رقم القسط
              </TableHead>
              <TableHead className="text-center font-semibold">
                تاريخ القسط
              </TableHead>
              <TableHead className="text-center font-semibold">
                مبلغ القسط
              </TableHead>
              <TableHead className="text-center font-semibold">الأصل</TableHead>
              <TableHead className="text-center font-semibold">
                الفائدة
              </TableHead>
              <TableHead className="text-center font-semibold">
                رسوم الخدمة
              </TableHead>
              <TableHead className="text-center font-semibold">
                آخر دفعة
              </TableHead>
              <TableHead className="text-center font-semibold">
                آخر تاريخ
              </TableHead>
              <TableHead className="text-center font-semibold">
                الحالة
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
                  <TableCell className="text-center">{row.accountNo}</TableCell>
                  <TableCell className="text-center">
                    {row.nationalID || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.customerName || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.closingUBP || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.openingUBP || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.bucketStatus || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.installmentNo || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {formatDate(row.installmentDate) || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.installment} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.principal} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.interest} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.servicingFees} />
                  </TableCell>
                  <TableCell className="text-center">
                    <SaudiCurrency value={row.lastPayment} />
                  </TableCell>
                  <TableCell className="text-center">
                    {formatDate(row.lastDate) || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.status || '--'}
                  </TableCell>

                  <TableCell className="text-center">
                    {row.note || '--'}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={18} className="text-center py-10">
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

export default DetailedInvoiceTable;

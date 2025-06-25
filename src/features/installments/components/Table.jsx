import { useDispatch, useSelector } from 'react-redux';
import { setPagination } from '../store/paymentsSlice';
import { formatDate } from '@/lib/utils';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import { getPagination } from '@/features/installments/store/paymentsSlice';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';
import SaudiRiyal from '@/components/SaudiRiyal';

const InstallmentsTable = ({ className, paymentsData, ...props }) => {
  const dispatch = useDispatch();
  const pagination = useSelector(getPagination);

  const handlePageChange = (pageNumber) => {
    return dispatch(setPagination({ ...pagination, pageNumber }));
  };

  const handlePageSize = (pageSize) => {
    return dispatch(setPagination({ pageNumber: 1, pageSize }));
  };

  return (
    <Card className={cn('w-full shadow-sm', className)} {...props}>
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader className="text-sm">
            <TableRow className="bg-primary-50">
              <TableHead className="text-center font-semibold">
                رقم العقد
              </TableHead>
              <TableHead className="text-center font-semibold">
                رقم الهوية
              </TableHead>
              <TableHead className="text-center font-semibold">
                اسم المستفيد
              </TableHead>

              <TableHead className="text-center font-semibold">
                المبلغ المفترض دفعه
              </TableHead>

              <TableHead className="text-center font-semibold">
                المبلغ المسدد
              </TableHead>

              <TableCell className="text-center font-semibold">
                المبلغ المتبقي
              </TableCell>
              <TableHead className="text-center font-semibold">
                حالة القسط
              </TableHead>
              <TableHead className="text-center font-semibold">
                تاريح الإصدار
              </TableHead>
              <TableHead className="text-center font-semibold">
                تاريح الدفع
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentsData?.data?.data?.items?.length > 0 ? (
              paymentsData?.data?.data?.items?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">
                    {row.mortgageAccountNumber || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.nationalId || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.beneficiaryName || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {row.installmentAmount?.toLocaleString() || '--'}
                      </span>
                      <div>
                        {!!row.installmentAmount?.toLocaleString() && (
                          <SaudiRiyal size="sm" />
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {row.totalPaidAmount?.toLocaleString() || '--'}
                      </span>
                      <div>
                        {!!row.totalPaidAmount?.toLocaleString() && (
                          <SaudiRiyal size="sm" />
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {row.remainingAmount?.toLocaleString() || '--'}
                      </span>
                      <div>
                        {!!row.remainingAmount?.toLocaleString() && (
                          <SaudiRiyal size="sm" />
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {row.installmentState === 'FullyPaid' && (
                      <Badge className="bg-secondary-350  border border-secondary-700 px-4 py-1 rounded-full text-ivory-950 hover:bg-extended-250">
                        مدفوع بالكامل
                      </Badge>
                    )}

                    {row.installmentState === 'PartiallyPaid' && (
                      <Badge className="bg-extended-250 text-ivory-950 border border-extended-750 px-4 py-1 rounded-full font-medium hover:bg-extended-250">
                        مدفوع جزئياً
                      </Badge>
                    )}

                    {row.installmentState === 'NotPaid' && (
                      <Badge className="bg-danger-100 text-ivory-950 border border-danger-300 px-4 py-1 rounded-full font-medium hover:bg-extended-250">
                        غير مدفوع
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {formatDate(row.issuedAt) || '--'}
                  </TableCell>
                  <TableCell className="text-center">
                    {formatDate(row.paidAt) || '--'}
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

      <Pagination
        currentPage={pagination.pageNumber}
        pageSize={pagination.pageSize}
        totalPages={paymentsData?.data?.data?.totalPages}
        totalItems={paymentsData?.data?.data?.totalCount}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSize}
      />
    </Card>
  );
};

export default InstallmentsTable;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import SaudiRiyal from '@/components/SaudiRiyal';

const ContractsReportTable = ({ data, setPaginationData }) => {
  const handlePageChange = (page) => {
    setPaginationData((prev) => ({ ...prev, pageNumber: page }));
  };

  const handlePageSize = (size) => {
    setPaginationData((prev) => ({ ...prev, pageSize: size }));
  };

  return (
    <div className="w-full px-4">
      <div className="rounded-md border">
        <Table dir="rtl">
          <TableHeader className="text-sm">
            <TableRow className="bg-primary-50">
              <TableHead className="text-center font-semibold text-nowrap">
                رقم العقد
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                اسم المستفيد
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                رقم الهوية
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                حالة العقد
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                التأخير في السداد بالأيام
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                المبلغ المتأخر
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                المبلغ المتبقي
              </TableHead>
              <TableHead className="text-center font-semibold text-nowrap">
                أصل المبلغ
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.items?.length === 0 ? (
              <TableRow>
                <TableCell colSpan="11">
                  <EmptyState className="mx-auto">
                    لم نحصل على نتائج، برجاء المحاولة مرة أخرى.
                  </EmptyState>
                </TableCell>
              </TableRow>
            ) : (
              data?.items?.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="text-center">
                    {row.mortgageAccountNumber}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.beneficiaryName}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.nationalId}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.bucketStatus}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.delayedDays}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <span>{row.overdueAmount?.toLocaleString() || '--'}</span>
                      {!!row.overdueAmount?.toLocaleString() && (
                        <div>
                          <SaudiRiyal size="sm" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {row.remainingBalanceAmount?.toLocaleString() || '--'}
                      </span>
                      {!!row.remainingBalanceAmount?.toLocaleString() && (
                        <div>
                          <SaudiRiyal size="sm" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <span>
                        {row.originalOutstandingPrincipal?.toLocaleString() ||
                          '--'}
                      </span>
                      {!!row.originalOutstandingPrincipal?.toLocaleString() && (
                        <div>
                          <SaudiRiyal size="sm" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination
        className="justify-end"
        totalItems={data?.totalCount}
        totalPages={data?.totalPages}
        currentPage={data?.pageNumber}
        pageSize={data?.pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSize}
      />
    </div>
  );
};

export default ContractsReportTable;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Pagination from '@/components/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const TransactionTable = () => {
  return (
    <Card className="mt-6 h-fit bg-white">
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <h2 className="text-lg font-semibold">جدول عمليات السداد</h2>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full px-4">
          <div className="rounded-xl border">
            <Table
              dir="rtl"
              className="border-separate border-spacing-y-3 p-1 pb-0"
            >
              {/*  */}
              <TableHeader className="text-sm">
                <TableRow className="bg-primary-50 rounded-xl">
                  <TableHead className="text-center  font-semibold rtl:rounded-tr-xl ltr:rounded-tl-xl">
                    رقم العملية
                  </TableHead>
                  <TableHead className="text-center  font-semibold">
                    تاريخ الدفع
                  </TableHead>
                  <TableHead className="text-center  font-semibold rtl:rounded-tl-xl ltr:rounded-tl-2xr">
                    القيمة
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((e) => (
                  <TableRow key={e}>
                    <TableCell className="text-center border-b border-ivory-200">
                      98767611
                    </TableCell>
                    <TableCell className="text-center border-b border-ivory-200">
                      05/02/2025
                    </TableCell>
                    <TableCell className="text-center border-b border-ivory-200">
                      30,500.00
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination
            currentPage={1}
            pageSize={10}
            totalPages={6}
            totalItems={600}
            onPageChange={(page) => console.log(page)}
            onPageSizeChange={(size) => console.log(size)}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default TransactionTable;

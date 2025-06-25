import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { CONTRACTS_STATUS } from '../constants/contractsStatus';
import { Skeleton } from '@/components/ui/skeleton';
import EmptyState from '@/components/EmptyState';
import { numberSeparator } from '@/utils/numberSeparator';
import { SaudiRiyal } from 'lucide-react';

const UploadedContractsTable = ({ renderActions, data, isLoading }) => {
  if (isLoading) return <Skeleton className="w-full h-[21.8rem]" />;
  if (!data?.items?.length) {
    return <EmptyState>لم نحصل على نتائج، برجاء المحاولة مرة أخرى.</EmptyState>;
  }

  return (
    <div>
      <Table dir="rtl" className="border-separate border-spacing-y-3 p-1 pb-0">
        {/*  */}
        <TableHeader className="text-sm">
          <TableRow className="bg-primary-50">
            <TableHead className="text-center  font-semibold">
              رقم المرجع
            </TableHead>
            <TableHead className="text-center  font-semibold">
              رقم العقد
            </TableHead>
            <TableHead className="text-center  font-semibold">
              اسم المستفيد
            </TableHead>
            <TableHead className="text-center  font-semibold">
              رقم الهوية
            </TableHead>
            <TableHead className="text-center  font-semibold">
              تاريخ الإستحقاق
            </TableHead>
            <TableHead className="text-center  font-semibold">
              مبلغ الإستحقاق
            </TableHead>
            <TableHead className="text-center  font-semibold">
              حالة العقد
            </TableHead>
            <TableHead className="text-center  font-semibold">
              الإجراءات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.items?.map((item) => (
            <TableRow key={item?.contractNumber}>
              <TableCell className="text-center border-b border-ivory-200">
                {item?.referenceNumber || '--'}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {item?.contractNumber}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {item?.beneficiaryName}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {item?.nationalId}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {formatDate(item?.maturityDate, 'DD/MM/YYYY')}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <div className="flex items-center justify-center gap-[6px]">
                  <span>{numberSeparator(item?.outstandingPrincipal)}</span>
                  <SaudiRiyal size={16} />
                </div>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <Badge
                  variant={CONTRACTS_STATUS[item?.contractStatus]?.variant}
                  className={CONTRACTS_STATUS[item?.contractStatus]?.className}
                >
                  {item?.contractStatus}
                </Badge>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {renderActions ? renderActions(item?.contractNumber) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default UploadedContractsTable;

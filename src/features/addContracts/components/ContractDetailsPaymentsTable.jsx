import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { numberSeparator } from '@/utils/numberSeparator';
import { useNavigate } from '@tanstack/react-router';
import { Eye, SaudiRiyal } from 'lucide-react';

const INSTALLMENT_STATUS = {
  Paid: {
    name: 'PAID',
    variant: 'success',
    title: 'مدفوع',
  },
  NotPaid: {
    name: 'NOT_PAID',
    variant: 'destructive',
    title: 'غير مدفوع',
  },
  PartiallyPaid: {
    name: 'PARTIALLY_PAID',
    variant: 'wait',
    title: 'مدفوع جزئيا',
  },
  NotDue: {
    name: 'NOT_DUE',
    variant: 'neutral',
    title: 'لم يستحق',
  },
};

const ContractDetailsPaymentsTable = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Table dir="rtl" className="border-separate border-spacing-y-3 p-1 pb-0">
        {/*  */}
        <TableHeader className="text-sm">
          <TableRow className="bg-primary-50">
            <TableHead className="text-center  font-semibold">
              رقم القسط
            </TableHead>
            <TableHead className="text-center  font-semibold">
              تاريخ القسط
            </TableHead>
            <TableHead className="text-center  font-semibold">
              القسط الشهري
            </TableHead>
            <TableHead className="text-center  font-semibold">
              مبلغ الفائدة
            </TableHead>
            <TableHead className="text-center  font-semibold">الأصل</TableHead>
            <TableHead className="text-center  font-semibold">
              المتبقي
            </TableHead>
            <TableHead className="text-center  font-semibold">
              حالة القسط
            </TableHead>
            <TableHead className="text-center  font-semibold">
              تاريخ الدفع
            </TableHead>
            <TableHead className="text-center  font-semibold">
              الإجراءات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.pagedInstallments.items.map((installment) => (
            <TableRow key={installment.installmentNumber}>
              <TableCell className="text-center border-b border-ivory-200">
                {installment.installmentNumber}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {formatDate(installment.installmentDate, 'DD/MM/YYYY')}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <div className="flex items-center gap-[6px] justify-center">
                  {numberSeparator(installment.monthlyInstallment)}
                  <SaudiRiyal className="w-4 h-4 text-ivory-950" />
                </div>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <div className="flex items-center gap-[6px] justify-center">
                  {numberSeparator(installment.interestAmount)}
                  <SaudiRiyal className="w-4 h-4 text-ivory-950" />
                </div>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <div className="flex items-center gap-[6px] justify-center">
                  {numberSeparator(installment.principal)}
                  <SaudiRiyal className="w-4 h-4 text-ivory-950" />
                </div>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <div className="flex items-center gap-[6px] justify-center">
                  {numberSeparator(installment.remainingBalance)}
                  <SaudiRiyal className="w-4 h-4 text-ivory-950" />
                </div>
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <Badge
                  variant={
                    INSTALLMENT_STATUS[installment.installmentStatus]?.variant
                  }
                >
                  {INSTALLMENT_STATUS[installment.installmentStatus]?.title}
                </Badge>
                {/* <Badge variant="destructive">غير مدفوع</Badge>
                <Badge variant="success">مدفوع</Badge>
                <Badge variant="wait">مدفوع جزئياً</Badge>
                <Badge variant="neutral">لم يستحق</Badge> */}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                {formatDate(installment.paymentDate, 'DD/MM/YYYY')}
              </TableCell>
              <TableCell className="text-center border-b border-ivory-200">
                <Button
                  variant="ghost"
                  className="p-0 h-fit"
                  onClick={() =>
                    navigate({
                      to: `/installment/${data?.id || 21104640392701}`,
                    })
                  }
                >
                  <Badge
                    variant="wait"
                    className="border-none h-8 w-8 flex items-center justify-center rounded-md"
                  >
                    <Eye className="w-4 h-4 text-extended-500" />
                  </Badge>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ContractDetailsPaymentsTable;

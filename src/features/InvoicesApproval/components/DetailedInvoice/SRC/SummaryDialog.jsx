import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

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
import { X } from 'lucide-react';
import SaudiCurrency from '@/components/partials/SaudiCurrency';

const SummaryDialog = ({ open, onOpenChange, data }) => {
  const formatSummaryData = (data) => {
    // Combine all months data into a single array
    const allMonths = [data.lastMonthSummary, ...data.otherMonthsSummaries];

    // Calculate totals
    const totals = {
      insideTotal: 0,
      outsideTotal: 0,
      totalCollection: 0,
    };

    for (const month of allMonths) {
      totals.insideTotal += month.insideTotalInstallment;
      totals.outsideTotal += month.outsideTotalInstallment;
    }

    totals.totalCollection = totals.insideTotal + totals.outsideTotal;

    // Format numbers to have commas and 2 decimal places
    const formatNumber = (num) =>
      num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Create summary data array in the desired format
    return [
      {
        label: 'إجمالي الأقساط داخل النظام',
        value: formatNumber(totals.insideTotal),
      },
      {
        label: 'إجمالي الأقساط خارج النظام',
        value: formatNumber(totals.outsideTotal),
      },
      {
        label: 'إجمالي التحصيل',
        value: formatNumber(totals.totalCollection),
      },
    ];
  };

  const summaryData = formatSummaryData(data);

  const MobileCard = ({ data }) => (
    <div className="bg-white p-4 border-b last:border-b-0">
      <div className="text-lg font-medium mb-3 text-right">
        {data.totalInstallmentDate || '--'}
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-ivory-900 ">الأقساط داخل النظام</span>
          <span className="text-right text-ivory-950 text-sm">
            <SaudiCurrency value={data.insideTotalInstallment} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ivory-900">الأقساط خارج النظام</span>
          <span className="text-right text-ivory-950 text-sm">
            <SaudiCurrency value={data.outsideTotalInstallment} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ivory-900">رسوم الخدمة</span>
          <span className="text-right text-ivory-950 text-sm">
            <SaudiCurrency value={data.totalFees} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ivory-900">ضريبة (15%)</span>
          <span className="text-right text-ivory-950 text-sm">
            {data.vat || '--'}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[75%]
        max-h-[65%]
    md:w-[85%]
    lg:max-w-3xl
    overflow-y-auto
    p-4
    sm:p-6
    [&::-webkit-scrollbar]:w-[6px]
    [&::-webkit-scrollbar]:h-[6px]
    [&::-webkit-scrollbar]:rounded-xl
    [&::-webkit-scrollbar]:bg-[#E9E9E9]
    [&::-webkit-scrollbar-thumb]:rounded-xl
    [&::-webkit-scrollbar-thumb]:bg-primary-500
    [&>button[type='button']]:hidden
    mx-auto
    rounded-lg
    sm:rounded-xl
    transition-all
    duration-300
    ease-in-out max-sm:left-[40%]"
        dir="rtl"
        aria-describedby="summary"
      >
        <DialogHeader className="border-b pb-4">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold">
              الإجمالي
            </DialogTitle>
            <DialogClose className="w-6 h-6 opacity-70 hover:opacity-100">
              <X className="text-[#898C8E] w-5 h-5" />
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="mt-4">
          <Card className={cn('w-full shadow-sm rounded-b-none')}>
            {/* Desktop view */}
            <div className="hidden md:block rounded-md rounded-b-none border">
              <Table dir="rtl">
                <TableHeader className="text-sm">
                  <TableRow className="bg-primary-50">
                    <TableHead className="text-center font-semibold">
                      التاريخ
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      الأقساط داخل النظام
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      الأقساط خارج النظام
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      رسوم الخدمة
                    </TableHead>
                    <TableHead className="text-center font-semibold">
                      ضريبة (15%)
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-center">
                      {data.lastMonthSummary.totalInstallmentDate || '--'}
                    </TableCell>
                    <TableCell className="text-center">
                      <SaudiCurrency
                        value={data.lastMonthSummary.insideTotalInstallment}
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <SaudiCurrency
                        value={data.lastMonthSummary.outsideTotalInstallment}
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      <SaudiCurrency value={data.lastMonthSummary.totalFees} />
                    </TableCell>
                    <TableCell className="text-center">
                      <SaudiCurrency value={data.lastMonthSummary.vat} />
                    </TableCell>
                  </TableRow>
                  {data.otherMonthsSummaries.length > 0 &&
                    data.otherMonthsSummaries.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-center">
                          {row.totalInstallmentDate || '--'}
                        </TableCell>
                        <TableCell className="text-center">
                          <SaudiCurrency value={row.insideTotalInstallment} />
                        </TableCell>
                        <TableCell className="text-center">
                          <SaudiCurrency value={row.outsideTotalInstallment} />
                        </TableCell>
                        <TableCell className="text-center">
                          <SaudiCurrency value={row.totalFees} />
                        </TableCell>
                        <TableCell className="text-center">
                          <SaudiCurrency value={row.vat} />
                        </TableCell>
                      </TableRow>
                    ))}
                  {data.otherMonthsSummaries.length === 0 &&
                    !data.lastMonthSummary && (
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

            {/* Mobile view */}
            <div className="md:hidden border rounded-md rounded-b-none">
              <MobileCard data={data.lastMonthSummary} />
              {data.otherMonthsSummaries.length > 0 &&
                data.otherMonthsSummaries.map((row, index) => (
                  <MobileCard key={index} data={row} />
                ))}
              {data.otherMonthsSummaries.length === 0 &&
                !data.otherMonthsSummaries && (
                  <EmptyState>
                    لم نحصل على نتائج، برجاء المحاولة مرة أخرى.
                  </EmptyState>
                )}
            </div>
          </Card>

          <div className="bg-primary-500 text-white rounded-b-md" dir="rtl">
            {summaryData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3 border-b border-blue-800 last:border-0 space-y-1 md:space-y-0"
              >
                <span className="text-sm md:text-base order-2 md:order-1">
                  <SaudiCurrency value={item.value} variant={'#fff'} />
                </span>
                <span className="text-sm md:text-base order-1 md:order-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SummaryDialog;

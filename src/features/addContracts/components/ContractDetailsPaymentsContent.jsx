import { Button } from '@/components/ui/button';
import ContractDetailsPaymentsTable from './ContractDetailsPaymentsTable';
import { DownloadIcon, Funnel, Search } from 'lucide-react';
import ExportExcelButton from '@/components/ExportExcelButton';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import FilterContractDetailsPaymentsDialog from './FilterContractDetailsPaymentsDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Pagination from '@/components/Pagination';
import { cn } from '@/lib/utils';

const paymentSchedules = {
  pagedInstallments: {
    items: [
      {
        installmentNumber: 9876761116,
        installmentDate: '2026-05-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'Paid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 9876761115,
        installmentDate: '2026-04-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'PartiallyPaid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 9876761114,
        installmentDate: '2026-03-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'PartiallyPaid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 9876761113,
        installmentDate: '2026-02-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'NotDue',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 9876761112,
        installmentDate: '2026-01-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'Paid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 9876761111,
        installmentDate: '2025-12-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'Paid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 9876761110,
        installmentDate: '2025-11-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'NotPaid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 987676119,
        installmentDate: '2025-10-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'NotDue',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 987676118,
        installmentDate: '2025-09-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'Paid',
        paymentDate: '2025-06-22T19:41:47',
      },
      {
        installmentNumber: 987676117,
        installmentDate: '2025-08-24T00:00:00',
        monthlyInstallment: 5192.57,
        interestAmount: 1250.0,
        principal: 3942.57,
        remainingBalance: 1250.0,
        installmentStatus: 'PartiallyPaid',
        paymentDate: '2025-06-22T19:41:47',
      },
    ],
    pageNumber: 1,
    pageSize: 10,
    totalCount: 16,
    totalPages: 2,
    hasPreviousPage: false,
    hasNextPage: true,
  },
};

const ContractDetailsPaymentsContent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterData, setFilterData] = useState({});
  // const deferredSearchValue = useDebounce(searchValue, 1000);
  const [
    isFilterContractDetailsPaymentsDialogOpen,
    setIsFilterContractDetailsPaymentsDialogOpen,
  ] = useState(false);

  const onSubmitFilter = (filterValues) => {
    setFilterData(filterValues);
    console.log(filterValues);
    setIsFilterContractDetailsPaymentsDialogOpen(false);
  };

  const isFilterApplied = Object.values(filterData).some(
    (value) => value !== null && value !== undefined && value !== ''
  );

  return (
    <Card className="h-fit bg-white">
      <CardHeader className="px-4 py-4 bg-white">
        <CardTitle className="text-right font-bold flex items-center justify-between">
          <div className="flex-1 px-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">جدول السداد</h2>
            <div className="flex items-center">
              <div className="flex items-center rtl:pl-3 ltr:pr-3 rtl:border-l ltr:border-r border-ivory-300">
                <div className="flex items-center gap-3">
                  <div className="relative w-full font-normal" dir="rtl">
                    <Input
                      type="text"
                      placeholder="البحث"
                      value={searchValue}
                      onChange={(e) => {
                        //only numbers
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setSearchValue(value);
                        }
                      }}
                      className="pr-10 text-right placeholder:text-right"
                    />
                    <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>

                  <Button
                    onClick={() =>
                      setIsFilterContractDetailsPaymentsDialogOpen(true)
                    }
                    size="icon"
                    variant="outline"
                    className={cn(
                      'border-ivory-600 hover:bg-primary-50/50 text-ivory-600 relative ',
                      isFilterApplied &&
                        'before:absolute rtl:before:left-0 ltr:before:right-0 before:top-0 before:w-2 before:h-2 before:rounded-full before:bg-danger-200 before:-translate-x-1/2 before:-translate-y-1/2'
                    )}
                  >
                    <Funnel className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3 rtl:pr-3 ltr:pl-3">
                <Button
                  variant="outline"
                  className="border-primary-500 hover:bg-primary-50/50 text-primary-500 font-semibold"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span>إستخراج بصيغة REDF</span>
                </Button>

                <ExportExcelButton className="text-primary-500 font-semibold">
                  إستخراج كملف Excel
                </ExportExcelButton>
              </div>
            </div>
          </div>
          <FilterContractDetailsPaymentsDialog
            isOpen={isFilterContractDetailsPaymentsDialogOpen}
            onOpenChange={setIsFilterContractDetailsPaymentsDialogOpen}
            onSubmitFilter={onSubmitFilter}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full px-4">
          <div className="rounded-xl border">
            <ContractDetailsPaymentsTable data={paymentSchedules} />
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
export default ContractDetailsPaymentsContent;

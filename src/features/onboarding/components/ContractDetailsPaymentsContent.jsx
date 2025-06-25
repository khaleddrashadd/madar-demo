import { Button } from '@/components/ui/button';
import ContractDetailsPaymentsTable from './ContractDetailsPaymentsTable';
import { Funnel, Search } from 'lucide-react';
import ExportExcelButton from '@/components/ExportExcelButton';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

import FilterContractDetailsPaymentsDialog from './FilterContractDetailsPaymentsDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Pagination from '@/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import getPaymentschedules from '../services/getPaymentSchedules';
import { useParams } from 'react-router';
import { cn } from '@/lib/utils';

const ContractDetailsPaymentsContent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterData, setFilterData] = useState({});
  const deferredSearchValue = useDebounce(searchValue, 1000);
  console.log(deferredSearchValue);
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

  const { id: contractId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['contract', 'payments', 'search', deferredSearchValue],
    queryFn: () => getPaymentschedules(contractId),
  });

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
                {/* <Button
              variant="outline"
              className="border-primary-500 hover:bg-primary-50/50 text-primary-500"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>إستخراج بصيغة REDF</span>
            </Button> */}

                <ExportExcelButton className="text-primary-500">
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
            <ContractDetailsPaymentsTable />
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

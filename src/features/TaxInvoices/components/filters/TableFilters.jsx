import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import InputWrapper from '@/components/InputWrapper';
import { useInvoiceFilterData } from '@/features/InvoicesApproval/hooks/useInvoiceFilterData';
import {
  setFilterData,
  getFilterData,
} from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import { useDispatch, useSelector } from 'react-redux';

const TableFilters = ({ legalOwner }) => {
  const dispatch = useDispatch();
  const filterState = useSelector(getFilterData);

  const { data: filterData, isLoading: filterDataLoading } =
    useInvoiceFilterData(legalOwner);

  const handleFilterChange = (key, value) => {
    dispatch(
      setFilterData({
        ...filterState,
        [key]: value,
        // Reset month when year changes
        ...(key === 'collectionYear' && {
          collectionMonth: null,
        }),
      })
    );
  };

  return (
    <div>
      <div className="lg:flex gap-4 lg:justify-self-end grid sm:grid-cols-3">
        <InputWrapper title={'سنة التحصيل'}>
          <Select
            value={filterState.collectionYear}
            placeholder="الكل"
            onValueChange={(year) => handleFilterChange('collectionYear', year)}
          >
            <SelectTrigger className="bg-white lg:w-[140px]" dir="rtl">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>
            <SelectContent>
              {filterDataLoading ? (
                <div className="flex justify-center items-center p-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              ) : (
                <>
                  <SelectItem value={null} key="select-all">
                    الكل
                  </SelectItem>
                  {Object.keys(filterData?.minDate || {}).map((year) => (
                    <SelectItem value={year} key={year}>
                      {year}
                    </SelectItem>
                  ))}
                </>
              )}
            </SelectContent>
          </Select>
        </InputWrapper>

        <InputWrapper title={'شهر التحصيل'}>
          <Select
            value={filterState.collectionMonth}
            placeholder="الكل"
            disabled={!filterState.collectionYear}
            onValueChange={(month) =>
              handleFilterChange('collectionMonth', month)
            }
          >
            <SelectTrigger className="bg-white lg:w-[140px]" dir="rtl">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null} key="select-all">
                الكل
              </SelectItem>
              {filterData?.minDate[filterState.collectionYear]?.map((item) => (
                <SelectItem value={item.number} key={item.number}>
                  {item.ar}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </InputWrapper>

        <InputWrapper title={'المحفظة'}>
          <Select
            value={filterState.portfolioId}
            onValueChange={(id) => handleFilterChange('portfolioId', id)}
          >
            <SelectTrigger className="bg-white lg:w-[140px]" dir="rtl">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>
            <SelectContent>
              {filterDataLoading ? (
                <div className="flex justify-center items-center p-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              ) : (
                <>
                  <SelectItem value={null} key="select-all">
                    الكل
                  </SelectItem>
                  {filterData?.portfolios?.map((item) => (
                    <SelectItem value={item.portfolioId} key={item.portfolioId}>
                      {item.portfolioName || 'بدون اسم'}
                    </SelectItem>
                  ))}
                </>
              )}
            </SelectContent>
          </Select>
        </InputWrapper>
      </div>
    </div>
  );
};

export default TableFilters;

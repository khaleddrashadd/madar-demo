import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  setTabStatus,
  clearFilters,
} from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';
import {
  setFilterData,
  getFilterData,
} from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';
import { useDispatch, useSelector } from 'react-redux';
import REDFDetailedFilter from './REDFDetailedFilter';

const TabsPicker = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(getFilterData);

  const tabs = [
    { value: 'Installment', label: 'الأقساط' },
    { value: 'Outstanding', label: 'الرصيد المستحق' },
    { value: 'SadadTransaction', label: 'عمليات سداد' },
    { value: 'MonthlyInstallment', label: 'أقساط الشهر' },
  ];

  const handleTabChange = (value) => {
    dispatch(setTabStatus(value));
    dispatch(clearFilters());
  };

  const handleFilterChange = (key, value) => {
    dispatch(
      setFilterData({
        ...filterState,
        [key]: value?.trim(),
      })
    );
  };

  const commonTriggerClasses =
    'bg-white text-ivory-950 text-2xs sm:text-sm font-semibold hover:bg-gray-200 after:bg-red-500 border border-ivory-950 data-[state=active]:bg-primary-500 data-[state=active]:text-white';

  return (
    <Tabs defaultValue="Installment" dir="rtl" onValueChange={handleTabChange}>
      <div className="p-2 sm:p-4 border-b border-gray-200 shadow-custom rounded-lg bg-white">
        <TabsList className="bg-transparent gap-2 h-full flex-wrap justify-start items-start">
          {tabs.map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={commonTriggerClasses}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map(({ value }) => (
        <TabsContent key={value} value={value}>
          <REDFDetailedFilter
            filterState={filterState}
            onFilterChange={handleFilterChange}
            tabValue={value}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsPicker;

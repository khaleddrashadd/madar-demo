import { Button } from '@/components/ui/button';

import { RotateCcw } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters } from '../store/paymentsSlice';
import { getFilterData } from '@/features/installments/store/paymentsSlice';
import SelectPortfolio from './SelectPortfolio';
import ContractNumberInput from './ContractNumberInput';
import StartDatePicker from './StartDatePicker';
import EndDatePicker from './EndDatePicker';
import NationalIdInput from './NationalIdInput';
import BeneficiaryNameInput from './BeneficiaryNameInput';

const InstallmentFilter = ({ portfolioData }) => {
  const dispatch = useDispatch();
  const filterData = useSelector(getFilterData);
  const minDate = portfolioData?.paymentStats?.data?.data?.minDate;

  const hasFormValues = Object.values(filterData).some(
    (value) =>
      value !== '' && value !== null && value !== false && value !== undefined
  );

  const handleReset = () => dispatch(clearFilters());

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4 grid-rows-[repeat(3,max-content)] row-start-2 md:row-start-1">
      <div className="flex flex-col gap-4">
        <SelectPortfolio
          filterData={filterData}
          portfoliosData={
            portfolioData?.paymentStats?.data?.data?.portfoliosData
          }
        />

        <ContractNumberInput filterData={filterData} />

        <StartDatePicker minDate={minDate} filterData={filterData} />
      </div>

      <div className="flex flex-col gap-4">
        <NationalIdInput filterData={filterData} />

        <BeneficiaryNameInput filterData={filterData} />

        <EndDatePicker filterData={filterData} />
      </div>

      <Button
        className="flex items-center gap-2 w-max py-4 px-9 bg-white text-md font-semibold border-2
            border-solid border-primary-500 rounded-md text-primary-500 hover:bg-white shadow-sm"
        onClick={handleReset}
        disabled={!hasFormValues}
      >
        <RotateCcw className="stroke-primary-500 w-5 h-5" />
        إعادة تعيين
      </Button>
    </div>
  );
};

export default InstallmentFilter;

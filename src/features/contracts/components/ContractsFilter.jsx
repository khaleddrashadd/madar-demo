import { Select } from '@/components/ui/select';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSelectedMonth,
  getSelectedPortfolio,
  getSelectedYear,
  selectMonth,
  selectPortfolio,
  selectYear,
} from '../store/contractSlice';
import { parseMonths, parseYears } from '@/utils/parseDate';
import useResetOnUnmount from '@/hooks/useResetOnUnmount';

const initialPortfolioData = { value: ' ', label: 'الكل' };

const ContractsFilter = ({ data = [], minDate, resetPagination }) => {
  const dispatch = useDispatch();
  const selectedYear = useSelector(getSelectedYear);
  const selectedMonth = useSelector(getSelectedMonth);
  const selectedPortfolio = useSelector(getSelectedPortfolio);

  const adjustedData = data.map((item) => {
    return {
      value: item.portfolioNumber,
      label: item.portfolioName,
    };
  });
  const modifiedData = [initialPortfolioData, ...adjustedData];

  useResetOnUnmount(() => {
    dispatch(selectPortfolio(' '));
    dispatch(selectYear(' '));
    dispatch(selectMonth(' '));
  });

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel htmlFor="portfolio" className="p-0 text-sm font-normal">
            المحفظة
          </SelectLabel>
          <Select
            id="portfolio"
            value={selectedPortfolio}
            onValueChange={(value) => {
              dispatch(selectPortfolio(value));
              resetPagination();
            }}
          >
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {modifiedData?.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                  {year.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel htmlFor="year" className="p-0 text-sm font-normal">
            السنة
          </SelectLabel>
          <Select
            value={selectedYear}
            onValueChange={(value) => {
              dispatch(selectYear(value));
              resetPagination();
            }}
          >
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {parseYears(minDate)?.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                  {year.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel htmlFor="year" className="p-0 text-sm font-normal">
            الشهر
          </SelectLabel>
          <Select
            disabled={!selectedYear.trim()}
            value={selectedMonth}
            onValueChange={(value) => {
              dispatch(selectMonth(value));
              resetPagination();
            }}
          >
            <SelectTrigger className="w-48 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {parseMonths(minDate, selectedYear)?.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SelectGroup>
      </div>
    </div>
  );
};

export default ContractsFilter;

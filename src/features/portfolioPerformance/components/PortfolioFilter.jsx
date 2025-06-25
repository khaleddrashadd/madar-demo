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
  getSelectedYear,
  selectMonth,
  selectYear,
} from '../store/filterSlice';
import { parseMonths, parseYears } from '@/utils/parseDate';

const PortfolioFilter = ({ minDate }) => {
  const dispatch = useDispatch();
  const selectedYear = useSelector(getSelectedYear);
  const selectedMonth = useSelector(getSelectedMonth);

  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <div className="bg-primary-50 text-sm p-3 rounded-md">
        <SelectGroup className="flex flex-col gap-2">
          <SelectLabel htmlFor="year" className="p-0 text-sm font-normal">
            السنة
          </SelectLabel>
          <Select
            value={selectedYear}
            onValueChange={(value) => dispatch(selectYear(value))}
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
            onValueChange={(value) => dispatch(selectMonth(value))}
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

export default PortfolioFilter;

import InputWrapper from '@/components/InputWrapper';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { setFilterData } from '../store/paymentsSlice';
import { useDispatch } from 'react-redux';
import InstallmentsCalendar from './InstallmentsCalendar';

const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD', 'UTC');
};
const StartDatePicker = ({ minDate, filterData }) => {
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [isStartCalendarChecked, setIsStartCalendarChecked] = useState(
    filterData.startAt === null
  );
  const [startMonth, setStartMonth] = useState(new Date());
  const dispatch = useDispatch();

  // const isStartAtCheckbox = filterData.startAt === null;

  const handleStartCalendarOpen = (open) => {
    setStartCalendarOpen(open);
    if (open) {
      if (filterData.startAt) {
        setStartMonth(new Date(filterData.startAt));
      } else if (minDate) {
        setStartMonth(new Date(minDate));
      } else {
        setStartMonth(new Date());
      }
    }
  };
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsStartCalendarChecked(isChecked);
    dispatch(
      setFilterData({
        ...filterData,
        startAt: isChecked ? null : filterData.startAt || '',
      })
    );
  };

  const handleInputChange = (value) => {
    const startDate = value ? value : null;

    dispatch(
      setFilterData({
        ...filterData,
        startAt: startDate,
      })
    );
  };
  return (
    <InputWrapper title={'من'} className="flex-1">
      <div className="space-y-2">
        <Popover
          open={startCalendarOpen}
          onOpenChange={handleStartCalendarOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full h-12 bg-white border border-solid border-ivory-300 justify-start text-right font-normal',
                !filterData.startAt && 'text-muted-foreground',
                isStartCalendarChecked && 'opacity-50' // Dimmed when checkbox is checked
              )}
              disabled={isStartCalendarChecked} // Disabled when checkbox is checked
            >
              <CalendarIcon className="ml-2 h-4 w-4" />
              {filterData.startAt ? (
                // When a date is selected
                formatDate(filterData.startAt)
              ) : isStartCalendarChecked ? (
                // When checkbox is checked (null value), show minDate as placeholder
                minDate ? (
                  <span className="text-ivory-700">{formatDate(minDate)}</span>
                ) : (
                  <span className="text-ivory-700">من بداية المحفظة</span>
                )
              ) : (
                // Fallback placeholder
                <span className="text-ivory-700">DD/MM/YYYY</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <InstallmentsCalendar
              value={filterData.startAt}
              onSelect={(date) => {
                handleInputChange(formatDate(date));
                setStartCalendarOpen(false); // Close after selection
              }}
              disabled={(date) =>
                filterData.endAt && filterData.endAt !== null
                  ? date > new Date(filterData.endAt)
                  : false
              }
              currentMonth={startMonth}
              onMonthChange={setStartMonth}
            />
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isStartCalendarChecked}
            onChange={handleCheckboxChange}
            className="rounded border-gray-300"
          />
          <span>من بداية المحفظة</span>
        </div>
      </div>
    </InputWrapper>
  );
};

export default StartDatePicker;

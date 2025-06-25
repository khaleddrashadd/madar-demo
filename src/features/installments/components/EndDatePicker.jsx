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
import InstallmentsCalendar from './InstallmentsCalendar';
import { useState } from 'react';
import { setFilterData } from '../store/paymentsSlice';
import { useDispatch } from 'react-redux';

const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD', 'UTC');
};

const EndDatePicker = ({ filterData }) => {
  const [endCalendarOpen, setEndCalendarOpen] = useState(false);
  const [isEndCalendarChecked, setIsEndCalendarChecked] = useState(
    filterData.endAt === null
  );
  const [endMonth, setEndMonth] = useState(new Date());
  const dispatch = useDispatch();
  const today = new Date();

  const handleEndCalendarOpen = (open) => {
    setEndCalendarOpen(open);
    if (open) {
      if (filterData.endAt) {
        setEndMonth(new Date(filterData.endAt));
      } else {
        setEndMonth(new Date());
      }
    }
  };
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsEndCalendarChecked(isChecked);
    dispatch(
      setFilterData({
        ...filterData,
        endAt: !isChecked ? formatDate(today) : null,
      })
    );
  };

  const handleInputChange = (value) => {
    const endDate = value ? value : null;

    dispatch(
      setFilterData({
        ...filterData,
        endAt: endDate,
      })
    );
  };

  return (
    <InputWrapper title={'إلى'} className="flex-1">
      <div className="space-y-2">
        <Popover open={endCalendarOpen} onOpenChange={handleEndCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full h-12 bg-white border border-solid border-ivory-300 justify-start text-right font-normal',
                !filterData.endAt && 'text-muted-foreground',
                isEndCalendarChecked && 'opacity-50' // Dimmed when checkbox is checked
              )}
              disabled={isEndCalendarChecked} // Disabled when checkbox is checked
            >
              <CalendarIcon className="ml-2 h-4 w-4" />
              {filterData.endAt ? (
                // When a date is selected
                formatDate(filterData.endAt)
              ) : isEndCalendarChecked ? (
                // When checkbox is checked (null value)
                <span className="text-ivory-700">الى نهاية المحفظة</span>
              ) : (
                // Fallback placeholder
                <span className="text-ivory-700">DD/MM/YYYY</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <InstallmentsCalendar
              value={filterData.endAt}
              onSelect={(date) => {
                handleInputChange(formatDate(date));
                setEndCalendarOpen(false); // Close after selection
              }}
              disabled={(date) =>
                filterData.startAt && filterData.startAt !== null
                  ? date < new Date(filterData.startAt)
                  : false
              }
              currentMonth={endMonth}
              onMonthChange={setEndMonth}
            />
          </PopoverContent>
        </Popover>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isEndCalendarChecked}
            onChange={handleCheckboxChange}
            className="rounded border-gray-300"
          />
          <span>الى نهاية المحفظة</span>
        </div>
      </div>
    </InputWrapper>
  );
};

export default EndDatePicker;

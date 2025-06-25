import { ChevronLeft, ChevronRight, CalendarIcon } from 'lucide-react';
import { format, addMonths, subMonths, setMonth, setYear } from 'date-fns';
import { ar } from 'date-fns/locale';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

export function DatePicker({ className, isRTL = true, label = 'إلى' }) {
  const [date, setDate] = useState(new Date('2025-04-18'));
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(date || new Date());

  // Generate years (2020-2030)
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);

  // Generate months
  const months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  const englishMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handleMonthChange = (monthIndex) => {
    setCurrentMonth(setMonth(currentMonth, Number.parseInt(monthIndex)));
  };

  const handleYearChange = (year) => {
    setCurrentMonth(setYear(currentMonth, Number.parseInt(year)));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div
      className={cn(
        'flex flex-col',
        isRTL ? 'items-end' : 'items-start',
        className
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="mb-2 text-sm font-medium">{label}</div>
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              'w-[240px] justify-between text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <span>{date ? format(date, 'yyyy-MM-dd') : 'Select date'}</span>
            <CalendarIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={isRTL ? 'end' : 'start'}>
          <div className="p-3 border-b">
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={isRTL ? nextMonth : prevMonth}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                <Select
                  value={currentMonth.getFullYear().toString()}
                  onValueChange={handleYearChange}
                >
                  <SelectTrigger className="w-[80px] h-8">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select
                  value={currentMonth.getMonth().toString()}
                  onValueChange={handleMonthChange}
                >
                  <SelectTrigger className="w-[100px] h-8">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {isRTL ? month : englishMonths[index]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={isRTL ? prevMonth : nextMonth}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              setCalendarOpen(false);
            }}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            locale={isRTL ? ar : undefined}
            className="border-none"
            showOutsideDays
            fixedWeeks
            weekStartsOn={isRTL ? 6 : 0}
            styles={{
              head_cell: {
                width: '40px',
                textAlign: 'center',
              },
              cell: {
                width: '40px',
                height: '40px',
                textAlign: 'center',
              },
              day: {
                width: '40px',
                height: '40px',
                margin: '0 auto',
              },
              day_selected: {
                backgroundColor: 'black',
                color: 'white',
                fontWeight: 'bold',
              },
              day_outside: {
                opacity: 0.5,
              },
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

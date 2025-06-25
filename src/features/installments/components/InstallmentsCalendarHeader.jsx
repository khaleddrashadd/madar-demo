import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InstallmentsCalendarHeader = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  onMonthChange,
  onYearChange,
}) => (
  <div
    className="flex items-center justify-between p-2 border-b"
    onClick={(e) => e.stopPropagation()}
  >
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation();
        onPrevMonth();
      }}
      className="h-7 w-7"
    >
      <ChevronRight className="h-4 w-4" />
    </Button>
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <div onClick={(e) => e.stopPropagation()}>
        <Select
          value={currentMonth.getMonth().toString()}
          onValueChange={onMonthChange}
        >
          <SelectTrigger
            className="h-8 w-[110px] text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent onClick={(e) => e.stopPropagation()}>
            {Array.from({ length: 12 }, (_, i) => ({
              value: i,
              label: [
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
              ][i],
            })).map((month) => (
              <SelectItem
                key={month.value}
                value={month.value.toString()}
                onClick={(e) => e.stopPropagation()}
              >
                {month.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <Select
          value={currentMonth.getFullYear().toString()}
          onValueChange={onYearChange}
        >
          <SelectTrigger
            className="h-8 w-[80px] text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent onClick={(e) => e.stopPropagation()}>
            {Array.from(
              { length: 21 },
              (_, i) => new Date().getFullYear() - 10 + i
            ).map((year) => (
              <SelectItem
                key={year}
                value={year.toString()}
                onClick={(e) => e.stopPropagation()}
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation();
        onNextMonth();
      }}
      className="h-7 w-7"
    >
      <ChevronLeft className="h-4 w-4" />
    </Button>
  </div>
);

export default InstallmentsCalendarHeader;

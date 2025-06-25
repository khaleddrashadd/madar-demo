import { Calendar } from '@/components/ui/calendar';
import InstallmentsCalendarHeader from './InstallmentsCalendarHeader';

const InstallmentsCalendar = ({
  value,
  onSelect,
  disabled,
  currentMonth,
  onMonthChange,
}) => {
  // Navigation handlers - these don't affect the Redux state
  const handlePrevMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    onMonthChange(newDate);
  };

  const handleMonthSelect = (monthValue) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(Number.parseInt(monthValue));
    onMonthChange(newDate);
  };

  const handleYearSelect = (yearValue) => {
    const newDate = new Date(currentMonth);
    newDate.setFullYear(Number.parseInt(yearValue));
    onMonthChange(newDate);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <InstallmentsCalendarHeader
        currentMonth={currentMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onMonthChange={handleMonthSelect}
        onYearChange={handleYearSelect}
      />

      <Calendar
        mode="single"
        month={currentMonth}
        onMonthChange={onMonthChange}
        selected={value ? new Date(value) : undefined}
        onSelect={onSelect}
        initialFocus
        disabled={disabled}
        showOutsideDays={true}
      />
    </div>
  );
};

export default InstallmentsCalendar;

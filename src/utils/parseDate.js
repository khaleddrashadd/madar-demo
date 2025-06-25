import dayjs from 'dayjs';

export const parseYears = (inputDate) => {
  const parsedDate = dayjs(inputDate);
  const minYear = parsedDate.year();
  const currentYear = dayjs().year();
  const maxYear = currentYear;

  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
    const yearIndex = minYear + i;
    return {
      value: yearIndex.toString(),
      label: yearIndex.toString(),
    };
  }).reverse();
  return [{ value: ' ', label: 'الكل' }, ...years];
};

export const parseMonths = (inputDate, selectedYear = ' ') => {
  if (!selectedYear.trim()) return;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const parsedDate = dayjs(inputDate);
  const minYear = parsedDate.year();

  const minMonth = parsedDate.month();
  const currentMonth = currentDate.getMonth();
  const startMonth = +selectedYear === minYear ? minMonth : 0;
  const endMonth = +selectedYear === currentYear ? currentMonth : 11;

  const months = Array.from({ length: endMonth - startMonth + 1 }, (_, i) => {
    const monthIndex = startMonth + i;
    return {
      value: (monthIndex + 1).toString(),
      label: new Intl.DateTimeFormat('ar-EG', {
        month: 'long',
      }).format(new Date(selectedYear, monthIndex)),
    };
  });
  return [{ value: ' ', label: 'الكل' }, ...months];
};

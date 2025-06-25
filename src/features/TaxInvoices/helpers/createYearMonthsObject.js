export const createYearMonthsObject = (dateString) => {
  if (!dateString) return [];

  const startDate = new Date(dateString);
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const arabicMonths = [
    { number: 1, ar: 'يناير', en: 'January' },
    { number: 2, ar: 'فبراير', en: 'February' },
    { number: 3, ar: 'مارس', en: 'March' },
    { number: 4, ar: 'أبريل', en: 'April' },
    { number: 5, ar: 'مايو', en: 'May' },
    { number: 6, ar: 'يونيو', en: 'June' },
    { number: 7, ar: 'يوليو', en: 'July' },
    { number: 8, ar: 'أغسطس', en: 'August' },
    { number: 9, ar: 'سبتمبر', en: 'September' },
    { number: 10, ar: 'أكتوبر', en: 'October' },
    { number: 11, ar: 'نوفمبر', en: 'November' },
    { number: 12, ar: 'ديسمبر', en: 'December' },
  ];

  const result = {};

  // For each year from start to current
  for (let year = startYear; year <= currentYear; year++) {
    if (year === startYear) {
      // First year: only months from start month to December
      result[year] = arabicMonths.slice(startMonth - 1);
    } else {
      // Other years: all 12 months
      result[year] = [...arabicMonths];
    }
  }

  return result;
};

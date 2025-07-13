import { create } from 'zustand';

const usePortfolioPerformanceFilterStore = create((set) => ({
  selectedYear: ' ',
  selectedMonth: ' ',
  selectYear: (year) => set({ selectedYear: year, selectedMonth: ' ' }),
  selectMonth: (month) => set({ selectedMonth: month }),
}));
export default usePortfolioPerformanceFilterStore;

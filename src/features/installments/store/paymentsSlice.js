// paymentsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const today = new Date();

const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD', 'UTC');
};

const initialState = {
  filterData: {
    nationalId: '',
    beneficiaryName: '',
    mortgageNumber: '',
    startAt: null,
    endAt: formatDate(today),
    portfolioNumber: '',
  },
  pagination: { pageNumber: 1, pageSize: 10 },
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.filterData = action.payload;
      state.pagination = { pageNumber: 1, pageSize: 10 };
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },

    clearFilters: (state) => {
      state.filterData = initialState.filterData;
      state.pagination = initialState.pagination;
    },
  },
});

export default paymentsSlice.reducer;

export const { setFilterData, setPagination, clearFilters } =
  paymentsSlice.actions;
export const getFilterData = (state) => state.paymentState.filterData;
export const getPagination = (state) => state.paymentState.pagination;

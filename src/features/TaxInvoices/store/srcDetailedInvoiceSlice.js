import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  pagination: { pageNumber: 1, pageSize: 10 },
  filterData: {
    NID: null,
    AccountNumber: null,
  },
};

const srcDetailedInvoice = createSlice({
  name: 'detailed-invoices-src',
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
      state.pagination = { pageNumber: 1, pageSize: 10 };
    },
    clearFilters: (state) => {
      state.filterData.NID = null;
      state.filterData.AccountNumber = null;
      state.pagination.pageNumber = 1;
      state.pagination.pageSize = 10;
    },
  },
});

export default srcDetailedInvoice.reducer;

export const { setPagination, setFilterData } = srcDetailedInvoice.actions;
export const getPagination = (state) => state.srcDetailedInvoice.pagination;
export const getFilterData = (state) => state.srcDetailedInvoice.filterData;

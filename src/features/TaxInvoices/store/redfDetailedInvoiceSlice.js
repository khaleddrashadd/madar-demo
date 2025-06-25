import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filterData: {
    NID: null,
    AccountNumber: null,
  },
  pagination: { pageNumber: 1, pageSize: 10 },
  tab: 'Installment',
};

const redfDetailedInvoice = createSlice({
  name: 'detailed-invoices-redf',
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      state.filterData = action.payload;
      state.pagination = { pageNumber: 1, pageSize: 10 };
    },
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },

    setTabStatus: (state, action) => {
      state.tab = action.payload;
    },

    clearFilters: (state) => {
      state.filterData.NID = null;
      state.filterData.AccountNumber = null;
      state.pagination.pageNumber = 1;
      state.pagination.pageSize = 10;
    },
  },
});

export default redfDetailedInvoice.reducer;

export const { setFilterData, setPagination, setTabStatus, clearFilters } =
  redfDetailedInvoice.actions;
export const getFilterData = (state) => state.redfDetailedInvoice.filterData;
export const getPagination = (state) => state.redfDetailedInvoice.pagination;
export const getCurrentTab = (state) => state.redfDetailedInvoice.tab;

// paymentsSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filterData: {
    collectionYear: null,
    collectionMonth: null,
    portfolioId: null,
    filterStatus: '',
  },
  pagination: { pageNumber: 1, pageSize: 10 },
  tab: { pending: true, hasPending: false },
};

const invoicesApprovalSlice = createSlice({
  name: 'invoices-approval',
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
      state.tab.pending = action.payload;
      state.pagination = { pageNumber: 1, pageSize: 10 };
    },

    resetTabStatus: (state) => {
      state.tab.pending = true;
    },

    setHasPending: (state, action) => {
      state.tab.hasPending = action.payload;
    },

    clearFilters: (state) => {
      state.filterData.collectionYear = null;
      state.filterData.collectionMonth = null;
      state.filterData.portfolioId = null;
      state.pagination.pageNumber = 1;
      state.pagination.pageSize = 10;
    },
  },
});

export default invoicesApprovalSlice.reducer;

export const {
  setFilterData,
  clearFilters,
  setPagination,
  setTabStatus,
  resetTabStatus,
  setHasPending,

  setRequestApprovalId,
} = invoicesApprovalSlice.actions;
export const getFilterData = (state) => state.invoiceApproval.filterData;
export const getPagination = (state) => state.invoiceApproval.pagination;
export const getTabStatus = (state) => state.invoiceApproval.tab;

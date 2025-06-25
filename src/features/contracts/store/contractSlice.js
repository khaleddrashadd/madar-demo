import { BUCKETS } from '@/constants/contracts';
import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBuckets: BUCKETS,
  selectedPortfolio: ' ',
  selectedYear: ' ',
  selectedMonth: ' ',
  contractReportTableFilter: {
    nid: '',
    name: '',
    contractId: '',
  },
};

export const buckerFilterSlice = createSlice({
  name: 'bucketFilter',
  initialState,
  reducers: {
    selectBuckets: (state, action) => {
      state.selectedBuckets = action.payload;
    },
    selectYear: (state, action) => {
      state.selectedYear = action.payload;
      state.selectedMonth = initialState.selectedMonth;
    },
    selectMonth: (state, action) => {
      state.selectedMonth = action.payload;
    },
    selectPortfolio: (state, action) => {
      state.selectedPortfolio = action.payload;
    },
    selectContractReportFilter: (state, action) => {
      state.contractReportTableFilter = action.payload;
    },
    resetContractReportFilter: (state) => {
      state.contractReportTableFilter = initialState.contractReportTableFilter;
    },
    resetSelectedBuckets: (state) => {
      state.selectedBuckets = initialState.selectedBuckets;
    },
  },
});

// Action creators are generated for each case reducer function
const bucketFilterReducer = buckerFilterSlice.reducer;
export default bucketFilterReducer;
export const {
  selectBuckets,
  selectMonth,
  selectYear,
  selectPortfolio,
  selectContractReportFilter,
  resetContractReportFilter,
  resetSelectedBuckets,
} = buckerFilterSlice.actions;
export const getSelectedBuckets = (state) => state.bucketFilter.selectedBuckets;
export const getSelectedBucketsName = createSelector(
  [getSelectedBuckets],
  (selectedBuckets) => selectedBuckets.map((bucket) => bucket.name)
);
export const getSelectedYear = (state) => state.bucketFilter.selectedYear;
export const getSelectedMonth = (state) => state.bucketFilter.selectedMonth;
export const getSelectedPortfolio = (state) =>
  state.bucketFilter.selectedPortfolio;

export const getSelectedContractReportFilter = (state) =>
  state.bucketFilter.contractReportTableFilter;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  superAdminContext: '',
};

export const prevailageSlice = createSlice({
  name: 'prevailage',
  initialState,
  reducers: {
    changeSuperAdminContext: (state, action) => {
      state.superAdminContext = action.payload;
    },
    clearSuperAdminContext: (state) => {
      state.superAdminContext = initialState.superAdminContext;
    },
  },
});

// Action creators are generated for each case reducer function
const prevailageReducer = prevailageSlice.reducer;
export default prevailageReducer;
export const { changeSuperAdminContext, clearSuperAdminContext } =
  prevailageSlice.actions;

export const getAdminLegalOwner = (state) => state.prevailage.superAdminContext;

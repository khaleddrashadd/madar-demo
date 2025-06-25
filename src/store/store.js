import bucketFilterReducer from '@/features/contracts/store/contractSlice';
import loginReducer from '@/features/login/store/loginSlice';
import filterReducer from '@/features/portfolioPerformance/store/filterSlice';
import paymentReducer from '@/features/installments/store/paymentsSlice';
import invoicesApprovalReducer from '@/features/InvoicesApproval/store/invoicesApprovalSlice';
import redfDetailedInvoiceReducer from '@/features/InvoicesApproval/store/redfDetailedInvoiceSlice';
import srcDetailedInvoiceReducer from '@/features/InvoicesApproval/store/srcDetailedInvoiceSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import prevailageReducer from '@/layouts/store/prevailageSlice';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducersToPersist = ['prevailage'];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: reducersToPersist,
};

const rootReducer = combineReducers({
  filter: filterReducer,
  bucketFilter: bucketFilterReducer,
  loginState: loginReducer,
  paymentState: paymentReducer,
  invoiceApproval: invoicesApprovalReducer,
  redfDetailedInvoice: redfDetailedInvoiceReducer,
  srcDetailedInvoice: srcDetailedInvoiceReducer,
  prevailage: prevailageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //DONT DELETE
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

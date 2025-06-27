import loginReducer from '@/features/login/store/loginSlice';
import filterReducer from '@/features/portfolioPerformance/store/filterSlice';

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

  loginState: loginReducer,

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

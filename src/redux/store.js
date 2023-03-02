import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './authReducer';
import { cartSlice } from './cartReducer';

const authPersistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(
  authPersistConfig,
  cartSlice.reducer
);

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: {
    cart: persistedCartReducer,
    auth: authSlice.reducer,
  },
});
export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from '../redux/slice'; 
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filterSlice';


const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: persistedReducer,
  filter: filterReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
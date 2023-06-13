import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer); // Add the `persistConfig` object as the first argument

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };

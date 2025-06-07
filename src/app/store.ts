import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import { authAPI } from '../services/auth';

import {
  persistReducer,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

// Persist config for user slice only
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'], // persist only user
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  [authAPI.reducerPath]: authAPI.reducer,
});
// Apply persist to root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist,
      immutableCheck: false
    }).concat(authAPI.middleware)
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

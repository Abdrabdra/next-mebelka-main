//library
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

//reducer
import authReducer from "./reducers/auth/auth.slice";
import basketSlice from "./reducers/basket/basket.slice";
import filterReducer from "./reducers/filter/filter.slice";

//rtk
import announcementApi from "./rtk-api/announcement-rtk/announcementApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "stepper"],
};

const AuthPersistConfig = {
  key: "auth",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(AuthPersistConfig, authReducer),
  filter: filterReducer,
  basket: basketSlice,

  [announcementApi.reducerPath]: announcementApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(announcementApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

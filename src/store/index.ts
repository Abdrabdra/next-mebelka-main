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
import productFilterReducer from "./reducers/filter/productFilter/productFilter.slice";

//rtk
import announcementApi from "./rtk-api/announcement-rtk/announcementApi";
import applicationApi from "./rtk-api/application-rtk/applicationApi";
import orderApi from "./rtk-api/order-rtk/orderApi";

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
  productFilter: productFilterReducer,
  basket: basketSlice,

  [announcementApi.reducerPath]: announcementApi.reducer,
  [applicationApi.reducerPath]: applicationApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
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
    }).concat(
      announcementApi.middleware,
      applicationApi.middleware,
      orderApi.middleware
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

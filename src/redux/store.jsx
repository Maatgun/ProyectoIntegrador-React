import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carritoReducer from "./carrito/cartSlice"
import userReducer from "./user/userSlice"

import ordersReducer from "./order/ordersSlice"

const reducers = combineReducers({
  cart: carritoReducer,
  user: userReducer,
  orders: ordersReducer

});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
});

export const persistor = persistStore(store);
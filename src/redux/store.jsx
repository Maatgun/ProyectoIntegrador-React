import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carritoReducer from "./carrito/carritoSlide"

const reducers = combineReducers({
    carrito: carritoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carrito"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
});

export const persistor = persistStore(store);
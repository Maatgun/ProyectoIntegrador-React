import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import carritoReducer from "./carrito/carritoSlice"
import userReducer from "./user/userSlice";

const reducers = combineReducers({
    carrito: carritoReducer,
    user: userReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carrito", "user"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
})
});

export const persistor = persistStore(store);
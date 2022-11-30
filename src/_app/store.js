import {combineReducers} from "redux";
import userReducer from '../_features/userSlice';
import postReducer from '../_features/postSlice';
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const reducers=combineReducers({
    user: userReducer,
    post: postReducer,
});

const persistConfig={
    key: "root",
    storage,
    whitelist: [userReducer],  //userReducer 저장
};

const persistedReducer=persistReducer(persistConfig, reducers);

export const store=configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

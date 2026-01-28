import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../util/cartSlice";

const appStore = configureStore({
       reducer: {
            cart : cartReducer,
       },
});

export default appStore;
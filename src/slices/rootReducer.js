import { combineReducers } from "redux";
import { menuReducer } from "./menu";
import { themeReducer } from "./themeSlice";

export const rootReducer=combineReducers({
    menu:menuReducer,
    theme:themeReducer
})
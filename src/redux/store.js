/*---------------import cnfStore/toDoReducer---------------- */
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./todoReducer";


/*Using createSlice >>==========>*/

export const store = configureStore({
    todo: toDoReducer,
});
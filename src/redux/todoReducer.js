/*---------------import createSlice from reduxToolkit---------------- */
import { createSlice } from "@reduxjs/toolkit";



/*Using createSlice >>==========>*/

initialState = {
    toDos: ["hahaha"]
};

const toDoReducer = createSlice({
    name: "add-remove",
    initialState,
    reducers:{
        add: ((state,action) => state.toDos = [...state.toDos,action.payload]);
    }
});

export default toDoReducer.reducer;
export const {add} = toDoReducer.actions;
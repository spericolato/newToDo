import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myTodos: []
};

const addToDoReducer = createSlice({
    name:"addToDos",
    initialState,
    reducers:{
        addToDo: (state,action)=>{state.myTodos = [...state.myTodos,action.payload]},
        removeToDos: (state,action)=>{state.myTodos = action.payload}
    }
});

export default addToDoReducer.reducer;
export  const {addToDo,removeToDos} = addToDoReducer.actions;
import { configureStore } from '@reduxjs/toolkit';
import addToDoReducer from './reducers';

export const store = configureStore({
    reducer:{
        addToDoToList: addToDoReducer
    }
});
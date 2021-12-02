import { configureStore } from '@reduxjs/toolkit'
import task from './TaskReducer'
export const store = configureStore({
  reducer: {
    task,
  },
})

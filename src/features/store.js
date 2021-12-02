import { configureStore } from '@reduxjs/toolkit'
import task from './task'
import taskpinned from './taskPinned'
export const store = configureStore({
  reducer: {
    task,
    taskpinned,
  },
})

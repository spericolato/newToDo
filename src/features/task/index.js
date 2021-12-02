import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 0,
    title: '',
    descreption: '',
    done: '',
  },
]

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = TaskSlice.actions

export default TaskSlice.reducer

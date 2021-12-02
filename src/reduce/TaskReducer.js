import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 0,
    title: '',
    descreption: '',
    done: '',
    date: new Date(),
  },
]

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = TodoSlice.actions

export default TodoSlice.reducer

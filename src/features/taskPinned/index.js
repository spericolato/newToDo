import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      id: 0,
      title: 'call doctor for tests',
      descreption: 'hello this is test for descriiption task pinned',
      done: false,
      date: new Date().toString(),
    },
    {
      id: 1,
      title: 'Beatrice `s bday',
      descreption: 'hello this is test for descriiption task pinned',
      done: false,
      date: new Date().toString(),
    },
  ],
}

export const TaskpinnedSlice = createSlice({
  name: 'Taskpinned',
  initialState,
  reducers: {
    addTaskPinned: (state, action) => {
      state.value = [action.payload, ...state.value]
      console.log(state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTaskPinned } = TaskpinnedSlice.actions

export default TaskpinnedSlice.reducer

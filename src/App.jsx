import React from 'react'
import AddTodoToList from './components/AddTodoToList'
import TodoList from './components/TodosItemsList';
import { Provider } from 'react-redux';
import {store} from './redux/store'

const App = () => {
  return(
    <Provider store={store}>
      <AddTodoToList/>
      <TodoList/>
    </Provider>
  )
}

export default App;

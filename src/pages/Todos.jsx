/*import React/useRef/useDispatch/setSelector */

import React,{ useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';


const Todos = () => {
  const newToDo = useRef('');

  return(
    <div>
    <input type="text" />
    <button>Add</button>
  </div>
  )
}

export default Todos
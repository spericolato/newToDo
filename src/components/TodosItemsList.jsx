import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {removeToDos} from '../redux/reducers';

const TodoList = ()=>{
    const stateSelector = useSelector(state => state.addToDoToList.myTodos);
    const dispatch = useDispatch();

    const removeMyToDo = (idToRemove)=>{
        const filtred = stateSelector.filter(y => y.id !== idToRemove)
        dispatch(removeToDos(filtred))
        console.log(stateSelector)
    }
    return(
        <ul>
            {stateSelector.map(x=><li key={x.id}>{x.todo}<button onClick={()=>{removeMyToDo(x.id)}}>Cliclk</button></li>)}
        </ul>
    )
}

export default TodoList;
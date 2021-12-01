import React,{useRef} from "react";
import { useDispatch } from 'react-redux';
import { addToDo } from "../redux/reducers";

const AddTodoToList = ()=>{
    const myToDoVal = useRef("");
    const dispatch = useDispatch();

    const addMyToDos = ()=>{
        dispatch(addToDo({id:Math.random(),todo:myToDoVal.current.value}))
    }

    return(
        <div>
            <input ref={myToDoVal} type="text" />
            <button onClick={addMyToDos}>Add</button>
        </div>
    )
}

export default AddTodoToList;
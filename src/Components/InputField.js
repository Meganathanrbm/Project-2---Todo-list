import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setTasks, setTasksID } from '../redux/Action';


function InputField(props) {

    const [inputValue, setInputValue] = useState(" ");

    // const{tasks,tasksID} = useSelector(state=>state.tasksReducer);
    // const dispatch = useDispatch();


  return (
    <div className='form'>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button
        disabled={inputValue==" "}
        style={(inputValue!=" ")?{backgroundColor:'black'}:{backgroundColor:'#696969'}}
        onClick={()=>{
         
          props.addvalue(inputValue)
          setInputValue(" ");
          // dispatch(setTasksID(tasks.length + 1));

          // try{
          //   var Task={
          //     task:inputValue,
          //     taskID:tasksID,
          //   }
          //   let newTasks=[...tasks,Task];
          //   window.localStorage.setItem('Tasks',JSON.stringify(newTasks)).then(()=>{
          //     dispatch(setTasks(newTasks));
          //   })
          //   .catch((err)=>console.log(err))
          // }
          // catch(err){
          //     console.log(err);
          // }
        }}>
            <span>add</span>
        </button>
    </div>
  )
}

export default InputField;
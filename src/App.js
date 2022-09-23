import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import InputField from './Components/InputField';
import ListItem from './Components/ListItem';
// import { setTasks, setTasksID } from './redux/Action';
// import { Store } from './redux/Store';


function App() {
  const [listValue, setListValue] = useState([]);

  // const {tasks } = useSelector(state=>state.tasksReducer)
  // const dispatch= useDispatch();

const addvalue=(item)=>{
  setListValue([...listValue,item])
};

const delItem=(id)=>{
  setTimeout(() => {
    setListValue((prev)=>{
      return prev.filter((item,index)=>{
        return index!==id;
      })
    });
  },500);
}


  return (
    <div className='app'>
      <div className='container'>
        <div className='heading'>
          <h1>to-do list</h1>
        </div>
        <InputField addvalue={addvalue}/>
        <div className='list-count' style={((listValue.length)===0)?{display:'none'}:{display:'flex'}}>
         <em> {listValue.length}</em>
        </div>
        <div className='list'>
          <ul>
            {
              listValue.map((item,index)=>(
                <ListItem 
                value={item} 
                index={index}
                listValue={listValue}
                delItem={delItem} key={index}/>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
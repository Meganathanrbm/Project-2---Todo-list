import React, { useEffect, useState } from 'react';

function ListItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [check, setCheck] = useState("check")

  const checked=(e)=>{   
    props.delItem(props.index)
    setCheck("checked")
    setIsChecked(true)
  };


  useEffect(() => {
      setIsChecked(false)
      setCheck("check")
  }, [props.listValue])
  
  return (
    <div  className={`listItem ${check}`}>
      <div className='chbx' >
         <input type='checkbox' checked={isChecked} onClick={checked} value={`checkbox-${props.index}`}  name='checkbox'/>
      </div> 
        <li>{props.value}</li>
    </div>
  )
}

export default ListItem;
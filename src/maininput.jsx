
import styless from './button.module.css'
import { useState } from 'react';
import styles from './date.module.css'
import style from './input.module.css'

function  Input({onNewItem}){ 

  let  [newToDo,  setNewToDo ] = useState();
  let  [newDTE, setNewDte ] = useState();
  

  const handleNameChange = (event) => { 
    setNewToDo(event.target.value);  
  };

  const handleDateChange = (event) => {
     setNewDte(event.target.value);   
  };

  const handleAddButtonClicked = () => {
    onNewItem(newToDo , newDTE); 
    setNewToDo("");
    setNewDte("");
   };

  return (
   <div className="container text-center">
   <div className="row">
   
    <div className="col-5">
    <input type="text" 
    className={style.user} 
    placeholder='ENTER TODO' 
    value={newToDo}
    onChange = {handleNameChange}
    />
    </div>

    <div className="col-5">
    <input type="date"
    className = {styles.date}
    value={newDTE}
    onChange = {handleDateChange}
    />
    </div>

     <div className="col-2">
     <button type="button" 
     className={`${styless.btn} btn btn-success`}
     onClick = {handleAddButtonClicked}  
     >
       ADD
     </button>
    </div>
  </div>
 </div>
  )
}

export default Input; 
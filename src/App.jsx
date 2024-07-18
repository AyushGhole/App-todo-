import styles from './App.module.css'
import Input from './maininput'
import { useState } from 'react'
import TodoList from './todoList.jsx'
import WelcomeMsgg from './Welcome.jsx'
import AppName from './Appname.jsx'

function App() {

let [onhandleChange, setOnhandleChange ] = useState([]);

const newItems = (itemName, itemDueDate) =>{ 
  console.log(`New Items : ${itemName} , New date : ${itemDueDate}`) 
  const newData =[ 
    ...onhandleChange,
    {  
      name : itemName,  
      date: itemDueDate,
    },
  ]; 
  setOnhandleChange(newData);
  }

  const handleDeleteItem = (onhandleChangeName) => {
   const newData = onhandleChange.filter((item) => item.name !== onhandleChangeName);
   setOnhandleChange(newData);
  };

   return<>
  <div className={styles.container}>
  <AppName />
  <Input onNewItem = {newItems}/>
  {onhandleChange.length === 0 && <WelcomeMsgg></WelcomeMsgg>}
  <TodoList 
  todoItems ={onhandleChange} 
  onDeleteClick = {handleDeleteItem}
  />
  </div>
  </> 
}

export default App

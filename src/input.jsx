import styles from './input.module.css'
import { useState } from 'react';

function Int({onNewItem}){ 

const [newToDo,  setNewToDo ] = useState();

const onhandleChange = (event) => { 
  console.log(event.target.value);
  setNewToDo(event.target.value);  
    return newToDo;
} 

  return<>
  <input type="text" 
  className={styles.user} 
  placeholder='ENTER TODO' 
  onChange = {onhandleChange}
  />
  </>
}
export default Int;
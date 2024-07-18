import styles from './date.module.css'
import { useState } from 'react';

function Dtn({onNewItem}){

 const [newDTE, setNewDte ] = useState();

const onhandleChange = (event) => {
   console.log(event.target.value);
   setNewDte(event.target.value);   
}


  return<>
 <input type="date"
  className = {styles.date}
  onChange = {onhandleChange}
  />
  </> 
} 

export default Dtn;
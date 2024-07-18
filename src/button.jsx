
import styles from './button.module.css'
import List from './list';

function btn({newBtn1}){  

  return <>
   
    <button type="button" 
    className={`${styles.btn} btn btn-success`}
    onClick = {newBtn1}  
    >
      ADD
      </button>
     
    </>
}
export default btn;
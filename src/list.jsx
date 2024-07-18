
import styles from './list.module.css'
import style1 from '../Bn.module.css'

const List = ({todoName, todoDate, onDeleteClick}) => { 
  
  return<>
  <ul className="list-group">
  <li key={todoName} className = {`${styles.lit} list-group-item`} >
   {todoName}  -  {todoDate}
  <button type="button" 
  className={`${style1.but} btn btn-danger`}
  onClick={() => onDeleteClick(todoName) }
  >
  Delete
  </button>
  </li>   
  </ul>
  
  </>
}

export default List;
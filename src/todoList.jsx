import List  from "./list"; 

const todoList = ({todoItems, onDeleteClick}) => {
    return<> 
    
    <div className="container">
     {todoItems.map((items) => (
     <List 
     todoName = {items.name}
     todoDate={items.date} 
     key={items}
     onDeleteClick={onDeleteClick}
      />
    ))}
    </div>
    
    </>
}
export default todoList;
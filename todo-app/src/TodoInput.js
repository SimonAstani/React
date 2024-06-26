const TodoInput = ({todo,setTodo, addTodo}) => {
    return(
        <div  className= "input-wrapper">
        <input 
          type="text" 
          name = "todo"
          placeholder ="Create a new todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          />
        <button className = "add-button" onClick={addTodo}>ADD</button>

      </div>
    )

}

export default TodoInput;
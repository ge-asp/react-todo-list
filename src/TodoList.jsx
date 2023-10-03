import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
    const [desc, setDesc] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        const { name, value } = event.target;
        setDesc(prevState => ({...prevState, [name]: value}));
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, desc]);
        setDesc({description: '', date: ''}); // Resetting the form fields test
    }

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        setTodos(updatedTodos);


    }
        
    return (
        <>
            <label htmlFor="description">Description:</label>
            <input 
                type="text" 
                name="description" 
                onChange={inputChanged} 
                value={desc.description} />
            
            
            <label htmlFor="date">Date:</label>
            <input 
                type="date" 
                name="date" 
                onChange={inputChanged} 
                value={desc.date} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </>

    )
}

export default TodoList;

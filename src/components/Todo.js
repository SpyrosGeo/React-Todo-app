import React, { useState } from 'react'
import "./styles/Todo.css"

export default function Todo({ todo, removeTodo, id,updateTodo,completed,toggleTodo }) {
    const [editing, setEditing] = useState(false)
    const [task,setTask] = useState(todo)
    let result;

    const handleRemove = () => {
        removeTodo(id)
    }
    const handleUpdate =(e)=>{
        e.preventDefault();
        updateTodo(id,task)
        setEditing(!editing)
    }
    const handleChange = (e) => {
        setTask(e.target.value)
    }
  const handleToggle =(e)=>{
    toggleTodo(id)
  }
    if (editing) {
        result =(
            <div className="todo">
                <form className="todo-edit-form" onSubmit={handleUpdate} >
                <input type="text" value={task} name="task" onChange={handleChange}/>
                <button>Save</button>
                </form>
            </div>
        )
        
     }else{
         result = (
            <div className="todo">
                <li className={completed?"todo-task completed":"todo-task"}
                    onClick={handleToggle}>{todo}</li>
                    <div className="todo-buttons">
                     <button onClick={() => setEditing(true)}><i className="fas fa-edit"></i></button>
                     <button onClick={handleRemove}><i className="fas fa-trash"></i></button>

                    </div>
            </div>
         )
     }
    return result
        
}

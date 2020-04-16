import React, { useState } from 'react'

export default function Todo({ todo, removeTodo, id,updateTodo }) {
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
    if (editing) {
        result =(
            <div>
                <form onSubmit={handleUpdate} >
                <input type="text" value={task} name="task" onChange={handleChange}/>
                <button>Save</button>
                </form>
            </div>
        )
        
     }else{
         result = (
            <div>
                <button onClick={() => setEditing(true)}>Edit</button>
                <button onClick={handleRemove}>X</button>
                <li>{todo}</li>
            </div>
         )
     }
    return result
        
}

import React from 'react'

export default function Todo({task,removeTodo,id}) {
    const handleRemove=()=>{
        removeTodo(id)
    }
    return (
        <div>
            <button>Edit</button>
            <button onClick={handleRemove}>X</button>
            <li>{task}</li>
        </div>
    )
}

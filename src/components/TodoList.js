import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    
    const create = (newTodo) => {
        setTodos([...todos, newTodo])
    }
    
    const remove = (id)=>{
        let remTodos=todos.filter(t => t.id !== id)
        setTodos(remTodos)
    }
    
    
    
    const allTodos = todos.map(todo => {
        return <Todo id={todo.id} key={todo.id} task={todo.task} removeTodo={remove}/>
    })
    return (
        <div>
            <h1>TodoList</h1>
            <NewTodoForm createTodo={create} />
            <ul>
                {allTodos}
            </ul>
        </div>
    )
}

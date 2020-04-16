import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import './styles/TodoList.css'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    
    const create = (newTodo) => {
        setTodos([...todos, newTodo])
    }
    
    const remove = (id)=>{
        let remTodos=todos.filter(t => t.id !== id)
        setTodos(remTodos)
    }
    const update =(id,updatedTask)=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                return {...todo,task:updatedTask}
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    const toggleCompletion =(id)=>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo,completed:!todo.completed }
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
    

    const allTodos = todos.map(todo => {
        return <Todo 
            id={todo.id} 
            key={todo.id} 
            todo={todo.task} 
            removeTodo={remove}
            updateTodo={update}
            completed={todo.completed}
            toggleTodo={toggleCompletion}
            />
    })
    return (
        <div className="todolist">
            <h1>Todo List<span>A simple React app.</span></h1>
            <NewTodoForm createTodo={create} />
            <ul>{allTodos}</ul>
        </div>
    )
}

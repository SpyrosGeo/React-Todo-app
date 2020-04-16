import React,{useState} from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

export default function TodoList() {
    const [todos,setTodos] =useState([{task:"Walk the dog"},{task:"feed the dog"}])
    const allTodos = todos.map(todo =>{
        return <Todo task={todo.task} />
    })

    const create =(newTodo)=>{
        setTodos([...todos,newTodo])
    }
    return (
        <div>
            <h1>TodoList</h1>
            <NewTodoForm createTodo={create}/>
            <ul>
                {allTodos}
            </ul>
        </div>
    )
}

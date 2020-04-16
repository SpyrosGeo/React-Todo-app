import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './styles/NewTodoForm.css'

export default function NewTodoForm({createTodo}) {
    const [task,setTask] = useState({task:""})
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTodo({...task,id:uuidv4(),completed:false});
        setTask({task:""})
    }
    const handleChange =(e)=>{
        setTask({
            task:e.target.value
        })
    }
    return (
        <div className="new-todo-form" >
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="New Todo " 
                    id="task" 
                    value={task.task} 
                    onChange={handleChange}
                    />
                    <button>Add Todo</button>
            </form>
        </div>
    )
}

import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function NewTodoForm({createTodo}) {
    const [task,setTask] = useState({task:""})
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTodo({...task,id:uuidv4()});
        setTask({task:""})
    }
    const handleChange =(e)=>{
        setTask({
            task:e.target.value
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task" >New Task</label>
                <input 
                    type="text" 
                    placeholder="New Task" 
                    id="task" 
                    value={task.task} 
                    onChange={handleChange}
                    />
                    <button>Add Todo</button>
            </form>
        </div>
    )
}

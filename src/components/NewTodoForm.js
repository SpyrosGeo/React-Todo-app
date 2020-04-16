import React,{useState} from 'react'

export default function NewTodoForm({createTodo}) {
    const [task,setTask] = useState({task:""})
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTodo(task);
        setTask({task:""})
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
                    onChange={e =>{setTask({task:e.target.value})}}
                    />
                    <button>Add Todo</button>
            </form>
        </div>
    )
}

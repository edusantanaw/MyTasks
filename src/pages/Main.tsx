import { Container } from "./styles";
import { useEffect, useState } from "react";
import {CreateTask} from "../Components/createTasks/CreateTask";

interface Task {
    title: string,
    description: string,
    totalSubtasks: number,
    subtasks: any,
    status: 'todo'| 'doing' | 'done'
}

export default function Main(){

    const [tasks, setTask] = useState<object[]>([{
        title: "",
        description: "",
        totalSubtasks: 0,
        subtasks: "",
        status: 'todo'
    }])
    const [show, setShow] = useState<Boolean>(false)
    const [todo,setTodo] = useState<Task[]>([])
    const [doing,setDoing] = useState<Task[]>([])
    const [done, setDone] = useState<Task[]>([])
    
    useEffect(()=>{
        
        const task = localStorage.getItem('@App:tasks')
        if(task){ 
            const taskParse = JSON.parse(task)
            const Todo = taskParse.filter((task: Task)=> task.status === 'todo')
            const Doing = taskParse.filter((task: Task)=> task.status === 'doing')
            const Done = taskParse.filter((task: Task) => task.status === 'done') 

            setTodo(Todo)
            setDoing(Doing)
            setDone(Done)
            setTask(taskParse)
        }

    }, [])


    const addNewTask  = (title: string, description: string, substasks: string[], status:string,  totalSubtasks: number )   =>{
        const newTask = {
            title: title,
            description: description,
            substasks: substasks,
            totalSubtasks:  substasks.length,
            status: 'todo'
        }
        
        setTask(  [...tasks, newTask] )
        const allTasks = JSON.stringify(tasks)
        localStorage.setItem('@App:tasks', allTasks)
        setShow(false)
    }
    return(
       <>
        <Container>
       {show && <CreateTask handleCreate = {addNewTask} />}
            <div className="header">
               <h1>Plataform lauch</h1>    
               <button onClick={()=> show ? setShow(false) : setShow(true)}>+ Add New Task</button>         
            </div>
            <div className="tasks">
                <div className="todo">
                    <div className="top">
                        <div />
                        <h2>Todo ({todo.length})</h2>
                    </div>
                    {todo.length > 0 ? todo.map((task: Task, i: number)=>(
                        <div key={i}  className = "task">
                            <h3>{task.title}</h3>
                            <span>{task.subtasks?.finished} of {task.totalSubtasks} subtasks</span>
                        </div>
                    )): <span>You don't have any task to do</span>}
                </div>
                <div className="doing">
                <div className="top">
                        <div />
                        <h2>Doing ({doing.length})</h2>
                    </div>
                {doing.length > 0 ? doing.map((task: Task, i: number)=>(
                        <div key={i} className = "task">
                            <h3>{task.title}</h3>
                        </div>
                    )): <span>You didn't have start any tasks </span>  }
                </div>
                <div className="done">
                <div className="top">
                        <div />
                        <h2>Done ({done.length})</h2>
                    </div>
                {done.length > 0 ? done.map((task: Task, i: number)=>(
                        <div key={i}  className = "task">
                            <h3>{task.title}</h3>
                        </div>
                    )): <span>You don't have complete tasks </span>}
                </div>
            </div>
        </Container>
       </>
    )
}
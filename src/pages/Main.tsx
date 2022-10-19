import { Container } from "./styles";
import { useEffect, useState } from "react";
import {CreateTask} from "../Components/createTasks/CreateTask";

export default function Main(){

    const [tasks, setTask] = useState<Object[]>([])
    const [show, setShow] = useState<Boolean>(false)

    useEffect(()=>{
        
        const task = localStorage.getItem('@App:tasks')
        if(task){ 
            const taskParse = JSON.parse(task)
            setTask(taskParse)
        }

    }, [])
    
    const addNewTask  = (title: string, description: string, substasks: string[], status:string )   =>{

        const newTask = {
            title: title,
            description: description,
            substasks: substasks,
            status: status
        }

        setTask([...tasks, newTask] )
        const allTasks = JSON.stringify(tasks)
        localStorage.setItem('@App:tasks', allTasks)
    }
    return(
       <>
        <Container>
       {show && <CreateTask handleCreate = {addNewTask} />}
            <div className="header">
               <h1>Plataform lauch</h1>    
               <button onClick={()=> show ? setShow(false) : setShow(true)}>+ Add New Task</button>         
            </div>
        </Container>
       </>
    )
}
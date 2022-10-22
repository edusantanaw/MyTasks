import { Container } from "./styles";
import { useEffect, useState } from "react";
import { CreateTask } from "../Components/createTasks/CreateTask";
import { generate } from "shortid";
import {Edit} from '../Components/editTask/Edit';
import List from '../Components/listTasks/List'

interface Task {
  id: string;
  title: string;
  description: string;
  totalSubtasks: number;
  subtasks: subtask[];
  completedTasks: number;
  status: string;
}

interface subtask {
  id: string;
  content: string;
  finished: number;
  status: "todo" | "done";
}

export default function Main() {
  const [tasks, setTask] = useState<Array<Task>>([]);
  const [show, setShow] = useState<Boolean>(false);
  const [edit, setEdit] = useState<Boolean>(false)
  const [todo, setTodo] = useState<Task[]>([]);
  const [doing, setDoing] = useState<Task[]>([]);
  const [done, setDone] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState<Task[]>([])

  const task = localStorage.getItem("@App:tasks");
  useEffect(() => {
    if (task) {
      const taskParse = JSON.parse(task);
      const Todo = taskParse.filter((task: Task) => task.status === "todo");
      const Doing = taskParse.filter((task: Task) => task.status === "doing");
      const Done = taskParse.filter((task: Task) => task.status === "done");

      setTodo(Todo);
      setDoing(Doing);
      setDone(Done);
      setTask(taskParse);
    }
  }, [task]);

  const addNewTask = (
    title: string,
    description: string,
    subtasks: subtask[],
    totalSubtasks: number
  ) => {
    const newTask = {
      id: generate(),
      title: title,
      description: description,
      totalSubtasks: totalSubtasks,
      subtasks: subtasks,
      completedTasks: 0,
      status: "todo",
    };

    const teste = [...tasks, newTask];
    setShow(false);
    const allTasks = JSON.stringify(teste);
    localStorage.setItem("@App:tasks", allTasks);
  };

  const showTaskDetails = (id: string) => {
    const task = tasks.filter((task: Task) => task.id === id);
    setTaskId(task)
    setEdit(true)
  };

  const handleEdit = (task: Task) =>{
    console.log(task)
    const updated = tasks.map((t)=> {
      if(t.id === task.id) {
        t= task
      }
      return t
    })
    setTask(updated)
    const allTasks = JSON.stringify(updated)
    localStorage.setItem("@App:tasks", allTasks)
    setEdit(false)
  }

  return (
    <>
      <Container>
        {edit && <Edit task = {taskId} handleEdit = {handleEdit}/>}
        {show && <CreateTask handleCreate={addNewTask} />}
        <div className="header">
          <h1>My Tasks</h1>
          <button onClick={() => (show ? setShow(false) : setShow(true))}>
            + Add New Task
          </button>
        </div>
        <div className="tasks">
          <List list = {todo} showTaskDetails= {showTaskDetails} name="Todo" color = 'red' />
          <List list = {doing} showTaskDetails= {showTaskDetails} name="Doing"  color = 'blue'  />
          <List list = {done} showTaskDetails= {showTaskDetails} name="Done"   color= 'green' />
        </div>
      </Container>
    </>
  );
}

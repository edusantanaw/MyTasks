import { Container } from "./styles";
import { useEffect, useState } from "react";

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

export function Edit({ task, handleEdit }: any) {
  const [currentStatus, setCurrent] = useState<string>(task[0].status);
  const [dropdown, setDropdown] = useState<Boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task>(task[0]);

  const newTask = {
    id: currentTask.id,
    title: currentTask.title,
    description: currentTask.description,
    totalSubtasks: currentTask.totalSubtasks,
    subtasks: currentTask.subtasks.map((task) => {
      if (currentStatus === "done") {
        task.status = "done";
      }
      return task;
    }),
    status: currentStatus,
    completedTasks: currentTask.completedTasks,
  };

  const handleCompleted = (
    e: React.ChangeEvent<HTMLInputElement>,
    task: subtask,
    i: number
  ) => {
    if (e.target.checked) {
      currentTask.subtasks[i].status = "done";
      const totalCompleted = currentTask.subtasks.filter(
        (t) => t.status === "done"
      );
      currentTask.completedTasks = totalCompleted.length;
    } else {
      currentTask.subtasks[i].status = "todo";
      const totalCompleted = currentTask.subtasks.filter(
        (t) => t.status === "done"
      );
      currentTask.completedTasks = totalCompleted.length;
    }
    if(currentTask.completedTasks === currentTask.totalSubtasks){
        setCurrent('done')

    } else if(currentTask.completedTasks > 0){
        setCurrent('doing')
    } else{
        setCurrent('todo')
    }
  };
  useEffect(()=>{

  },[])

  return (
    <Container>
      <div className="edit">
        <h2>{currentTask.title}</h2>
        <p>{currentTask.description}</p>
        <span>
          Subtasks ({currentTask.completedTasks} of {currentTask.totalSubtasks}{" "}
          )
        </span>
        <ul>
          {currentTask.subtasks.map((tasks: any, i: number) => (
            <li key={i}>
              <input
                type="checkbox"
                name={tasks.name}
                checked= {tasks.status == "done" && true}
                id="task"
                onChange={(e) => {
                  handleCompleted(e, task, i);
                }}
              />
              <span>{tasks.content}</span>
            </li>
          ))}
        </ul>
        <div className="status">
          <span>Status</span>
          <input
            type="text"
            readOnly={true}
            placeholder={currentStatus}
            onClick={() => {
              dropdown ? setDropdown(false) : setDropdown(true);
            }}
          />
          {dropdown && (
            <div className="dropdown">
              <span
                onClick={() => {
                  setCurrent("todo");
                  setDropdown(false);
                }}
              >
                todo
              </span>
              <span
                onClick={() => {
                  setCurrent("doing");
                  setDropdown(false);
                }}
              >
                doing
              </span>
              <span
                onClick={() => {
                  setCurrent("done");
                  setDropdown(false);
                }}
              >
                done
              </span>
            </div>
          )}
        </div>
        <button onClick={() => handleEdit(newTask)}>Save</button>
      </div>
    </Container>
  );
}

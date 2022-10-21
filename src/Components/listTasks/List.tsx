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
  

export default function List({list, showTaskDetails, name}: any){
    return(
        <div className="list">
        <div className="top">
          <div />
          <h2>{name} ({list.length})</h2>
        </div>
        {list.length > 0 ? (
          list.map((task: Task, i: number) => (
            <div
              key={i}
              className="task"
              onClick={() => showTaskDetails(task.id)}
            >
              <h3>{task.title}</h3>
              <span>{task.completedTasks} of {task.totalSubtasks} substasks</span>
            </div>
          ))
        ) : (
          <span>You don't have any task to do</span>
        )}
      </div>
    )
}
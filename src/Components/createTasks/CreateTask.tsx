import { Container } from "./styles";
import { useState } from "react";
import {generate} from 'shortid'


interface subtask {
  id: string;
  content: string;
  status: "todo" | "done";
}

export const CreateTask = ({ handleCreate }: any) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [subtask, setSubtask] = useState<subtask[]>([
    { id: "", content: "",  status: "todo" },
  ]);


  return (
    <Container >
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder = "This is my title"
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder = "This is my description"
        ></textarea>
        <label htmlFor="subtasks">Subtasks</label>
        <div className="subtasks">
          {subtask.map((t) => (
            <input
              type="text"
              placeholder = "This is my substasks"
              onChange={(e) => {
                setSubtask((currentTask) =>
                  currentTask.map((x) =>
                    x.id === t.id
                      ? {
                          ...x,
                          content: e.target.value,
                        }
                      : x
                  )
                );
              }}
            />
          ))}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSubtask(currentTask => [...currentTask, {
              id: generate(),
              content: '',
              finished: 0,
              status: 'todo'
            }])
          }}
        >
          + Add new Subtask
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            const totalSubtasks = subtask.length
            handleCreate(title, description, subtask, totalSubtasks);
          }}
        >
          Create Taks
        </button>
      </form>
    </Container>
  );
};

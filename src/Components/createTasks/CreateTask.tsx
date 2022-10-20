import { Container } from "./styles";
import { useState } from "react";
import {generate} from 'shortid'

interface subtask {
  id: string;
  content: string;
  finished: number,
  status: "todo" | "done";
}

export const CreateTask = ({ handleCreate }: any) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [subtask, setSubtask] = useState<subtask[]>([
    { id: generate(), content: "", finished: 0, status: "todo" },
  ]);


  return (
    <Container>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="subtasks">Subtasks</label>
        <div className="subtasks">
          {subtask.map((t) => (
            <input
              type="text"
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
          + Add new Subtasks
        </button>
        <label>Status</label>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleCreate(title, description, subtask, status);
          }}
        >
          Create Taks
        </button>
      </form>
    </Container>
  );
};

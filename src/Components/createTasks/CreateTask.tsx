import { Container } from "./styles";
import { useState } from "react";
import { generate } from "shortid";

interface subtask {
  id: string;
  content: string;
  status: "todo" | "done";
}

export const CreateTask = ({ handleCreate }: any) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtask, setSubtask] = useState<subtask[]>([
    { id: "", content: "", status: "todo" },
  ]);

  const [errors, setErrors] = useState<string>("");

  const validateForm = (value: string | subtask[], type: string) => {
    if (value.length === 0) throw `${type} is required!`;
  };

  const validateSubtask = (subtask: subtask[], type: string) => {
    for (let i = 0; i < subtask.length; i++) {
      if (subtask[i].content.length === 0) throw `${type} is required!`;
    }
  };

  const handleSubmit = () => {
    try {
      validateForm(title, "Title");
      validateForm(description, "Description");
      validateSubtask(subtask, "Subtask");
      setErrors("");
      const totalSubtasks = subtask.length;
      handleCreate(title, description, subtask, totalSubtasks);
    } catch (err: any) {
      setErrors(err);
    }
  };

  return (
    <Container>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="This is my title"
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="This is my description"
        ></textarea>
        <label htmlFor="subtasks">Subtasks</label>
        <div className="subtasks">
          {subtask.map((t) => (
            <input
              type="text"
              placeholder="This is my substasks"
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
            setSubtask((currentTask) => [
              ...currentTask,
              {
                id: generate(),
                content: "",
                finished: 0,
                status: "todo",
              },
            ]);
          }}
        >
          + Add new Subtask
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Create Taks
        </button>
        {errors && <span id="error">{errors}</span>}
      </form>
    </Container>
  );
};

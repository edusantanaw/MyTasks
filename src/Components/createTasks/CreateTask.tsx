import React from "react";
import { Container } from "./styles";
import { useState } from "react";

export const CreateTask = ({ handleCreate }: any) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [subtask, setSubtask] = useState<string[]>();
  const [status, setStatus] = useState<string>();
  const [increment, setIncrement] = useState<number>(2);

  const addNewSubTask = (value: string, i: number) => {
    const subTasks = [];
    subTasks[i] = value;
    setSubtask(subTasks);
  };

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
          {Array(increment)
            .fill("")
            .map((i) => (
              <input
                type="text"
                onChange={(e) => addNewSubTask(e.target.value, i)}
              />
            ))}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIncrement(increment + 1);
          }}
        >
          + Add new Subtasks
        </button>
        <label>Status</label>
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
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

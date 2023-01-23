import React, { useRef } from "react";
import { useQueryClient } from "react-query";
import Button from "./Button";
import { postToDo } from "../services/ApiAction";

const CreateTask = () => {
  const taskInputRef = useRef();
  const queryClient = useQueryClient();

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredTask = taskInputRef.current.value;

    const taskObject = {
      taskname: enteredTask,
    };
    taskInputRef.current.value = null;
    await postToDo(taskObject);
    queryClient.invalidateQueries(["to-do-list"]);
  };
  return (
    <form className="w-1/2 flex" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Task Name to Add"
        className="w-full p-5 rounded-lg text-slate-800"
        ref={taskInputRef}
      />
      <Button
        action="Submit"
        btnClass="border-green-300 text-green-400 hover:bg-green-600 rounded-xl"
      />
    </form>
  );
};

export default CreateTask;

import React, { useRef } from "react";
import Button from "./Button";

const CreateTask = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTask = taskInputRef.current.value;

    const taskObject = {
      taskname: enteredTask,
    };
    taskInputRef.current.value = null;
    props.onAddTask(taskObject);
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

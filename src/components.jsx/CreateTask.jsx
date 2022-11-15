import React from "react";
import Button from "./Button";

const CreateTask = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Task Name to Add"
        className="w-1/2 p-5 rounded-lg text-slate-800"
      />
      <Button
        action="Submit"
        btnClass="border-green-300 text-green-400 hover:bg-green-600 rounded-xl"
      />
    </>
  );
};

export default CreateTask;

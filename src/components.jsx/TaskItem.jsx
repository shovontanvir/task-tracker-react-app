import React from "react";
import Button from "./Button";

const TaskItem = (props) => {
  return (
    <div className="my-5 p-5 border rounded-lg flex justify-between items-center">
      <div>
        <h1 className="text-4xl text-left capitalize text-cyan-400">
          {props.title}
        </h1>
        {/* <h1>{props.id}</h1> */}
      </div>
      <div className="flex">
        <Button
          action={props.action}
          btnClass="border-green-300 text-green-400 hover:bg-green-700"
          onclick={props.onclick}
        />
        <Button
          action="Delete"
          btnClass="border-red-400 text-orange-400 hover:bg-red-900"
          onclick={props.onDeleteClick}
        />
      </div>
    </div>
  );
};

export default TaskItem;

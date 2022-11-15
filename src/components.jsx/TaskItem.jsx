import React from "react";

const TaskItem = (props) => {
  return (
    <div className="my-5 p-5 border rounded-lg flex justify-between items-center">
      <div>
        <h1 className="text-5xl capitalize text-cyan-400">{props.title}</h1>
      </div>
      <div className="flex">
        <button className="border border-green-300 px-8 rounded-sm py-2 mx-3 text-green-300 hover:px-10 hover:bg-green-900 transition-all ease-in-out duration-500">
          Done
        </button>
        <button className="border border-red-400 px-8 rounded-sm py-2 mx-3 text-orange-400 hover:px-10 hover:bg-red-900 transition-all ease-in-out duration-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

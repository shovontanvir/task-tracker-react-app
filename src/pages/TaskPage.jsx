import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components.jsx/TaskItem";

const TaskPage = () => {
  const [taskItem, setTaskItem] = useState();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const data = await res.data;
      setTaskItem(data?.slice(0, 5));
      // console.log(taskItem);
    };

    fetchTask();
  }, []);

  return (
    <div className="bg-stone-600 text-center px-5 py-16 rounded-2xl">
      <h1 className="text-white text-2xl">Welcome To</h1>
      <h1 className="text-6xl text-green-300 font-bold">Task Tracker</h1>
      <p className="text-yellow-300 leading-loose text-2xl tracking-wide">
        Track your tasks in a organized manner
      </p>
      <div className="flex justify-between flex-wrap">
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-red-300 font-bold">Task To-Do</h1>
          {taskItem?.map((item) => (
            <TaskItem title={item.title} />
          ))}
        </div>
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-green-300 font-bold">
            Task Acomplished
          </h1>
          <TaskItem title="Learn React" />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components.jsx/TaskItem";
import CreateTask from "../components.jsx/CreateTask";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
  const navigate = useNavigate();
  const infoHandler = async (sentTask) => {
    await axios({
      url: "https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker.json",
      method: "POST",
      data: sentTask,
      headers: {
        "content-type": "application/json",
      },
    });
    await navigate("/");
    console.log("Sent Task = ", sentTask);
  };

  const [taskItem, setTaskItem] = useState();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(
        "http://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker.json"
      );
      const data = await res.data;
      const tasks = [];

      for (let key in data) {
        const task = {
          id: key,
          ...data[key],
        };
        console.log(task);
        tasks.push(task);
        setTaskItem(tasks);

        console.log("taskItem", taskItem);
      }
    };

    fetchTask();
  }, [taskItem]);

  return (
    <div className="bg-stone-600 text-center px-5 py-16 rounded-2xl font-brand">
      <h1 className="text-white text-2xl">Welcome To</h1>
      <h1 className="text-6xl text-green-300 font-bold">Task Tracker</h1>
      <p className="text-yellow-300 leading-loose text-2xl tracking-wide">
        Track your tasks in a organized manner
      </p>
      <div className="w-full my-5 flex justify-center">
        <CreateTask onAddTask={infoHandler} />
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-red-300 font-bold">Task To-Do</h1>
          {taskItem?.map((item) => (
            <TaskItem title={item.taskname} />
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

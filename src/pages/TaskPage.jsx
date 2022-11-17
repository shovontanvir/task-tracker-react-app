import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components.jsx/TaskItem";
import CreateTask from "../components.jsx/CreateTask";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
  // function to post data to firebase using axios
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
    // console.log("Sent Task = ", sentTask);
  };

  // function to fetch data from firebase using axios

  const [taskItem, setTaskItem] = useState();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await axios.get(
        "http://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker.json"
      );
      const data = await res.data;
      // console.log(data)
      const tasks = [];

      for (let key in data) {
        const task = {
          id: key,
          ...data[key],
        };
        // console.log(task);
        tasks.push(task);
        setTaskItem(tasks);

        // console.log("taskItem", taskItem);
      }
    };

    fetchTask();
  }, [taskItem]);

  // function to handle when done button is clicked

  const doneHandler = (task) => {
    const { id, ...newData } = task;
    const updateTask = {
      isDone: "Done",
      ...newData,
    };
    axios({
      url: `https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker/${task.id}.json`,
      method: "PUT",
      data: updateTask,
      headers: {
        "content-type": "application/json",
      },
    });
    console.log("done pressed");
  };

  const unDoneHandler = (task) => {
    const { isDone, ...newData } = task;
    const updateTask = {
      ...newData,
    };
    axios({
      url: `https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker/${task.id}.json`,
      method: "PUT",
      data: updateTask,
      headers: {
        "content-type": "application/json",
      },
    });
    console.log("done pressed");
  };

  const toDoTasks = [];
  const doneTasks = [];
  const sortTasks = (taskItem) => {
    taskItem?.map((item, index) => {
      if (item.isDone !== "Done") {
        toDoTasks.push(taskItem[index]);
        return toDoTasks;
      } else {
        doneTasks.push(taskItem[index]);
        return doneTasks;
      }
    });
  };
  sortTasks(taskItem);

  return (
    <div className="bg-stone-600 text-center px-5 py-16 font-brand">
      <h1 className="text-white text-2xl">Welcome To</h1>
      <h1 className="text-6xl text-green-300 font-bold">Task Tracker</h1>
      <p className="text-yellow-300 leading-loose text-2xl tracking-wide">
        Track your tasks in an organized manner
      </p>
      <div className="w-full my-5 flex justify-center">
        <CreateTask onAddTask={infoHandler} />
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-red-300 font-bold">Task To-Do</h1>
          {toDoTasks
            .slice(0)
            .reverse()
            .map((item, index) => (
              <TaskItem
                title={item.taskname}
                key={index}
                action={!item.isDone ? "Done" : "Put Back"}
                onclick={() => doneHandler(item)}
              />
            ))}
        </div>
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-green-300 font-bold">
            Task Acomplished
          </h1>
          {doneTasks
            .slice(0)
            .reverse()
            .map((item, index) => (
              <TaskItem
                title={item.taskname}
                key={index}
                onclick={() => unDoneHandler(item)}
                action={!item.isDone ? "Done" : "Put Back"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;

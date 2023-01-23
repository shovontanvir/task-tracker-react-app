import React, { useState } from "react";
import TaskItem from "../components/TaskItem";
import CreateTask from "../components/CreateTask";
import Layout from "../components/Layout";
import { postData, putData } from "../services/ApiAction";
import ToDoTasks from "../components/ToDoTasks";

const TaskPage = () => {
  // function to post data to firebase using axios
  // const infoHandler = async (sentTask) => {
  //   await postData(
  //     "https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker",
  //     sentTask
  //   );
  // };
  // function to handle when done button is clicked
  const unDoneHandler = (task) => {
    const { isDone, id, ...newData } = task;
    const updateTask = {
      ...newData,
    };

    putData(
      "https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker/",
      task.id,
      updateTask
    );
  };

  // function to sort todo and acomplished tasks

  return (
    <Layout>
      <h1 className="text-white text-2xl">Welcome To</h1>
      <h1 className="text-6xl text-green-300 font-bold">Task Tracker</h1>
      <p className="text-yellow-300 leading-loose text-2xl tracking-wide">
        Track your tasks in an organized manner
      </p>
      <div className="w-full my-5 flex justify-center">
        <CreateTask />
      </div>

      <div className="flex justify-between flex-wrap">
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-red-300 font-bold">Task To-Do</h1>
          <ToDoTasks />
        </div>
        <div className="basis-1/2 p-10">
          <h1 className="text-4xl text-green-300 font-bold">
            Task Acomplished
          </h1>
          {/* {doneTasks
            .slice(0)
            .reverse()
            .map((item, index) => (
              <TaskItem
                title={item.taskname}
                key={index}
                onclick={() => unDoneHandler(item)}
                action={!item.isDone ? "Done" : "Put Back"}
                onDeleteClick={() => DeleteHandler(item)}
              />
            ))} */}
        </div>
      </div>
    </Layout>
  );
};

export default TaskPage;

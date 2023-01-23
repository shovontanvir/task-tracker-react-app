import React from "react";
import TaskItem from "../components/TaskItem";
import FetchTaskHandler from "../services/FetchTaskHandler";
import DoneHandler from "../services/DoneHandler";
import DeleteHandler from "../services/DeleteHandler";
import { useQuery } from "react-query";
import { getToDoList } from "../services/ApiAction";

const ToDoTasks = () => {
  //   const { isLoading, data, error, isError } = usefetchToDoListQuery();

  const { isLoading, data, error, isError } = useQuery(
    ["to-do-list"],
    getToDoList
  );

  console.log("data: ", data);

  const tasks = FetchTaskHandler(data);

  console.log("tasks: ", tasks);

  //   console.log("taskItem: ", taskItem);

  if (isLoading) {
    return <h3>Loading... ... ...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <>
      {tasks.reverse().map((item) => (
        <TaskItem
          title={item.taskname}
          key={item.id}
          action={!item.isDone ? "Done" : "Put Back"}
          onclick={() => DoneHandler(item)}
          onDeleteClick={() => DeleteHandler(item)}
        />
      ))}
    </>
  );
};

export default ToDoTasks;

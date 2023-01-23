const SortTasks = (taskItem) => {
  const toDoTasks = [];
  const doneTasks = [];
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

export default SortTasks;

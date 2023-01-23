const FetchTaskHandler = (data) => {
  const tasks = [];

  for (let key in data) {
    const task = {
      id: key,
      ...data[key],
    };
    tasks.push(task);
  }
  return tasks;
};

export default FetchTaskHandler;

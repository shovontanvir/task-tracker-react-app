import { putData } from "./ApiAction";

const DoneHandler = (task) => {
  const { id, ...newData } = task;
  const updateTask = {
    isDone: "Done",
    ...newData,
  };
  putData(
    "https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker/",
    task.id,
    updateTask
  );
};

export default DoneHandler;

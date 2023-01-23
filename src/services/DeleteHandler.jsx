import { deleteData } from "./ApiAction";

const DeleteHandler = (task) => {
  deleteData(
    "https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker/",
    task.id
  );
};

export default DeleteHandler;

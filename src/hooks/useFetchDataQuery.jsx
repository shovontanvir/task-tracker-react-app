import { useQuery } from "react-query";
import { getData } from "../services/ApiAction";
// import { QueryClient } from "react-query";

const fetchData = () => {
  return getData(
    "https://task-tracker-react-tailwind-default-rtdb.asia-southeast1.firebasedatabase.app/task-tracker"
  );
};

const useFetchDataQuery = () => {
  // const queryClient = new QueryClient();
  // queryClient.invalidateQueries({
  //   queryKey: ["new-task"],
  // });
  return useQuery("new-task", fetchData, {});
};

export default useFetchDataQuery;

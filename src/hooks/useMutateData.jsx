import { useMutation } from "react-query";
import { postData } from "../services/ApiAction";

const useMutateData = (url, sentData) => {
  const mutateFn = (url, sentData) => {
    postData(url, sentData);
  };
  return useMutation(mutateFn);
};

export default useMutateData;

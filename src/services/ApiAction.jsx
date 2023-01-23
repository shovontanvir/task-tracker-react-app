import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// function to get data from api using axios
export const getToDoList = () => {
  // return axios.get(url + ".json");
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl + ".json")
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to post data to api using axios
export const postToDo = async (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    axios
      .post(apiUrl + ".json", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to update data using axios
export const putData = (url, taskId, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(apiUrl + "/" + taskId + ".json", { data })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to delete data using axios
export const deleteData = (url, taskId) => {
  axios({
    url: url + taskId + ".json",
    method: "DELETE",
  });
};

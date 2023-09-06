import axios from "axios";

const api = axios.create({
  baseURL: "https://a-movies-api.herokuapp.com",
});

function APIcallGet(typeofCall) {
  const url = typeofCall;
  return api.get(url);
}

function APIcallPost() {}

function APIcallPut() {}

export { APIcallGet, APIcallPost, APIcallPut };

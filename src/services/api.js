import axios from "axios";

const api = axios.create({
  //baseURL: "https://crawlertars.herokuapp.com/"
   baseURL: "http://localhost:8080/" //teste
});

/*
api.interceptors.request.use(async config => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpZWwubWtAaG90bWFpbC5jb20iLCJpYXQiOjE2MDUzMDQyOTF9.NsLE2KQW6sx__Fulqw_Q7X0b7guHVsTuLTbBrgM1Fok`;
  return config;
});
*/
export default api;
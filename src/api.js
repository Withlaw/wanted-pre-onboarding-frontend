import axios from "axios";
import { BASE_URL, URL_PATH } from "./constants";

let accessToken = window.localStorage.getItem("access_token");

// aixos 기본설정, 인터셉터설정
const config = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken,
  },
  timeout: 5000,
};
const axiosInstance = axios.create(config);
const axiosAuthInterceptor = axiosInstance.interceptors.request.use(config => {
  if (!accessToken) return config;
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
}, undefined);

// authorization api
export const postSignup = async data => {
  try {
    const res = await axiosInstance.post(URL_PATH.SIGNUP, data);
    if (res.status !== 201) throw new Error("201 외");
  } catch (err) {
    throw err;
  }
};

export const postSignin = async data => {
  try {
    const res = await axiosInstance.post(URL_PATH.SIGNIN, data);
    if (res.status !== 200) throw new Error("200 외");
    const {
      data: { access_token },
    } = res;
    accessToken = access_token;
    window.localStorage.setItem("access_token", accessToken);
  } catch (err) {
    throw err;
  }
};

// todo crud api
export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(URL_PATH.TODOS);
    if (res.status !== 200) throw new Error("200 외");
    // axiosInstance.interceptors.request.eject(axiosAuthInterceptor); // 인터셉터 제거
    return res;
  } catch (err) {
    throw err;
  }
};
export const postTodo = async todo => {
  try {
    const res = await axiosInstance.post(URL_PATH.TODOS, { todo });
    if (res.status !== 201) throw new Error("201 외");
    return res;
  } catch (err) {
    throw err;
  }
};
export const putTodo = async (id, todo, isCompleted) => {
  try {
    const res = await axiosInstance.put(URL_PATH.TODOS + `/${id}`, {
      todo,
      isCompleted,
    });
    if (res.status !== 200) throw new Error("200 외");
    return res;
  } catch (err) {
    throw err;
  }
};
export const deleteTodo = async id => {
  try {
    const res = await axiosInstance.delete(URL_PATH.TODOS + `/${id}`);
    if (res.status !== 204) throw new Error("204 외");
  } catch (err) {
    throw err;
  }
};

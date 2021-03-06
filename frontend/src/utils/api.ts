import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export const api = axios.create({
  baseURL,
});

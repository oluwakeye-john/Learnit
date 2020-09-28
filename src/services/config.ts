import axios from "axios";
import { BASE_URL } from "./constant";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { api };

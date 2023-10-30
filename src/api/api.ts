import axios from "axios";
import { UserData } from "../types/types";

const url = "http://localhost:3000";

const api = {
  getAllList: async () => {
    return (await axios.get<UserData[]>(url)).data;
  },
  getQueryList: async (query: string) => {
    return (await axios.get<UserData[]>(`${url}?term=${query}`)).data;
  },
};

export default api;

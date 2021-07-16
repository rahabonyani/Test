import axios from "axios";

const base = "api/users";

export const getUserList = (params) => axios.get(base, { params });

export const getUserDetails = (params) => axios.get(`${base}/${params.id}`);

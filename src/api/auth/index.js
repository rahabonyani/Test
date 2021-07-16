import axios from "axios";

const base = "api/";

export const loginUser = (props) => axios.post(base + "login", { ...props });

export const registerUser = (props) => axios.post(base + "register", { ...props });

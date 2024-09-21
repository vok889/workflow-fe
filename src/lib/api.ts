import axios from "axios";

// export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   withCredentials: true
// });

export const api = axios.create({
    baseURL: "https://task-api-v2.onrender.com",
  });
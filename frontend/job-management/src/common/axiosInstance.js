import axios from "axios";


export const URL=import.meta.env.VITE_URL

console.log(URL,'URL FFFFF')


export const apiInstance = axios.create({
    baseURL: URL,  
    headers: {
      'Content-Type': 'application/json', 
    },
    withCredentials: true, 
  });


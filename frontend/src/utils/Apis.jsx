import axios from 'axios'

export const userApi = axios.create({
  baseURL:`http://localhost:5000`
})

export const partnerApi = axios.create({
  baseURL:`http://localhost:5000/partner`
})

export const adminApi = axios.create({
  baseURL:`http://localhost:5000/admin`
})

userApi.interceptors.request.use((req)=>{
  if(localStorage.getItem("token")){
    console.log("interceptoor")
    req.headers.Authorization = "Bearer" + localStorage.getItem("token")
  }
  console.log("no token - interceptor")
  return req;
})

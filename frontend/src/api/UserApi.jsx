import { userApi } from "../utils/Apis.jsx";

export async function registerUser(credentials) {
  try {
    console.log("reached api ", credentials);
    const data = await userApi.post('/register',credentials);
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function loginUser(credentials) {
  try {
    console.log("reached loginUser api",credentials);
    const data= await userApi.post('/login',credentials)
    return data
  } catch (error) {
    console.log(error)
  }
}


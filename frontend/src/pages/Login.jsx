import React, { useState, useEffect } from "react";
import logo from "../assets/sailmate-removebg-preview.png";
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { loginUser } from "../api/UserApi";
import { Link,Navigate,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast,Toaster } from "react-hot-toast";
import { setUserDetails } from "../redux/userSlice";

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //formik and yup
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("file:register.jsx line:23 registration values", values);
        action.resetForm();
      },
    });

  //google signup
    const responseMessage = async (response) => {
    let cred = jwtdecode(response.credential);
    console.log(cred);

    const googleReq = await loginUser(cred)
    console.log(googleReq,'frontend');
    if(googleReq){
      localStorage.setItem("token",googleReq.data.token)
      if(googleReq.data.userExist){
        dispatch(
          setUserDetails({
            first_Name:googleReq.data.userExist.first_Name,
            last_Name:googleReq.data.userExist.last_Name,
            image:googleReq.data.userExist.image,
            email:googleReq.data.userExist.email,
          })
        )
        toast.success(googleReq.data.message)
        setTimeout(()=>{
          navigate('/')
        },1000)
      }
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <div className="bg-my-image h-screen bg-cover ">
        <div className=" flex justify-center ">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm px-8 py-10 rounded-2xl w-11/12 mt-32 md:w-4/12">
            <div className="flex items-center">
              <div>
                <img src={logo} alt="" className="w-5/12 float-left -ml-3" />
                <h2 className="text-white text-4xl float-left my-14 -ml-8">
                  Let's get started
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.email && touched.email ? (
                  <p className=" form-error  text-white text-xs font-thin">
                    {errors.email}
                  </p>
                ) : null}
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.password && touched.password ? (
                  <p className=" form-error  text-white text-xs font-thin">
                    {errors.password}
                  </p>
                ) : null}
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-md text-white text-opacity-100 rounded-lg p-2 mx-auto block pl-10 pr-10"
              >
                Submit
              </button>

              <div id="recaptcha-container"></div>

              <div className="text-white flex justify-center mt-2">
                <p>Don't have an account?</p>
                <Link className="ml-1 text-blue-700" to="/register">
                  {" "}
                  Sign up
                </Link>
              </div>

              <div className="mt-3 flex justify-center items-center">
                <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                  shape="pill"
                  size="medium"
                />
              </div>
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Login;

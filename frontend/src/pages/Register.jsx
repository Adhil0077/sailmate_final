import React, { useState, useEffect } from "react";
import logo from "../assets/sailmate-removebg-preview.png";
import { GoogleLogin } from "@react-oauth/google";
import jwtdecode from "jwt-decode";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { registerUser } from "../api/UserApi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import app from "../firebase/config";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/userSlice.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const auth = getAuth(app);


const initialValues = {
  first_Name: "",
  last_Name: "",
  email: "",
  phone: "",
  password: "",
  confirm_Password: "",
  otp: "",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //formik and yup
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

 


  //google signup
  const responseMessage = async (response) => {
    let cred = jwtdecode(response.credential);
    const googleReg = await registerUser(cred);
    if (googleReg) {
      console.log(googleReg);
      localStorage.setItem("token", googleReg.data.token);
      if (googleReg.data.userData) {
        dispatch(
          setUserDetails({
            first_Name: googleReg.data.userData.first_Name,
            last_Name: googleReg.data.userData.las_Name,
            image: googleReg.data.userData.image,
            email: googleReg.data.userData.email,
          })
        );

        console.log("finished googlesignup");
        toast.success(googleReg.data.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
      if (googleReg.data.message) {
        console.log("reached");
        toast.error(googleReg.data.message);
      }
    }
  };

  const errorMessage = (error) => {
    console.log(error, "from google signup errormessage");
  };

  return (
    <>
      <div className="bg-my-image h-screen bg-cover ">
        <div className=" flex justify-center ">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm px-8 py-10 rounded-2xl w-11/12 mt-4 md:w-4/12">
            <div className="flex items-center">
              <div>
                <img src={logo} alt="" className="w-5/12 float-left -ml-3" />
                <h2 className="text-white text-4xl float-left my-14 -ml-8">
                  Let's get started
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="first_Name"
                    id="first_Name"
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_Name}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  {errors.first_Name && touched.first_Name ? (
                    <p className=" form-error text-white text-xs font-thin">
                      {errors.first_Name}
                    </p>
                  ) : null}
                  <label
                    htmlFor="first_Name"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="last_Name"
                    id="last_Name"
                    autoComplete="off"
                    value={values.last_Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  {errors.last_Name && touched.last_Name ? (
                    <p className=" form-error  text-white text-xs font-thin">
                      {errors.last_Name}
                    </p>
                  ) : null}
                  <label
                    htmlFor="last_Name"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>

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
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.phone && touched.phone ? (
                  <p className=" form-error  text-white text-xs font-thin">
                    {errors.phone}
                  </p>
                ) : null}
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone
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

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="confirm_Password"
                  id="confirm_Password"
                  autoComplete="off"
                  value={values.confirm_Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.confirm_Password && touched.confirm_Password ? (
                  <p className=" form-error  text-white text-xs font-thin">
                    {errors.confirm_Password}
                  </p>
                ) : null}
                <label
                  htmlFor="confirm_Password"
                  className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
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
                <p>Already have an account?</p>
                <Link className="ml-1 text-blue-700" to="/login">
                  {" "}
                  Sign in
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

export default Register;

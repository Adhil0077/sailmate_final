import { response } from "express";
import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const userRegister = asyncHandler(async (req, res) => {
  console.log("backend in userRegister");
  const { given_name, family_name, email, sub, picture } = req.body;
  const userExist = await userModel.findOne({ email: email });

  if (userExist) {
    res.status(401).json({
      message:'User already exists'
    });

  } else if (req.body.otp) {
    const userData = await userModel.create({
      first_Name,
      last_Name,
      email,
      phone,
      password,
    }).then((response)=>{
      const token = jwt.sign({id:response._id},process.env.JWT_SECRET,{
        expiresIn:'30d'
      })
       res.status(200).json({
      userData:response,
      token,
      message:'Registerd successfully'
    });

    });

   
  } else if (req.body.sub) {
    const userData = await userModel
      .create({
        first_Name: given_name,
        last_Name: family_name,
        email: email,
        image: picture,
        password: sub,
      })
      .then((response) => {
        const token = jwt.sign({ id: response._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        // console.log(res._id);
        res.status(200).json({
          userData:response,
          token,
          message: "Registerd successfully",
        });
      });
  }
});

const userLogin = async (req, res, next) => {
  try {
    console.log("backend in login");
    console.log(req.body, "userlogin backend");
    const { email, sub } = req.body;
    const userExist = await userModel.findOne({ email: email });
    if (userExist && (await userExist.matchPassword(sub))) {
      const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      res.status(200).json({
        userExist,
        token,
        message: "Logged in successfully",
      });
    } else {
      res.status(401).json({
        message: "invalid password or email",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { userRegister, userLogin };

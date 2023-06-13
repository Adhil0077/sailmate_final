import * as Yup from "yup";

export const signUpSchema = Yup.object({
  first_Name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  last_Name: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string()
    .required("Please enter your mobile number")
    .matches(/^\d{10}$/, "Mobile number must have 10 digits"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_Password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, "Enter at least 2 names")
    .required("Full name is required"),
    phone_number: yup
    .string()
   .min(11, 'Please provide valid phone number')
    .required("Phone Number is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const signInValidationSchema = yup.object().shape({
  email: yup.string().email('please enter a valid email').required("email is required"),
  password: yup.string().required("Password is required"),
});

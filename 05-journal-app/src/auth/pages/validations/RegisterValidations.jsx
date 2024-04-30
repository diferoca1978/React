import * as Yup from "yup";

export const RegisterValidations = Yup.object().shape({
  displayName: Yup.string()
    .min(2, "Too short")
    .max(50)
    .required("Name is required"),
  email: Yup.string()
    .email("Insert a valid Email")
    .required("Email is required")
    .trim(),
  password: Yup.string()
    .min(8, "password must have eight characters")
    .required("Password is required"),
});

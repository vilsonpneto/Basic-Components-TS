import * as yup from "yup";

export const schemaRegister = yup.object().shape({
  username: yup.string().required("Required field!"),
  email: yup.string().required("Required field!").email("Email not is valid!"),
  password: yup
    .string()
    .required("Required field!")
    .min(8, "Your password must be at least 8 characters long!"),
});

import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Required field!").email("Email not is valid!"),
  password: yup.string().required("Required field!"),
});

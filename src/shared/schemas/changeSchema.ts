import * as yup from "yup";

export const changeSchema = yup.object({
  password: yup
    .string()
    .max(6, "Must have a maximum of 6 characters.")
    .required("Required field."),
});
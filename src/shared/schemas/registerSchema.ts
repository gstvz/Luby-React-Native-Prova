import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .max(50, "Must have a maximum of 50 characters.")
    .required("Required field.")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/, {
      message: "Must contain only letters, acentuation and spaces.",
    }),
  email: yup.string().email("Invalid email.").required("Required field."),
  password: yup
  .string()
  .max(6, "Must have a maximum of 6 characters.")
  .required("Required field.")  
});
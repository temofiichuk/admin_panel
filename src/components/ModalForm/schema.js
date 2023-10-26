import { string, object, number, array } from "yup";

const schema = object().shape({
  name: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[A-Z|А-ЯЇЄІҐ]/, "Must be Uppercase"),
  category: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
    .matches(/^[A-Z|А-ЯЇЄІҐ]/, "Must be Uppercase"),
  image: string()
    .required("Required")
    .matches(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|svg))$/i, "Invalid image URL"),
  price: number()
    .min(0, "Must be more than zero")
    .required("Required")
    .typeError("Must be a number"),
  quantity: number()
    .min(0, "Must be more than zero")
    .required("Required")
    .typeError("Must be a number"),
  description: array().of(
    object().shape({
      head: string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .matches(/^[A-Z|А-ЯЇЄІҐ]/, "Must be Uppercase"),
      body: string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .matches(/^[A-Z|А-ЯЇЄІҐ]/, "Must be Uppercase")
        .max(250, "Too Long!"),
    })
  ),
});

export default schema;

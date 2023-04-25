import { Validators } from "@angular/forms";
import { Field, FieldType, Error } from "src/app/shared/dynamic-form";

export const loginClientDetailsForm: Field[] = [
  {
    name: "email",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.email],
    gridStyle: "row-col",
  },
  {
    name: "password",
    type: FieldType.PASSWORDFIELD,
    validation: [Validators.required],
    gridStyle: "row-col",
  },
];

export const errors: Error[] = [
  {
    name: "required",
    text: "This field is required",
    rules: ["dirty"],
  },
  {
    name: "email",
    text: "Invalid Email",
    rules: ["dirty"],
  },
  {
    name: "maxlength",
    text: "This field requires at most 13 digits",
    rules: ["dirty"],
  },
  {
    name: "minlength",
    text: "This field requires at least 11 digits",
    rules: ["dirty"],
  },

];

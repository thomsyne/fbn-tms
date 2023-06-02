import { Validators } from "@angular/forms";
import { Field, FieldType, Error } from "src/app/shared/dynamic-form";
import { ModalMetaData } from "src/app/shared/modal";

export const verifyOTPModalData: ModalMetaData = {
  modalType: "primary",
  header: "Enter OTP",
  subHeader: "Provide OTP and Comment",
  buttonText: "Save",
};

export const verifyOTPFormFields: Field[] = [
  {
    name: "otp",
    displayValue: "OTP *",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
  },
  {
    name: "comment",
    displayValue: "Comment",
    type: FieldType.TEXTAREA,
  }
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
];

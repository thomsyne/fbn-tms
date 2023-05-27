import { Validators } from "@angular/forms";
import { Field, FieldType, Error } from "src/app/shared/dynamic-form";
import { ModalMetaData } from "src/app/shared/modal";

export const createUserModalData: ModalMetaData = {
  modalType: "primary",
  header: "Add New User",
  subHeader: "Provide details of the user you wish to add.",
  buttonText: "Add User",
};

export const createUserFormFields: Field[] = [
  {
    name: "firstname",
    displayValue: "First Name *",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
  },
  {
    name: "middlename",
    displayValue: "Middle Name",
    type: FieldType.TEXTFIELD,
  },
  {
    name: "lastname",
    displayValue: "Last Name *",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
  },
  {
    name: "mobileNo",
    displayValue: "Phone Number *",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
  },
  {
    name: "email",
    displayValue: "Email Address *",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.email],
  },
  {
    name: "userRole",
    displayValue: "Staff Role *",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
  },
  {
    name: "branchCode",
    displayValue: "Branch Code *",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
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
];

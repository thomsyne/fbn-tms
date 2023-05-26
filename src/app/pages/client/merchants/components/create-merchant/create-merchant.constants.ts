import { Validators } from "@angular/forms";
import { Field, FieldType, Error } from "src/app/shared/dynamic-form";

export const createMerchantForm: Field[] = [
  {
    displayValue: "Merchant Ref",
    name: "merchantRef",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Merchant Id",
    name: "merchantId",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Merchant Name",
    name: "merchantName",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Address",
    name: "address",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "State",
    name: "state",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "BVN",
    name: "bvn",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Email",
    name: "email",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.email],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Operating Account",
    name: "operatingAccount",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.minLength(10)],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Merchant Collection Account",
    name: "merchantCollectionAccount",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.minLength(10)],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Other Account",
    name: "otherAccount",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.minLength(10)],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Mobile No",
    name: "mobileNo",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Merchant Type",
    name: "merchantType",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
];
export const createMerchantErrors: Error[] = [
  {
    name: "required",

    text: "This field is required",
    rules: ["dirty"],
  },
  {
    name: "min",
    text: "Cannot be less than 1",
    rules: ["dirty"],
  },
];

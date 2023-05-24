
import { Validators } from "@angular/forms";
import { conditions, statuses } from "src/app/core";
import { Field, FieldType, Error } from "src/app/shared/dynamic-form";

export const createTerminalForm: Field[] = [
  {
    displayValue: "Brand Supplier",
    name: "brand",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Terminal Model *",
    name: "terminalModel",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "PTSP",
    name: "ptsp",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "OS Version",
    name: "osVersion",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Terminal ID *",
    name: "terminalId",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Terminal Serial Number",
    name: "serialNo",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Status",
    name: "status",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    options: new Map(statuses),
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Condition",
    name: "terminalCondition",
    type: FieldType.SELECTDROPDOWN,
    validation: [Validators.required],
    options: new Map(conditions),
    gridStyle: "row-col__md-6",
  },
  {
    displayValue: "Merchant Id",
    name: "merchantId",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required, Validators.maxLength(10)],
    gridStyle: "row-col__md-6",
    isSender: true
  },
  {
    displayValue: "MerchantName",
    name: "merchantName",
    type: FieldType.TEXTFIELD,
    validation: [Validators.required],
    gridStyle: "row-col__md-6",
    readonly: true
  },
  {
    displayValue: "Current Physical Location of Terminal",
    name: "currentLocation",
    type: FieldType.TEXTAREA,
    validation: [Validators.required],
  }
];

export const createTerminalErrors: Error[] = [
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

import { ColumnSetting, Filter, FilterFormat } from "src/app/shared/dynamic-table";
import { ModalMetaData } from "src/app/shared/modal";

export const terminalOptionModalData: ModalMetaData = {
  modalType: "primary",
  header: "Add Terminal",
  subHeader: "Simple user instruction to guide user steps.",
  // buttonText: "Close",
};

export const filters: Filter[] = [
    {
        displayName: "Terminal Id",
        filterName: "terminalId",
        type: FilterFormat.TEXT_FIELD,
    },
    {
      displayName: "Terminal Model",
      filterName: "terminalModel",
      type: FilterFormat.SELECT,
    },
    {
        displayName: "Status",
        filterName: "status",
        type: FilterFormat.SELECT,
      },
  ];
  
  export const terminalTableSettings: ColumnSetting[] = [
    {
      primaryKey: "terminalId",
      header: "Terminal Id",
    },
    {
      primaryKey: "serialNo",
      header: "Serial Number",
    },
    {
      primaryKey: "terminalModel",
      header: "Terminal Model",
    },
    {
      primaryKey: "ptsp",
      header: "PTSP",
    },
    {
      primaryKey: "lastActivityDate",
      header: "Last Transacting Date",
    },
    {
      primaryKey: "terminalCondition",
      header: "Terminal Condition",
    },
  ];
  
  export const downloadCSvheaders: string[] = [
    "TERMINAL ID",
    "MERCHANT ID",
    "MERCHANT NAME",
    "BANK CODE",
    "BANK NAME",
    "PTSP",
    "USER REF",
    "STATUS",
    "USAGE TYPE",
    "SECTOR",
    "ADDRESS",
    "CITY",
    "STATE",
    "COUNTRY",
    "GEOLOCATION",
    "ENTITY CODE",
    "LAST ACTIVITY DATE",
    "SERIAL NO",
    "TERMINAL MODEL",
    "OS VERSION",
    "BRAND",
    "TERMINAL CONDITION",
    "CURRENT LOCATION",
    "MCC",
    "CREATED DATE",
    "CREATED BY",
    "MODIFIED BY",
    "MODIFIED DATE"

  ];
  
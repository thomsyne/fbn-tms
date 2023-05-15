import { ColumnSetting, Filter, FilterFormat } from "src/app/shared/dynamic-table";

export const filters: Filter[] = [
    {
      displayName: "Username",
      filterName: "username",
      type: FilterFormat.TEXT_FIELD,
    },
    {
        displayName: "Email Address",
        filterName: "email",
        type: FilterFormat.TEXT_FIELD,
      },
  ];
  
  export const usersTableSettings: ColumnSetting[] = [
    {
      primaryKey: "username",
      header: "Username",
    },
    {
      primaryKey: "fullName",
      header: "fullName",
    },
    {
      primaryKey: "role",
      header: "User Role",
    },
    {
      primaryKey: "email",
      header: "Email Address",
    },
    {
      primaryKey: "branchCode",
      header: "Branch Code",
    },
  ];
  
  export const downloadCSvheaders: string[] = [
    "USERNAME",
    "FULL NAME",
    "USER ROLE",
    "EMAIL ADDRESS",
    "BRANCH CODE"
  ];
  
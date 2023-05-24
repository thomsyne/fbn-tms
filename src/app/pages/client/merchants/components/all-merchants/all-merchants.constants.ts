import { ColumnSetting, Filter, FilterFormat } from "src/app/shared/dynamic-table";

export const filters: Filter[] = [
    {
      displayName: "Merchant Name",
      filterName: "merchantName",
      type: FilterFormat.TEXT_FIELD,
    },
  ];
  
  export const merchantsTableSettings: ColumnSetting[] = [
    {
      primaryKey: "merchantId",
      header: "Merchant Id",
    },
    {
        primaryKey: "merchantName",
        header: "Merchant Name",
    },
    {
      primaryKey: "merchantType",
      header: "Merchant Type",
    },
    {
      primaryKey: "operatingAccount",
      header: "Operating Account",
    },
    {
      primaryKey: "merchantCollectionAccount",
      header: "Collection Account",
    },
  ];
  
  export const downloadCSvheaders: string[] = [
    "USERNAME",
    "FULL NAME",
    "USER ROLE",
    "EMAIL ADDRESS",
    "BRANCH CODE"
  ];
  
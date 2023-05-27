import { SideNavigation } from "src/app/shared/navigation";


export const adminNavConfig: SideNavigation[] = [
  {
    name: "Dashboard",
    url: "dashboard",
    iconUrl: "../../../../assets/icons/sprite.svg#dashboard",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "My Merchants",
    url: "merchants",
    iconUrl: "../../../../assets/icons/sprite.svg#merchant",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Users",
    url: "users",
    iconUrl: "../../../../assets/icons/sprite.svg#user",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Terminals",
    url: "/terminals",
    iconUrl: "../../../../assets/icons/sprite.svg#terminal",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Entities",
    url: "/entities",
    iconUrl: "../../../../assets/icons/sprite.svg#entities",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Banks",
    url: "/banks",
    iconUrl: "../../../../assets/icons/sprite.svg#banks",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Subscriptions",
    url: "/subscriptions",
    iconUrl: "../../../../assets/icons/sprite.svg#pay",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Devices",
    url: "/devices",
    iconUrl: "../../../../assets/icons/sprite.svg#device",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  },
  {
    name: "Reports",
    url: "/reports",
    iconUrl: "../../../../assets/icons/sprite.svg#report",
    permission: 'MANAGE_SYSTEM_CONFIGURATION'
  }
];

export const adminNavConfigMinor: SideNavigation[] = [
  {
    name: "Audit Logs",
    url: "/audits",
    iconUrl: "../../../../assets/icons/sprite.svg#audit",
    permission: 'CAN_VIEW_MERCHANT'
  },
  {
    name: "Support",
    url: "/support",
    iconUrl: "../../../../assets/icons/sprite.svg#dispute",
  },
];

export const clientNavConfig: SideNavigation[] = [
  {
    name: "Dashboard",
    url: "/dashboard/client",
    iconUrl: "../../../../../assets/icons/sprite.svg#dashboard",
    permission: 'CAN_VIEW_MERCHANT_DASHBOARD'
  },
  {
    name: "Products",
    url: "/products",
    iconUrl: "../../../../../assets/icons/sprite.svg#product",
    permission: 'CAN_VIEW_PRODUCT'
  },
  {
    name: "My Customers",
    url: "/customers",
    iconUrl: "../../../../../assets/icons/sprite.svg#merchant",
    permission: 'CAN_VIEW_CUSTOMER'
  },
  {
    name: "My Staff",
    url: "/staff",
    iconUrl: "../../../../assets/icons/sprite.svg#user",
    permission: 'CAN_VIEW_USER'
  },
  // {
  //   name: "Shops",
  //   url: "/shops",
  //   iconUrl: "../../../../assets/icons/sprite.svg#shop",
  // },
  {
    name: "Reports",
    url: "/reports",
    iconUrl: "../../../../assets/icons/sprite.svg#report",
    permission: 'CAN_VIEW_ORDER'
  },
  {
    name: "Pay Now",
    url: "/pay",
    iconUrl: "../../../../assets/icons/sprite.svg#pay",
    permission: 'CAN_MAKE_SALE'
  },
];

export const clientNavConfigMinor: SideNavigation[] = [
  {
    name: "Support",
    url: "/support",
    iconUrl: "../../../../assets/icons/sprite.svg#dispute",
  },
];

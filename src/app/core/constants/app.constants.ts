export const AuthRoutes = {
  login: "auth/login",
};

export const AppRoutes = {
  dashboard: "dashboard",
  merchants: "merchants",
  createMerchant: "merchants/create",
  terminals: "terminals",
  createTerminal: "terminals/create",
};

export const AuthServiceRoutes = {
  login: "usermanager/login",
};

export const UserServiceRoutes = {
  getAllUsers: "usermanager/getUserMasterList",
};

export const MerchantServiceRoutes = {
  getAllMerchants: "merchants/getMerchants",
  getMerchantById: "merchants/getByMerchantId",
  addMerchant: "merchants/save",
};

export const TerminalServiceRoutes = {
  getAllTerminals: "terminals/getTerminals",
  addTerminal: "terminals/save",
  getTerminalById: "terminals/getByTerminalId",
  getDownloadTerminals: "terminals/terminals",
};

export const LookupServiceRoutes = {
  getAllByCategory: "lookupdata/getdatabycategorycode",
};

export const ServiceRequestHeaders = {
  "Content-Type": "application/json",
  "x-source-code": "ANP3APPLOTWEB",
  "x-client-id": "APPDEV_56666CDXGH8953EqUTYLOT",
  "x-client-secret": "APPDEV_56666CDXGH8953EqUTY56666CDXGH8953EqUTYLOT",
  "X-Content-Type-Options": "nosniff",
  "cache-control": "max-age=3153600",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1",
  "Expect-CT": "max-age=3600, enforce",
};

export const statuses: [string, string][] = [
  ["Active", "Active"],
  ["Inactive", "Inactive"],
];

export const conditions: [string, string][] = [
  ["Active", "Active"],
  ["Under Repair", "Repair"],
  ["Damaged", "Damaged"],
  ["Lost", "Lost"],
];

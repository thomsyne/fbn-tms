export const AuthRoutes = {
  login: "auth/login",
  emailVerification: "auth/email-verification",
  qrPage: "auth/qr-page",
};

export const AppRoutes = {
  dashboard: "dashboard",
  merchants: "merchants",
  createMerchant: "merchants/create",
  terminals: "terminals",
  createTerminal: "terminals/create",
  rolesList: "users/roles",
  usersList: "users",
  unverifiedUsers: "users/unverified",
};

export const AuthServiceRoutes = {
  login: "usermanager/login",
};

export const UserServiceRoutes = {
  getAllUsers: "usermanager/getUserMasterList",
  getUserProfileRoles: "userProfileRoles/getUserProfileRoles",
  addUser: "usermanager/saveuser",
  getUserById: "usermanager/getUserDetails",
  getUnverifiedUsers: "usermanager/getunverifyusers",
  authorizeUsers: "usermanager/authorizeUser",
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

export const RolePermssionServiceRoutes = {
  getRolePermissions: "rolePermission/roles",
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

export const verifyOptions: [string, string][] = [
  ["Approve", "A"],
  ["Reject", "R"],
];

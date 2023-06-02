export interface User {
  id: number;
  username: string;
  fullname: string;
  role: string;
  email: string;
  branchCode: string;
  firstname?: string;
  lastname?: string;
  address?: string;
  supervisor?: string;
  createdDate?: string;
  middlename?: string;
  password?: string;
  entityCode?: string;
  mobileNo?: string;
  userRole?: string;
  status?: string;
  language?: string;
  country?: string;
  commonId?: any;
  isChecked?: boolean;
}

export interface UserProfileRole {
  id: number;
  username: string;
  entityCode: string;
  roleCode: string;
  status: string;
}

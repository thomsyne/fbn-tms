export interface LookupDataObject {
    id: number,
    categoryCode: string,
    lookupCode: string,
    lookupName: string,
    lookupDesc: string,
    usageAccess: string,
    status: string,
    entityCode: string,
    countryCode: string
}

export interface RolePermission {
    id: number,
    roleName: string,
    roleDescription: string,
    roleCode: string,
    delFlg: string,
    createdDate: string,
    roleScope: string,
    status: string
  }
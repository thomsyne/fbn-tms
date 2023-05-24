export interface UserDetails {
    userRole: string,
    firstName: string,
    lastName: string
}

export interface LoginDetailsObject {
    channelType: string,
    entityCode: string,
    username: string,
    password: string,
    refreshToken: string,
    language: string,
    deviceId: string
}

export interface LoggedInUserObject {
    userDetails: any,
    userRole: string,
    firstName: string,
    lastName: string

    username: string,
    userID: string,
    pwd: string,
    entityCode: string,
    entityName: string,
    entityLogo: string,
    entityStyle: string,
    language: string,
    entityType: string,
    retryNo: number,
    ticketID: string,
    medium: string,
    deviceID: string,
    responseMessage: string,
    responseCode: string,
    fullname: string,
    email: string,
    mobileNo: string,
    lastLoginDate: string,
    photoLinks: string,
    firstname: string,
    branchName: string,
    branchID: string,
    ccy: string,
    country: string,
    supervisor: string,
    expiryDate: string,
    terminalId: string,
    forcePwdChange: string,
    address: string,
    userRoles: any,
    userPermissionList: any[],
    refreshToken: string
 }
  export interface TableDataResponse<T> {
    data: {
        content: T[];
        pageable: string,
        totalElements: number,
        totalPages: number,
        last: boolean,
        numberOfElements: number,
        size: number,
        number: number,
        first: boolean,
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        empty: boolean
    },
    error: any,
    status: string,
    statusCode: number
  }


  export interface ApiResponse<T> {
    data: T,
    error: any,
    status: string,
    statusCode: number
  }
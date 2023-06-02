export interface OTPModel {
    otp: string,
    comment: string
}

export interface BulkUpdateModel {
    id: number,
    referenceNo: string,
    requestType: string,
    verifyStatus: string,
    comment: string
}
export interface BaseResponse {
    token?: string;
}

export interface LoginResponse extends BaseResponse {
    username: string;
    role: string;
}

export interface LoginDataTypeCheck{
   userName:string;
   password:string;
}

export interface GetLoginDataTypeCheck{
    responseData?:LoginDataTypeCheck[];
    success:boolean;
    message?:string
}
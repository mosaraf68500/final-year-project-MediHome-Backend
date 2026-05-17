import { Response } from 'express';
import { Request } from 'express';
import catchAsyn from "../../shared/CatchAsync";
import { AuthService } from './auth.service';
import { sendResponse } from '../../shared/sendResponse';
import status from 'http-status';

const registerPatient = catchAsyn(async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await AuthService.registerPatient(payload);

    sendResponse(res,{
        httpStatusCode:status.OK,
        success:true,
        message:"patient registered successfully ",
        data:result
    })
    
});



const LoginUser =catchAsyn(
    async (req : Request, res : Response)=>{
        const payload = req.body;
        const result =await AuthService.loginUser(payload);

        sendResponse(res,{
            httpStatusCode: status.CREATED,
            success:true,
            message:"User logged in Successfully",
            data : result
        })
    }
)

export const AuthController={
    registerPatient,
    LoginUser
}
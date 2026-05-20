import { Request, Response } from "express";
import catchAsyn from "../../shared/CatchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

const createDoctor =catchAsyn(
  async (req:Request,res:Response)=>{
    
    const Payload = req.body;

    const Result = await UserService.createDoctor(Payload);

    sendResponse(res,{
      httpStatusCode:status.CREATED,
      success:true,
      message:"doctor created successfully",
      data:Result
    })
  }
)




const UserController = {
    createDoctor
};

export default UserController;
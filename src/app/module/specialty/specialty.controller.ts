import {  Request,  Response } from "express";
import { SpecialtyService } from "./specialty.service";
import catchAsyn from "../../shared/CatchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createSpecialty = catchAsyn(
  async (req:Request,res:Response)=>{
    
    const Payload = req.body;

    const Result = await SpecialtyService.createSpecialty(Payload);

    sendResponse(res,{
      httpStatusCode:201,
      success:true,
      message:"specialty created successfully",
      data:Result
    })
  }
)

const getAllSpecialty = catchAsyn(
  async(req:Request,res:Response)=>{
    const specialties = await SpecialtyService.getAllSpecialties();
    sendResponse(res, {
      httpStatusCode: 200,
      success: true,
      message: 'specialties fetched successfully',
      data: specialties,
    });
  }
)

const deleteSpecialties= catchAsyn(
  async(req:Request,res:Response)=>{
    const {id}=req.params;

const result=await SpecialtyService.deleteSpecialty(id as string);
sendResponse(res,{
  httpStatusCode:200,
   success:true,
    message:'specialties deleted successfully',
    data:result 
})
  }
)


const updateSpecialties=catchAsyn(
  async(req:Request, res:Response)=>{

        const {id}=req.params;
        const Payload=req.body;
       const result=await SpecialtyService.updateSpecialties(id as string,Payload);
        sendResponse(res,{
          httpStatusCode:200,
          success:true,
            message:"updated specialties successfully",
            data:result
        })
  }
)

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialties,
  updateSpecialties
};

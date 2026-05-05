import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const Payload = req.body;

    const Result = await SpecialtyService.createSpecialty(Payload);

    res.status(201).json({
      success: true,
      message: "specialty created successfully",
      data: Result,
    });
  } catch (error: unknown) {
    console.error(error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : JSON.stringify(error);

    res.status(500).json({
      success: false,
      message: "failed to create specialty",
      error: errorMessage,
    });
  }
};



const getAllSpecialty = async (req: Request, res: Response) => {
  try {
    const specialties = await SpecialtyService.getAllSpecialties();
    res.status(200).json({
      success: true,
      message: 'specialties fetched successfully',
      data: specialties,
    });
  } catch (error: unknown) {
    console.error(error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : JSON.stringify(error);

    res.status(500).json({
      success: false,
      message: 'failed to fetch specialties',
      error: errorMessage,
    });
  }
};

const deleteSpecialties=async(req:Request,res:Response)=>{

    try{
const {id}=req.params;

const result=await SpecialtyService.deleteSpecialty(id as string);
res.status(200).json({
    success:true,
    message:'specialties deleted successfully',
    data:result 
})

    }catch(error:unknown){

        console.log(error)

        const errorMessage =
          error instanceof Error
            ? error.message
            : typeof error === "string"
              ? error
              : JSON.stringify(error);

        res.status(500).json({
            success:false,
            message:'failed to delete',
            error:errorMessage
        })
    }

}


const updateSpecialties=async (req:Request,res:Response)=>{
    try{

        const {id}=req.params;
        const Payload=req.body;
       const result=await SpecialtyService.updateSpecialties(id as string,Payload);
        res.status(200).json({
            success:true,
            message:"updated specialties successfully",
            data:result
        })

    }

    catch(error: unknown){
        console.log(error);

        const errorMessage =
          error instanceof Error
            ? error.message
            : typeof error === "string"
              ? error
              : JSON.stringify(error);

        res.status(500).json({
            success:false,
            message:'updated failed specialties',
            error: errorMessage
        })
    }

}


export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  deleteSpecialties,
  updateSpecialties
};

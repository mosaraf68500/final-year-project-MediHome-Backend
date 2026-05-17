import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsyn=(fn:RequestHandler)=>{
   
return async(req:Request,res:Response,next:NextFunction)=>{
  try{
await fn(req,res,next);


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
      message: 'failed to fetch ',
      error: errorMessage,
    });
  }
}


}

export default catchAsyn;
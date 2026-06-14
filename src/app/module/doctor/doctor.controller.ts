import { Request, Response } from "express";
import catchAsyn from "../../shared/CatchAsync";
import { DoctorService } from "./doctor.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

// Get all doctors
const getAllDoctors = catchAsyn(
    async (req: Request, res: Response) => {
        const result = await DoctorService.getAllDoctors();
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctors fetched successfully!",
            data: result
        });
    }
);

// Get single doctor by ID
const getDoctorById = catchAsyn(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await DoctorService.getDoctorById(id as string);
        
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctor fetched successfully!",
            data: result
        });
    }
);

// Update doctor
const updateDoctor = catchAsyn(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const payload = req.body;
        const result = await DoctorService.updateDoctor(id as string, payload);
        
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctor updated successfully!",
            data: result
        });
    }
);

// Delete doctor
const deleteDoctor = catchAsyn(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await DoctorService.deleteDoctor(id as string);
        
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctor deleted successfully!",
            data: result
        });
    }
);

export const DoctorController = {
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
};
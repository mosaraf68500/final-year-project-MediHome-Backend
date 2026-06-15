import { Request, Response, Router, NextFunction } from 'express';
import UserController from "./user.controller";
import z from 'zod';
import { Gender } from '../../../generated/prisma/enums';

const createDoctorZodSchema = z.object({
    password: z.string().min(6,"Password must be at least 6 characters long").max(20,"Password must be less than 20 characters long"),
    doctor: z.object({
        name: z.string().min(6,"Name must be at least 6 characters long").max(50,"Name must be less than 50 characters long"),
        email: z.string().email("email is required"),
        contactNumber: z.string().min(11,"contact number must be at least 11 characters long").max(14,"contact number must be less than 15 characters long"),
        address: z.string().min(10,"address must be at least 10 characters long").max(100,"address must be less than 100 characters long"),
        
        // টাইপো ঠিক করা হলো: registratoinNumber -> registrationNumber
        registrationNumber: z.string().nonempty("registration number is required"),  
        
        experience: z.number().int().nonnegative("experience must be a non-negative integer"),
        gender: z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER]),
        
        appointmentFee: z.number().nonnegative("appointment fee must be a non-negative number"),

        qualification: z.string().min(2,"qualification must be at least 2 characters long").max(50,"qualification must be less than 50 characters long"),
        currentWorkingPlace: z.string().min(2,"current working place must be at least 2 characters long").max(50,"current working place must be less than 50 characters long"),
        designation: z.string().min(2,"designation must be at least 2 characters long").max(50,"designation must be less than 50 characters long"),
    }),

    // নাম পরিবর্তন করে ইন্টারফেসের সাথে মিলানো হলো: doctorSpecialties -> Specialties
    Specialties: z.array(z.uuid(),"specialties must be an array").min(1,"specialty must be at least 1 required"),
})

const router = Router();

router.post("/create-doctor", (req: Request, res: Response, next: NextFunction) => { 
   
    const parseResult = createDoctorZodSchema.safeParse(req.body);

    if (!parseResult.success) {
       // return যোগ করা হয়েছে যাতে এরর হলে এখানেই কোড থেমে যায়
       return next(parseResult.error);
    }

   req.body = parseResult.data;
   next();

}, UserController.createDoctor);

export const UserRouters = router;
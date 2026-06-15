
import UserController from "./user.controller";
import { validateRequest } from '../../middleware/validateRequest';
import { Router } from "express";
import { createDoctorZodSchema } from "./user.validation";
const router = Router();
router.post("/create-doctor", validateRequest(createDoctorZodSchema), UserController.createDoctor);
export const UserRouters = router;
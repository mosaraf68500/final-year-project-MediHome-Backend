import { Router } from "express";
import { DoctorController } from "./doctor.controller";

const router = Router();

// Get all doctors
router.get("/", DoctorController.getAllDoctors);

// Get single doctor by ID
router.get("/:id", DoctorController.getDoctorById);

// Update doctor information by ID
router.patch("/:id", DoctorController.updateDoctor);

// Delete doctor by ID
router.delete("/:id", DoctorController.deleteDoctor);

export const DoctorRoutes = router;
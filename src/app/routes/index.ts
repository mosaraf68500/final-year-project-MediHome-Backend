import { Router } from "express";
import { SpecialtyRouter } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";

const router =Router();


router.use('/auth',AuthRoutes)
router.use('/specialities',SpecialtyRouter)

export const IndexRoutes=router;
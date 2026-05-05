import { Router } from "express";
import { SpecialtyRouter } from "../module/specialty.route";

const router =Router();

router.use('/specialities',SpecialtyRouter)

export const IndexRoutes=router;
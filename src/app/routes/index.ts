import { Router } from "express";
import { SpecialtyRouter } from "../module/specialty/specialty.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { UserRouters } from "../module/user/user.route";

const router =Router();


router.use('/auth',AuthRoutes)
router.use('/specialities',SpecialtyRouter)

router.use('/users',UserRouters);

export const IndexRoutes=router;
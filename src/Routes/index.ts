import {Router} from "express";

import UserRoute from "./UserRoute";
import FirstSectionRoute from "./FirstSectionRoute";

const router = Router();

router.use('/user', UserRoute);
router.use('/first_section', FirstSectionRoute)

export default router
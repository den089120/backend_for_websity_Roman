import {Router} from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.get('/auth', UserController.check);

export default router
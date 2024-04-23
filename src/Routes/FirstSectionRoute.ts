import {Router} from "express";
import FirstSectionController from "../controllers/FirstSectionController";

const router = Router();

router.post('/add', FirstSectionController.reg);
router.get('/all', FirstSectionController.all);
router.get('/:id', FirstSectionController.one);
router.delete('/delete:id', FirstSectionController.delete)

export default router
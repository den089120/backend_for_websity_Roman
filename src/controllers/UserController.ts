import {NextFunction, Request, Response} from "express";
import {typeUserController} from "./typeControllers";
import ApiError from "../error/ApiError";

class UserController implements typeUserController {
    async registration (req: Request, res: Response): Promise<void | NextFunction | Response<any, Record<string, any>>> {

    }
    async login (req: Request, res: Response): Promise<void | NextFunction | Response<any, Record<string, any>>> {

    }
    async check (req: Request, res: Response, next:  NextFunction): Promise<void | NextFunction | Response<any, Record<string, any>>> {
        const {id} = req.query
        if(!id) {
            return  next(ApiError.badRequest('не задан id'))
        }
        res.json(id)
    }
}

export default new UserController();

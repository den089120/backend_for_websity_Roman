import ApiError from "../error/ApiError";
import {Request, Response, NextFunction } from 'express';

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
}
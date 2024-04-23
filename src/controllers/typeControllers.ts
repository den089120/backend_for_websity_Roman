import {Request, Response, NextFunction} from "express";

export interface typeUserController {
    registration: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
    login: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
    check: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
}

export interface typeFirstSectionController {
    reg: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
    all: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
    one: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response, next:  NextFunction) => Promise<void | NextFunction | Response<any, Record<string, any>>>;
}
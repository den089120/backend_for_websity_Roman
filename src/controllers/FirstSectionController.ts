import {Request, Response} from "express";
import {typeFirstSectionController} from "./typeControllers";
import {FirstSection} from "../models/models";

class FirstSectionController implements typeFirstSectionController {
    async reg (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        const {title, content} = req.body
        const firstSection = await FirstSection.create({title, content})
        return  res.json(firstSection)
    }
    async all (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        const FirstSections = await FirstSection.findAll()
        return res.json(FirstSections)
    }
    async one (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {

    }
    async delete (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        // const {id} = req.query
        // if(id) {
        //     await FirstSection.destroy({
        //         where: {
        //             id: parseInt(id)
        //         }
        //     })
        // }
    }
}

export default new FirstSectionController()
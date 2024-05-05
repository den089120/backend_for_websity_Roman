import {Request, Response} from "express";
import {typeFirstSectionController} from "./typeControllers";
import {FirstSection} from "../models/models";
import {where} from "sequelize";

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
        const {id} = req.query
        if (id && typeof (id) === "string") {
            const FirstSections = await FirstSection.findOne({ where: {id: parseInt(id)} })
            return res.json(FirstSections)
        }

    }
    async update (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        const {title, content} = req.body
        const {id} = req.query
        if(id && typeof (id) === "string") {
            const a: number = await FirstSection.update(
                {id: parseInt(id)},
                {
                    where: {
                        title: title.toString(),
                        content: content.toString()
                    },
                },)
        }
        const firstSection = await FirstSection.create({title, content})
        return  res.json(firstSection)
    }
    async delete (req: Request, res: Response): Promise<void | Response<any, Record<string, any>>> {
        const {id} = req.query
        let ind = 0
        if(id && typeof (id) === "string") {
            ind = await FirstSection.destroy({
                where: {
                    id: parseInt(id)
                }
            })
        }
        return res.json(ind)
    }
}

export default new FirstSectionController()
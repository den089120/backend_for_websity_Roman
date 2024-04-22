import {UserAttributes, FirstSectionAttributes, Role} from "./typeModels";
import {db} from "../db";
import {DataTypes, ModelDefined} from 'sequelize'

export const User: ModelDefined<UserAttributes, any> = db.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: Role.USER
        }
    },
    {
        tableName: 'Users'
    }
)

export const FirstSection: ModelDefined<FirstSectionAttributes, any> = db.define(
    'FirstSection',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'FirstSections'
    }
)

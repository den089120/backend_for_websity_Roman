import {Sequelize} from "sequelize";
import 'dotenv/config'

export const db = new Sequelize(
    process.env.DB_NAME = 'websity_roman',
    process.env.DB_USER = 'root',
    process.env.DB_PASSWORD = '1234',
    {
        dialect: "mysql",
        host: process.env.DB_HOST = 'localhost',
        port: 3306
    }
)
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import {db} from "./db";
import {User, FirstSection} from "./models/models";

const app: Application = express();
const port = process.env.PORT || 8000;


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

const start = async () =>{
    try {
        await db.authenticate()
        await User.sync()
        await FirstSection.sync()
        // await db.sync()
        app.listen(port, () => {
            console.log(`Server is Fire at http://localhost:${port}`);
        });
    } catch (e) {
        
    }
}

start().then()

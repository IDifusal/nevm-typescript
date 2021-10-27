import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
import routes from "./routes/index";
import path from 'path'
//Routes
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use('/api',routes);
app.use(express.static(path.join(__dirname,'..','..','dist')));


export default app
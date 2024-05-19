import express from "express";
import {dirname} from "path";
import path from "path"
import { fileURLToPath } from "url";
const pathName=fileURLToPath(import.meta.url);
const __dirname=dirname(pathName);

let app=express();
let port=3000;

app.use(express.static(path.join(__dirname,"..",'build')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'build','index.html'));
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
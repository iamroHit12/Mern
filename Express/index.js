const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Routes = require("./Router")


const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(Routes)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
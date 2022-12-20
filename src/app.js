const express = require("express");
const path = require("path")
const app = express()
console.log(__dirname)

let publicPath = path.join(__dirname,"../public")
console.log(publicPath)


app.get("/", (req, res)=>{
    res.send("hello from the express")
})

app.get("/about", (req,res)=>{
    res.send("hello from the about page")
})

//built in middleware
app.use(express.static(publicPath))  //to serve the static page 

app.listen(8000,()=>{
    console.log("listening to port 8000")
})
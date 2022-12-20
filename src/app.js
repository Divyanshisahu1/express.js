const express = require("express");
const path = require("path")
const app = express()
const hbs = require("hbs")
// console.log(__dirname)

// let publicPath = path.join(__dirname,"../public")
// console.log(publicPath)

// let templatePath = path.join(__dirname,"../template")
let templatePath = path.join(__dirname,"../template/views")
let partialPath = path.join(__dirname,"../template/partials")
hbs.registerPartials(partialPath)

app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req,res)=>{
    res.render("index",{
        designation:"Software Developer"
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        likes:"Momos"
    })
})


app.get("/", (req, res)=>{
    res.send("hello from the express")
})

app.get("/about", (req,res)=>{
    res.send("hello from the about page")
})

app.get("/about/*", (req,res)=>{
    res.render("404",{
        errorComment:" this about does not exist"
    })
})
app.get("*", (req,res)=>{
    res.render("404", {
        errorComment:"oops page not found"
    })
})



//built in middleware
// app.use(express.static(publicPath))  //to serve the static page 

app.listen(8000,()=>{
    console.log("listening to port 8000")
})
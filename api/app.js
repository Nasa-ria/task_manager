// requiring express,cors,express-ejs-layouts
const express =require('express')
const cors = require("cors");
require('dotenv').config();
app = express()



//  *********middleware***
//   mounting static files note .use indicate its a middleware
app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// allows restricted acces
app.use(cors())



// **** view setting
// seting variables for views.*set layout  is for rendering views

// engine
// app.set("view engine","ejs")

// requiring approute
const route = require("./src/routes/taskRoutes")
app.use('/api/tasks',route)

// port
const PORT= process.env.PORT|8001
app.listen(PORT ,()=>{
    console.log(`Port is listening on  port ${PORT}`)
})
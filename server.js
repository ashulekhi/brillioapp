const Express = require("express")
const Mongoose = require("mongoose")
const path   = require("path")
const cors = require("cors")
const fs = require("fs")
const server = Express()
const bodyparser = require("body-parser")
const Port =  5000
const dburl = "mongodb://localhost:27017/brilliodb1"
const databaseUrl = "mongodb+srv://ashu_lekhi1:test12345@cluster0.w5ixg.mongodb.net/apifromashu"


const corsOptions = {
    exposedHeaders: 'Authorization',
  };
server.use(cors(corsOptions))
// server.use(function(req, res, next) {
    
//     next();
//   });
server.use(Express.static(path.resolve(__dirname,"./build")))
server.use(bodyparser())
server.use('/user', require("./user"))
server.use('/video', require("./video"))


server.get("/*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./build/index.html"))
})


server.listen( Port ,function(){
    Mongoose.connect(databaseUrl,function(error,client){
        if(error){
            console.log("Error in connecting to database", error)
        }
        else{
            console.log("Connected to database")
        }
    })
    console.log("....... serever is listening on" , Port)

})

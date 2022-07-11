const express = require("express");
const bodyParser=require("body-parser")
const app = express();
//Static Files
app.use(express.static("public"))
app.use("/css",express.static(__dirname+"public/css"))
app.use("/img",express.static(__dirname+"public/css"))
app.use("/js",express.static(__dirname+"public/css"))

//Templating Engine
app.set("views","./src/views")
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))
//Routes

const newsRouter=require("./src/routes/news")
app.use("/",newsRouter)
app.use("/article",newsRouter)


const port = 5000;
app.listen(port, () => {
  console.log("Listening on port 5000");
});

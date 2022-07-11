const express=require("express");
const newsRouter=express.Router();

const axios=require("axios")


newsRouter.get("",async(req,res)=>{
try {
    const newsApi=await axios.get("https://raddy.dev/wp-json/wp/v2/posts")
    res.render("news",{ articles:newsApi.data})
    console.log(newsApi)
} catch (error) {
 if(error.response){
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
 }else if(error.request){
    console.log(error.request)
 }else{
    console.log("ERROR",err.message)
 }
}

});


module.exports=newsRouter;
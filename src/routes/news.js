const express=require("express");
const newsRouter=express.Router();

const axios=require("axios")


newsRouter.get("",async(req,res)=>{
try {
    const newsApi=await axios.get("https://raddy.dev/wp-json/wp/v2/posts")
    res.render("news",{ articles : newsApi.data })
} catch (error) {
 if(error.response){
   res.render("news",{ articles : null })

    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
 }else if(error.request){
   res.render("news",{ articles : null })

    console.log(error.request)
   res.render("news",{ articles : null })
 }else{
   res.render("news",{ articles : null })

    console.log("ERROR",err.message)
 }
}

});


module.exports=newsRouter;
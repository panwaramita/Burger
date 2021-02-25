const express=require('express');
const burger=require('../models/burger');
const router=express.Router();
const PORT=process.env.PORT || 8080;
const app=express();
app.listen(PORT);
//select all the values from the burger table
router.get("/",function(req,res)
{
    try
    {
    return burger.selectAll("burger").then(function(data)
    {
        //console.log(data);
        var hbsObject = {
            burger: data
          };
        res.render("index",hbsObject);
    });
}
    catch
    {

    }
});
//insert a new burger in to the burger table
router.post("/api/burger",function(req,res){
    try
    {
    return burger.insertOne("burger",req.body.name,true).then(function(data)
    {
        console.log(data);
    });
}
    catch
    {

    }
});
//update the burger Devour value to false
router.put("/api/burger/:id",function(req,res){
    try
    {
    return burger.updateOne("burger",false,req.params.id).then(function(data)
    {
        console.log(data);
    });
}
    catch
    {

    }
});
module.exports=router;
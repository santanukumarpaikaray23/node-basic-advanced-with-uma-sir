var express= require ('express')
var app = express();
var port =9000
  
app.get('/',function(req,res){
    res.send("Hii from express")
})
app.get('/city',function(req,res){
    res.send("city all pages")
})
app.get('/city/details',function(req,res){
    res.send("cityDetails")
})
app.get('/hotel',function(req,res){
    res.send("hotel pages")
})
app.get('/hotel/details',function(req,res){
    res.send("hotelDetails")
})
app.listen(port,function(err){
    if(err)throw err;
    else{
        console.log("Server is running on port"+port)
    }

})

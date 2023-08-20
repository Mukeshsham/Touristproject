var express = require("express");
var cors = require("cors");
const { ObjectId } = require("mongodb");
var app = express();
var MongoClient = require('mongodb').MongoClient;
app.use(cors())
app.use(express.json())

app.get("/getTouristplaces",async(req,res)=>{
 
            let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/TouristPlaces")//url of mongodb server
            // let countrynameFromRequest=req.query.country;
            let dbconnection = await connection.db("TouristPlaces");
             let documentlist = await dbconnection.collection("places").find({}).toArray();//to get the document from the file
             console.log(documentlist);
             //need to convert json object  to string response
             res.setHeader('content-type','application/json');
             res.write(JSON.stringify(documentlist));//invalid arg type 
             res.end();

});
app.get("/getTouristplace",async(req,res)=>{
 
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/TouristPlaces")
    let dbconnection = await connection.db("TouristPlaces");
    let countrynameFromRequest = req.query.country;
    console.log(countrynameFromRequest);
    let documentlist = await dbconnection.collection("places").find({"country":countrynameFromRequest}).toArray();
    console.log(documentlist);
    res.setHeader('content-type','application/json');
    res.write(JSON.stringify(documentlist));
    res.end();


});

app.post("/CreateTouristPlaces",async(req,res)=>{
    let body =req['body'];
    let connection = await MongoClient.connect ("mongodb://127.0.0.1:27017/TouristPlaces")
    let dbconnection = await connection.db("TouristPlaces")
    let data ={
    "country":body['country'],
    "placename" :body['placename'],
    "discription": body['discription']
    }
    await dbconnection.collection ("places").insertOne(data);
    res.setHeader ('content-type', 'application/json');
    res.write(JSON.stringify({"message":"create successful"})),
    res.end();


});


app.post("/update_desc",async(req,res)=>{
    let req_body =req['body'];
    let id =req_body['id'];
    let des =req_body['des'];
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/TouristPlaces")
    let dbconnection = await connection.db("TouristPlaces");
    console.log(des);
    await dbconnection.collection ("places").updateOne({'_id':new ObjectId(id)},
    {$set:{'discription':des}});
    res.setHeader ('content-type', 'application/json');
    res.write(JSON.stringify({"message":"update successful"})),
    res.end();
});
 

app.post("/delete",async(req,res)=>{
    let req_body =req['body'];
    let id =req_body['body'];
    let connection = await MongoClient.connect("mongodb://127.0.0.1:27017/TouristPlaces")
    let dbconnection = await connection.db("TouristPlaces");
    await dbconnection.collaction ("places").deleteOne({'_id':new ObjectId(id)});
    res.setHeader ('content-type', 'application/json');
    res.write(JSON.stringify({"message":"delete successful"})),
    res.end();

    

});



    








app.listen(8080,function(){
    console.log("started");
})
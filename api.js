const express=require('express')
const dbConnect =require('./mongodb');
const app=express();
const {ObjectId}=require('mongodb');
app.use(express.json());
app.get('/',async (req,resp)=>{
    let data=await dbConnect();
    data = await data.find({}).toArray();
    //console.log(data);
    resp.send(data);
})
app.post('/',async (req,resp)=>{
    let data=await dbConnect();
    //resp.send(req.body);
    let result = await data.insertOne(req.body);
    console.log(req.body);
    resp.send(result);
})
app.put('/:name',async (req,resp)=>{
    let data=await dbConnect();
    let result= await data.updateOne(
        // {name:'samsung 21'},
        // {$set:{price:10000}}
        // {name:req.body.name},
        // {$set:req.body}
        {name:req.params.name},
        {$set:req.body}

    );
    console.log(req.body);
    resp.send(result);
})
app.delete('/:id',async (req,resp)=>{
    console.log(req.params.id);
    let data=await dbConnect();
    let result=await data.deleteOne({_id:new ObjectId(req.params.id)});
    resp.send(result);
})
app.listen(8000);
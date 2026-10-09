const dbConnect=require('./mongodb');
const update=async()=>{
    let data=await dbConnect();
    let result = await data.updateOne(
        {name:'samsung s23'},{
            $set:{name:'max-pro 5'}
        }
    );
    console.warn(result);
}
update();
const dbConnect = require('./mongodb');
const insert= async ()=>{
    const db=await dbConnect();
    const result =await db.insertMany([
        {name:'vivo',brand:'redmi',price:45000},
        {name:'pogo',brand:'redmi-9',price:5000},
        {name:'realme',brand:'redmi',price:40000}
    ]
    );

    //console.log(result);
    if(result.acknowledged){
        console.log("data inserted");
    }


}
insert();
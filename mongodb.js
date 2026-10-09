const {MongoClient} = require('mongodb');
// const MongoClient =  require('mongodb').MongoClient;
const url="mongodb://localhost:27017"
const database= 'make' ;
const client = new MongoClient(url); // fetch a data store in client
// async function getData(){
//     let result = await client.connect();
//     let db=result.db(database);
//     let collection =db.collection('made');
//     //let response =  await collection.find({}).toArray();
//     let response =  await collection.find({name:'iphone'}).toArray();
//     console.log(response);
// }
// getData();
async function dbConnect(){
    let result = await client.connect();
    let db=result.db(database);
    return db.collection('made');
}
module.exports = dbConnect;
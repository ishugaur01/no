// console.log("hello world");
// let a=10;
// let b=20;
// let c=a+b;
// console.log(c);
// let arr=[4,1,2,6,2,9,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//     process.stdout.write(sum+" ");
//     console.log();
//     process.stdout.write(arr[i]+" "+i);
// }
// console.log(sum);
// console.log();
// let n=5;
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         process.stdout.write("*"+" ");

//     }
//     console.log();
// }
// console.log("triangle");
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let j=0;j<i;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }
// console.log("parallelogram");
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let j=0;j<n;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }
// console.log("hollow parallelogram");
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         process.stdout.write(" ");

//     }
//     for(let j=0;j<n;j++){
//         if(i==0|| i==n-1 ||j==0|| j==n-1){
//             process.stdout.write("*");
//         }
//         else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }
// console.log("number triangle");
// let num=1;
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         process.stdout.write(" ");
//     }
//     let s=0;
//     for(let j=0;j<i;j++){
//         process.stdout.write(num+" ");
//         num++;
//         s+=num;
//     }
//     console.log(s);
//     console.log();
// }
// console.log("sorted array");
// let arr1=[3,2,1,4,5,6,3,2,8,9];
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]>arr[i+1]){
//         let temp=arr1[i];
//         arr1[i+1]=arr1[i];
//         arr1[i]=temp;
//     }
//     process.stdout.write(arr1[i]+" ");
// }
// console.log(__dirname);
// console.log(__filename);
// console.log();
// let number=100;
// if(number%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");

// }
// console.log();
// const fs=require('fs');
// fs.writeFileSync("Hello.js","a hello down a move today are so much");
// const http=require('http');
// http.createServer((req,resp)=>{
//     resp.write("hello world");
//     resp.end();
// }
// ).listen(4000);
// const colors=require('colors');
// console.log("hello world".green);
// console.log("hello gusy".red);
// setTimeout(()=>{
//     console.log("few things lated");
// },2000);
// let i=10;
// let j=20;
// setTimeout(()=>{
//      j=100;
// },2000);
// // let waitingdata=new promises((resolve,reject)=>{
// //     setTimeout(()=>{
// //         j=100
// //     },1000)
// // })
// // waitingdata.then((data)=>{
// //     let c=i+data;
// //     console.log(c);

// // })
// let arr4=[4,5,6,7,8];
// arr4.filter((i)=>{
//     console.log(i);

// })
// console.log("use filter".violet);
// // let result=arr4.filter((i)=>{
// //     return i;

// // })
// // console.log(result);
// let summ=0;
// arr4.forEach((i)=>{
//     summ+=i;
//     process.stdout.write(summ+" ");
//     process.stdout.write(i+" ");
// })
// console.log(summ);
// console.log();
// const express =require('express');
// const path=require('path');
// const app=express();
// const dir=path.join(__dirname,'common');
// app.get('/about',(req,resp)=>{
//     resp.send("<a href='/home'> go to home page </a>");
//     resp.end();
// })
// app.get('/home',(req,resp)=>{
//     resp.send(" a hello call home page"+req.query.name);
//     resp.end();
// })
// app.get('/help',(req,resp)=>{
//     // resp.send(" a hello call help page"+req.query.name);
//     resp.send(
//         [{
//         name:'ishu',
//         mob:8979,
//         email:'ishu@com'
//     },
//     {
//         name:'ishu',
//         mob:8979,
//         email:'ishu@com'
//     },
//     {
//         name:'ishu',
//         mob:8979,
//         email:'ishu@com'
//     },
//     {
//         name:'ishu',
//         mob:8979,
//         email:'ishu@com'
//     }
// ])
    
// });
// app.get('/content',(req,resp)=>{
//     //resp.send(" a hello call content page"+req.query.name);
//     //resp,send("<h1> welcome, to the world</h1>");
//     //resp.send("<input type='text' placeholder= 'enter your name'/>");
//     resp.send(`
//         <input type="text " placeholder="enter your name" value="${req.query.name}"/>
//         <button > click me</button>
//         `);
// })
// app.listen(4500);

// const api =express();
// const dirpath=path.join(__dirname,'common');
// //api.use(express.static(dirpath));
// api.get('/about',(req,resp)=>{
//     resp.sendFile(`${dirpath}/about.html`);
//     //resp.end();
// })
// api.get('/home',(req,resp)=>{
//     resp.sendFile(`${dirpath}/home.html`);
//     //resp.end();
// })
// api.get('/help',(req,resp)=>{
//     resp.sendFile(`${dirpath}/help.html`);
//     //resp.end();
// })
// api.get('/content',(req,resp)=>{
//     resp.sendFile(`${dirpath}/content.html`);
    
//  })
//  // page not found page
// //  api.get('/*slat',(req,resp)=>{
// //     resp.sendFile(`${dirpath}/pagenotfound.html`);
    
// //  })
// // extension remove kaise kare
// // template engine hai ejs ye dynamic page create karte hai
// // app.set('view engine','ejs')
// // api.get('/profile',(req,resp)=>{
// //     resp.render('profile');
// // })
// // api.get('/photo',(req,resp)=>{
// //     resp.render('photo');
// // })
// // api.get('/making',(req,resp)=>{
// //     resp.render('making');
// // })

// api.listen(5000);
// const appi=express();
// appi.set('view engine','ejs');
// appi.get('/profile',(req,resp)=>{
//     resp.render('profile');
// })
// appi.get('/photo',(req,resp)=>{
//     resp.render('photo');
// })
// appi.get('/making',(req,resp)=>{
//     const user={
//         name:'klrahul',
//         email:'klrahul@.com',
//         mob:908,
//         add:'bagpat',
//         skills:['php','java','js','html']
//     }
//     resp.render('making',{user});
// })
// appi.get('/login',(req,resp)=>{
//     resp.render('login');
// })
// appi.listen(3000);

// const apr=express();
// // const reqFilter = (req,resp,next)=>{
// //     if(!req.query.age){
// //         resp.send("please provide your age");
// //     }
// //     else if(req.query.age<18){
// //         resp.send("you can not access your page");
// //     }
// //     else{
// //         next;
// //     }
//   //  console.log('reqFilter');
//     //next();
//     // route level middleware single route pe bhi group pe bhi sarri route page route level middleware 
//     // applicateion middleware work on all application .

// //}
// //apr.use(reqFilter);
// const {reqFilter}=require('./middleware');
// const route=express.Router();
// route.use(reqFilter);

// apr.get('/world',(req,resp)=>{
//     resp.send('welcome to home page');
// })
// route.get('/word',(req,resp)=>{
//     resp.send('welcome to home page');
// })
// route.get('/wall',(req,resp)=>{
//     resp.send('welcome to home page');
// })
// apr.get('/universe',reqFilter,(req,resp)=>{
//     resp.send('welcome to the unverse page');
// })
// app.use('/',route);
// apr.get('/unique',reqFilter,(req,resp)=>{
//     resp.send("welcome to the unique page");
// })
// apr.listen(3500);
// const {MongoClient} = require('mongodb');
// // const MongoClient =  require('mongodb').MongoClient;
// const url="mongodb://localhost:27017"
// const database= 'make' ;
// const client = new MongoClient(url); // fetch a data store in client
// // async function getData(){
// //     let result = await client.connect();
// //     let db=result.db(database);
// //     let collection =db.collection('made');
// //     //let response =  await collection.find({}).toArray();
// //     let response =  await collection.find({name:'iphone'}).toArray();
// //     console.log(response);
// // }
// // // getData();
// async function dbConnect(){
//     let result = await client.connect();
//     let db=result.db(database);
//     return db.collection('made');
// }

// // dbConnect().then((resp)=>{
// //     resp.find().toArray().then((data)=>{
// //         console.warn(data);
// //     })
// // })
// // console.warn(dbConnect());
const dbConnect =require('./mongodb');
 const main=async()=>{
    let data= await dbConnect();
    data=await data.find().toArray();
    console.log(data);


}
main();



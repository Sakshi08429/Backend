//exporting express 
//it loads express module
require('dotenv').config()
const express=require('express')

//app represents express server
const app=express()

const port=process.env.PORT||4000
//handling get request
// "/"----->home route
app.get('/',(req,res)=>{
    res.send('Hello,World');
})


app.get('/twitter',(req,res)=>{
    res.send('Hello,Twitter ....');
})
//starts the server and makes it listen to incoming requests
// app.listen(port,()=>{
// console.log('Server is running on port 4000')
// });

//from env variable
app.listen(port,()=>{
console.log(`Server is running on port  ${port}`)
});

const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello");
})

// Implementation of all type of exports in backend application 
 
function defaulted(req,res){
    res.send("default export")
}

function named(req,res){
    res.send("named export")
}

module.exports = defaulted;
module.exports = {named};

const middleware1 = (req, res, next) => {
    console.log("this is middleware1");
    next()
}

const middleware2 = (req, res, next) => {
    console.log("this is midleware2");
    next()
}

app.use(middleware1)

app.get('/',(req, res) => {
    res.send("hello")
})
app.get('/home', (req,res) => {
    res.send("<h1>login page<h1>")
})

//.4

app.get("/addUser",(req,res)=>{
    console.log(req.query);
    res.send("success adduser");
})
app.put("/editUser/:Salary",(req,res) =>{
    console.log(req.params);
    res.send("success edituser");
})

app.listen(8000, () =>{
    console.log("server running succefully on 8000");
});

























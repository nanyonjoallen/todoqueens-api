 
//  const login = require('./login');
//  console.log(login);

const express = require('express');
//initialise express instance
const app = express();//import express

// respond with "hello world" when a GET request is made to the homepage
//res-response
//request
//declare an endpoint
app.use('/',(req,res, next)=> {
    //send method
    res.sendFile('hello world')
});


//listen and start the sever
app.listen(3000,() => console.log('sever port is 3000'))

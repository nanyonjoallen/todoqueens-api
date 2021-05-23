const express = require('express');
const bodyParser= require('body-parser');
//import routes
const reviewRoutes = require ('./routes/reviews.routes');

//create an express instance
const app = express();

//.use - calls middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());//data recoded form the form
app.use('/reviews', reviewRoutes.router);
app.use('/reviews', reviewRoutes.router);


//listen and start the sever
let port = 3000;
app.listen(3000,() => console.log('sever port is 3000'))


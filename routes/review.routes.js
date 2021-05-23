//import express router
const router = require('express').Router()

//import controllers
const reviewControllers = require ('../controllers/reviews.controllers');

//implement application routes/endpoints
 router.get('/',(req, res) => {
    let reviews = reviewControllers.fetchAllReviews();
    return res.json({reviews});
 });

 router.post('/add' review)
 

 module.exports = router;
 
//import the model
const { Review, Reviews} = require('../models/Review');


const fetchAllReviews =() =>{
    return Review.fetchReview(); 
}
const createReview = {review}{
    return Review.addReview(review)
}

module.exports ={
    fetchAllReviews
}
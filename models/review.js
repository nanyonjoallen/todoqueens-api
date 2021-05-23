
const Review =[]; //temporary database

class Review {
    //constructor-to initialise an object
    contructor() {};
        //static method is publicly accessible with a class
        static fetchReviews() {
            return reviews.length ? reviews: 'ro reviews added yet';
        };
        static addReview (review){
            return reviews.push(review);
        }
    }; 
    module.exports =(
        Review,
        reviews
    )

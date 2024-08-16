const express = require("express");
const router = express.Router({ mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview , isReviewAuthor } = require("../middleware.js");
const { isLoggedIn } = require("../middleware.js");
  
const reviewController = require("../controllers/reviews.js");

//Reviews
//Post Review route
router.post("/" , validateReview , isLoggedIn , wrapAsync(reviewController.createReview));
  
//Delete review route
router.delete("/:reviewId" , isLoggedIn , isReviewAuthor , wrapAsync(reviewController.destroyReview));

  module.exports = router ;
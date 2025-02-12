const instagramPosts = require("./instagram-posts.json");
// const hygraphHome = require("./hygraph-home.json");
const hygraphPosts = require("./hygraph-posts.json");
const hygraphTestimonials = require("./hygraph-testimonials.json");
const hygraphPortfolio = require("./hygraph-portfolio.json")
const hygraphAboutMe = require("./hygraph-aboutme.json")
const hygraphPowerphrases = require("./hygraph-powerphrases.json")
const hygraphAboutStudio = require("./hygraph-aboutstudio.json")
const hygraphMakeUp = require("./hygraph-makeup.json")
const hygraphHairstyles = require("./hygraph-hairstyles.json")
const hygraphProducts = require("./hygraph-products.json")

module.exports = () => ({
  instagramPosts,
  // hygraphHome,
  hygraphPosts,
  hygraphTestimonials,
  hygraphPortfolio,
  hygraphAboutMe,
  hygraphAboutStudio,
  hygraphMakeUp,
  hygraphHairstyles,
  hygraphPowerphrases,
  hygraphProducts
});

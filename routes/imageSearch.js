const express = require("express");
const axios = require("axios");
const imageSearchRoutes = express.Router();

imageSearchRoutes.route("/api/imageSearch")
  //----- Get images for search input
  .post((req, res) => {
    const { searchInput, page } = req.body;
    const endpoint = `https://image-search-abstraction-layer.freecodecamp.rocks/query/${searchInput}?page=${page}`;
    // Request for images
    axios.get(endpoint)
    .then(searchResults => {
      res.json({ searchResults: searchResults.data.images });
    })
    .catch(err => {
      console.log(err);
      res.json({ failed: true });
    });
  })
  //----- Get recent searches
  .get((req, res) => {
    // Request for recent searches
    axios.get("https://image-search-abstraction-layer.freecodecamp.rocks/recent/")
    .then(recentSearches => {
      res.json({ recentSearches: recentSearches.data });
    })
    .catch(err => {
      console.log(err);
      res.json({ failed: true });
    });
  });

module.exports = imageSearchRoutes;
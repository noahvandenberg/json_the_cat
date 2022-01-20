const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {

    if (error !== null) return callback(error);
    if (JSON.parse(body)[0] === undefined) return callback(`${breedName} not found`, undefined);
    return callback(undefined,JSON.parse(body)[0].description);

  });
  
};





module.exports = { fetchBreedDescription };
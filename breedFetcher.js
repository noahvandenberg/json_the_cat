const request = require('request');
const args = process.argv.slice('2');

request(`https://api.thecatapi.com/v1/breeds/search?name=${args[0]}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  if (error !== null) {
    console.log('Request Failed');
    return;
  }
  if (JSON.parse(body)[0] === undefined) {
    console.log('Breed not found');
    return;
  }
  console.log(JSON.parse(body)[0].description);
});
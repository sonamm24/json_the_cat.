  
const request = require('request');
 const Input = process.argv;
 const catbreedSearcher = function (){
   request(`https://api.thecatapi.com/v1/breeds/search?q=${Input[2]}`, (error, response, body) => {
     if(error){
       console.log( error); // Print the error if one occurred
     }
     else{
       const catbreedInfo = JSON.parse(body);
       console.log(catbreedInfo['0']['description']); // Print the HTML for the Google homepage.
     }
   });
 }
 catbreedSearcher();
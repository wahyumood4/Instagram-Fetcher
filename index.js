const axios = require('axios')
const qs = require('querystring')
const cheerio = require('cheerio');

function download(link){
var url = "https://sssinstagram.com/results";
const requestBody = {
id: link,
}
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
axios.post(url, qs.stringify(requestBody), config)
  .then((result) => {
    // Do somthing
let $ = cheerio.load(result.data);
let ig = [];

    $('div.button_div > a').each(function (i, e) {
        ig[i] = $(this).attr("href");
    });
console.log(ig)
return ig;
}
)        
  .catch((err) => {
console.log("something went wrong");
  })
}
exports.download = download;

/**
 * Created by Lyes CHIOUKH on 09/02/2016.
 */

require('./actors');
require('./series');

//if you include core module, you don't need to put path
//if you include your own module, you use './series'
/**
 * @description file system module
 */
var fileSystme = require('fs');

//read file system
console.log(fileSystme.readFileSync("series.js").toString());

/**
 * @description path module
 */
var path = require("path");
var myWebService = "localhost/location//here/index.html";

//normalize all url
console.log(path.normalize(myWebService));

//more functions
console.log(path.dirname(myWebService));
console.log(path.basename(myWebService));
console.log(path.extname(myWebService));

//calling function using time interval
setInterval(function () {
    console.log("call")
}, 2000);


//Some other functionality on nodejs
console.log(__dirname);
console.log(__filename);


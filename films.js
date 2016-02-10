/**
 * Created by Lyes CHIOUKH on 10/02/2016.
 */

//use this will return same object on each call
//module.exports = {
//    bestMovies: ""
//}

//use this will return new object on each call
module.exports = function() {
    return {
        bestMovies: ""
    }
};
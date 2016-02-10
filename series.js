/**
 * Created by Lyes CHIOUKH on 10/02/2016.
 */

var films = require('./films');
var filmsBest = films();
filmsBest.bestMovies = "Dexter";
console.log(filmsBest.bestMovies);
/**
 * Created by Lyes CHIOUKH on 09/02/2016.
 */

var films = require('./films');
var filmsBest  = films();
filmsBest.bestMovies = 'titanic';
console.log(filmsBest.bestMovies);

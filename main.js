/**
 * Created by Lyes CHIOUKH on 09/02/2016.
 */

/**
 * way to get external modules
 * @type {exports|module.exports}
 */
var actors = require('./actors');

//show console.log message
actors.printActor();
actors.printFilm();

console.log(actors.faveActor);
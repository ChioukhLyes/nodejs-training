/**
 * Created by Lyes CHIOUKH on 06/02/2016.
 */

/**
 * Create simple object
  * @type {{firstName: string, pseudo: string, sport: string}}
 */
var person = {
    firstName: "Lyes",
    pseudo: "Saviola",
    sport: "footBall"
}
//Print object to console
console.log(person);

/**
 * @name addNumber
 * @param a
 * @param b
 * @returns {*}
 */
function addNumber(a, b){
    return a + b;
}
//Print result to console
console.log(addNumber(6, 12));

/**
 * @name withoutReturn
 */
function withoutReturn(){
}
//Print to console : undefined
console.log(withoutReturn());

/**
 * @name printValue
 * @description anonymous function, you can use this function as attribute on another functions
 */
var printValue = function(){
    console.log("Training nodeJs project");
}
//this will print to console : "Training nodeJs project"
printValue();
//call function in 6 seconds
setTimeout(printValue, 6000);
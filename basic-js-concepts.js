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



//References to objects



/**
 * @name object
 * @type {{att1: string, att2: string}}
 */
var object = {
    att1: "hellow",
    att2: "world"
}
/**
 * @name person
 * @type {{att1: string, att2: string}}
 * @description copie of object
 */
var person = object;
//print "world"
console.log(person.att1);

person.att1 = "HELLOW";
//print "HELLOW", beacue we used a reference to object
console.log(object.att1);



//difference between == and ===



console.log(19 == "19"); // == compare the values - true
console.log(19 === "19");// === compare values and types - false (integer, string)



//Understand keyword 'this'


/**
 * @name object
 * @type {{printValue: object.printValue}}
 */
var object = {

    printValue: function(){
        console.log("The value is ");
        //will print true
        console.log(this === object);
    }
};

object.printValue();

//default calling context is global
function doSomething(){
    console.log(this === global);
}
doSomething();



//Prototype


/**
 * @name user
 * @constructor
 */
function User(){
    this.name = "";
    this.credit = 25;
    this.giveCredit = function giveCredit(player){
        player.credit += 1;
        console.log(this.name + " give credit to " + player.name);
    }
}

var lyes = new User();
var hichem = new User();

lyes.name = "Lyes";
hichem.name = "Hichem";

lyes.giveCredit(hichem);

console.log("Lyes " + lyes.credit);
console.log("hichem " + hichem.credit);

//adding code to user object using prototype
//this function can be accessed by lyes and hichem objetcs
User.prototype.transfert = function transfert(player){
    player.credit += 100;
}

lyes.transfert(hichem);

console.log("Lyes " + lyes.credit);
console.log("hichem " + hichem.credit);

//same for attribute
User.prototype.rib = "895-95-64";
console.log("Lyes rib " + lyes.rib);

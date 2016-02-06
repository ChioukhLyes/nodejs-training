/**
 * Created by Lyes CHIOUKH on 06/02/2016.
 */

/**
 * @name orderNumber
 * @param orderNumber
 * @description program endpoint
 */
function orderNumber(orderNumber){
    console.log("Customer order",orderNumber);
    /**
     * @name prepareCommand
     * @description a callback method
     */
    prepareCommand(function(){
        console.log("Delivered command order ", orderNumber);
    });
}

/**
 * @name prepareCommand
 * @description simulation service treatment
 * @param callback
 */
function prepareCommand(callback){
    setTimeout(callback, 3000);
}

/**
 * @description simulation customer request
 */
orderNumber(1);
orderNumber(2);
orderNumber(3);
orderNumber(4);
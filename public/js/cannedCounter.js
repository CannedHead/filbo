/*
 * d: Div ID
 * options: 
 *     initial: initial value, default:0
 *     end: final value
 *     inc: increment, default:1
 *     pace: time in ms
 *     auto: auto increment 
 */
var flipCounter = function(d, options){

  var defaults = {
    init:0,
    inc: 1,
    pace: 1000,
    value: 0,
    auto: true,
    places:0
  };

  var zeros=[], finalvalue=[];

  /* ====== Loads options to counter array ======*/
  var counter = options || {};
  var doc = window.document;

  for (var opt in defaults){
    counter[opt] = counter.hasOwnProperty(opt) ? counter[opt] : defaults[opt];
  }

  function init(){

    //Creates Array of numbers
    finalvalue = _toArray(counter.value);

    //Creates Array of zeros same size as final value
    zeros = Array.apply(null, Array(finalvalue.length)).map(Number.prototype.valueOf,0);

    console.log(finalvalue);
    console.log(zeros);

    drawCounter();
  }

  // Creates array of digits for easier manipulation
  function _toArray(input){
    
    var output = input.toString().split('').map(Number).reverse();
    return output;
  }

  function drawCounter(){
    
  }
  
  init();

};
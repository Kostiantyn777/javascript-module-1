  //Declare function
function numberChecker(num) {

  //Start conditional statement. If num parameter is greater  than 20 
  if (num > 20) {
    
    //Return this result
    return `${num} is greater than 20`;
    
    //Else If num parameter is equal  to 20 
  } else if (num === 20) {
    
    //Return this result
    return `${num} is equal to 20`;
    
    //Else If num parameter is less  than 20 
  } else if (num < 20) {
    
    //Return this result
    return `${num} is less than 20`;
  } else {
    
    //If all previous results are false. Return this one
    return `${num} isn't even a number :(`;
  }
}
console.log(numberChecker(44));

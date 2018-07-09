/* Return the factorial of the provided integer. 
If the integer is represented with the letter n, 
a factorial is the product of all positive integers less than or equal to n.
Only integers greater than or equal to zero will be supplied to the function.*/

function factorialize(num) {
    if(num === 0 || num === 1) {
      return 1;
    } else {
    for (let i = num - 1; i > 0; i--){
      num = num * i;
      }
      return num;
    }
  }
  
  factorialize(5);
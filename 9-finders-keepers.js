/* Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth test (second argument). 
If no element passes the test, return undefined. */

function findElement(arr, func) {
    // set num undefined by default
    let num;
    // loop through array
    for (let i = 0; i< arr.length; i++) {
        // check function which has arr[i] as a parameter
        if (func(arr[i])) { 
            num = arr[i];
            // return the first case and break the loop
            return num;
        }
    }
    return num;
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);

/* Additional solution:
function findElement(arr, func) {
    //filter array with the function provided
    filterArr = arr.filter(func);
    //return the first element that returns true, or undefined if no elements return true
    return filterArr[0]; 
}

// or use find() method:
function findElement(arr, func) {
    // returns the value of the first element in the array that satisfies the function
    return arr.find(func); 
}
*/
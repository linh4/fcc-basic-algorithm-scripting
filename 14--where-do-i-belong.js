/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
    The returned value should be a number. */

function getIndexToIns(arr, num) {
    // Push num to arr and sort in ascending order
    arr.push(num);
    arr.sort((a, b) => a - b);
    // return the index of the num in the arr
    return arr.indexOf(num);
}
getIndexToIns([2, 5, 10], 15);

/*Additional solution: 
function getIndexToIns(arr, num) {
    arr.sort((a,b) => a - b);
    for (let i = 0; i < arr.length; i++){
        if(num <= arr[i]){
            return i;  
    } 
  } return arr.length; 
}
*/
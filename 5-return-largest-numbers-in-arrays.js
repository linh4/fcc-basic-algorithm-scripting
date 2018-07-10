/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.*/


function largestOfFour(arr) {
    let result = [0,0,0,0];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > result[i]) {         
                result[i] = arr[i][j];
            }
        }
    }
    return result;
 }

 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

 /*
 function largestOfFour(arr) {
    let result = [];
    let biggest = arr[0][0];
    for (let i = 0; i< arr.length; i++) {
        for (let j = 0; j< arr[i].length; j++) {
            if(arr[i][j] > biggest) {
                biggest = arr[i][j]; 
            }
        }   
        result.push(biggest);
    }
    return result;
}
 */
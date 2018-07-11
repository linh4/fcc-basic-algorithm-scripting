/* Return true if the string in the first element of the array 
    contains all of the letters of the string in the second element of the array. */

function mutation(arr) {
    // set arr to lowercase
    let arr0 = arr[0].toLowerCase();
    let arr1 = arr[1].toLowerCase();
    for (let i = 0; i < arr1.length; i++) {
        // check index of the second string is found in the 1st string
        // index found will be false if = -1 or < 0
        if (arr0.indexOf(arr1[i]) === -1 ){
            return false;
        }
    }
    return true; //if they are all found, finish the loop and return true
}
    
mutation(["hello", "hey"]);
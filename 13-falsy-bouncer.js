/* Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
    let result = [];
    for (let i = 0; i<arr.length; i++) {
        // check arr[i] has true boolean,return value with true boolean
        if(arr[i]) {
        result.push(arr[i]);
        }
    }
    return result;
}
    
bouncer([7, "ate", "", false, 9]);

/*Additional solution 
function bouncer(arr) {
    return arr.filter(Boolean); //filter true boolean
}
*/
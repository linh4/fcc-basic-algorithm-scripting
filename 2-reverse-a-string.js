/* Reverse the provided string. Your result must be a string. */

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
}

reverseString("hello");


/*
function reverseString(str) {
    let strReverse = str.split('').reverse().join('');
    return strReverse;
}
*/
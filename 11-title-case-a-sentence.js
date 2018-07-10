/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        // loop through each index of the arr and make the first letter uppercase
        // slice: keep the rest of the words except the first letter
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
  
titleCase("I'm a little tea pot");

/* Additional solution:
function titleCase(str) {
    // use map method to return the callback function
    return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
*/
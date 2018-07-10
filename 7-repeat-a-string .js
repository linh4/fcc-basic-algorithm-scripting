/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. */


function repeatStringNumTimes(str, times) {
    let result = '';
    while (times > 0) {
      result += str;
      times--;
    }
    return result;
}

repeatStringNumTimes('abc', 3);

/*
times > 0 ? string.repeat(times) : "";
*/
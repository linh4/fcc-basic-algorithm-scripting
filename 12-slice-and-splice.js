/* You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    // create new array so arr2 won't change
    // using slice() method to copy arr2
    let newArr2 = arr2.slice(); //or use [...arr2]
    // splice method start from nth index
    // remove 0 index and insert arr1 into nth index
      newArr2.splice(n, 0, ...arr1);
    return newArr2;
}
  
frankenSplice([1, 2, 3], [4, 5], 1)
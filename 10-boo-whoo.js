/* Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false. */

function booWho(bool) {
    let result = (bool === true || bool === false) ? true : false;
        return result;
    }
      
booWho(false);

/* Additional solution:
    function booWho(bool) {
        return typeof bool === 'boolean';
}
*/


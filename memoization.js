/**
 * It's an optimization technique used to speed up programs by
 * storing the results of expensive functions calls
 */

//A memoized function of our add() function
const memoizedAdd = () => {
    //We'll store result here
    let cache = {};

    //our actual add() function
    return (num) => {
        if (num in cache) {
            console.log('Retrieving result from cache..');
            return cache[num];
        } else {
            console.log('Calculating!');

            let result = num + 5;
            cache[num] = result;

            return result;
        }
    }
}

//Returned function from memoizedAdd()
const add = memoizedAdd();

console.log(add(10)); //Calculated
console.log(add(10)); //From cache
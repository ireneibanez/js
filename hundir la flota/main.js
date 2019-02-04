const myArray = [3, 2, 45, 37];

function sum(array) {
    let count = 0;
    for (let i = 0; i<array.length; i++) {
        count = count + array[i]; 
    }
return count;
}

console.log(sum(myArray));


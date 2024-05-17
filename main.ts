let numbers: number[] = [10, 5, 20, 8, 15, 42, 17 , 89, 5, 123, 156];

let largest = numbers[0];

// Inside the loop, we compare each element with the current largest value (largest).
// If an element is greater than the current largest value, 
// it updates largest to that element:
// & finally stores the last value which is actually the largest in the variable "largest".
// then we print "largest" 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The largest number is:", largest);

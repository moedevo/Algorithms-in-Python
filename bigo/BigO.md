/* What is a good code?
    - Readable: Clean and others can understand your code.
    - Scalable: Big O measures the idea of a scalable code.
    - Code is Instructions we give to computer to do something.
    - Runtime: How long does it take to run a certain problem through a function or a task.
*/
const array = ['Nemo']
function findNemo (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Nemo") {
            console.log('Found Nemo!');
        };
    };
};
findNemo(Nemo);
/******************************************************************************************/
/* Big O Scalability 
    - Big O Notaition: is the language we use for talking how long an algorithm takes to run.
    - We can compare two algorithms (functions) and which one is better when it comes to scale 
    regardless of our computer differences.
    - Big O Complexity -  
    O(log n), O(1) [Excellent, Good] > O(n) [Fair] > O(n log n) [Bad] > O(n^2), O(2^N),O(n!) [Horrible]
    - Algorthmic Efficiency - 
    As We grow our input elements how many more operations we have to do. 
    Bog O allows us to explain this concept.
    - Different functions has different Big O Complexity
*/
const array = ['Nemo'] // Big O(1)
// const everyOne = ['Nemo','Leo','Digo','Moe','Harmoney','David','Hassan'] // Big O(7)
// const large = newArray(10000).fill('Nemo') // Big O(10000)

function findNemo (array) {
    let t0 = performance.now() // to measure time before for loop
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Nemo") {
            console.log('Found Nemo!');
        };
    };
    let t1 = performance.now() // to measure time after for loop
    console.log('time to call Nemo took'+ (t1-t0) + 'milliseconds') 
    // to show time performance it took to run the function
};
findNemo(Nemo);
// results are 0 and after many run tries it took 0.100000 
// this will be different from CPU to others CPU + What programs do u run + what programming language u use and many factors
// If we add more items to the array results still the same unless we add 1000,10000,100000 to the array
// the results will be more than 7 milliseconds and so on.
// Brief Simmary : As our input grow our function becomes slower and slower because operations increased.
// Big O allows us to measure the function efficiency.
/******************************************************************************************/
/* O(n) Linear Time
    - As we add elements, the operations increases (if we add 5 elements the operations increases with 5 and so on)
    - The function has Big O Notation of O(n) Linear Time.
    - n means the function depends on the number of inputs.
    - Big O(n) -- Bif O(1) if we had 1 input -- Big O(10) if we had 10 inputs and so on.
    - Big O(n) has fair complexity.
*/
/******************************************************************************************/
/* O(1) Constant Time
    - No matter how many inputs are there : the function has only n operations : Constant Time 
*/
const boxes = ['first','second','third','fourth','fifth'];
function compressFirstBox(boxes){
    console.log(boxes[0]); // O(1) Constant Time
    console.log(boxes[1]); // O(2) Still Constant Time
}
/*************************************[Excersie]*******************************************/
function funChallenge(input) {
    let a = 1; // Big O(1)
    a = 50 + 3 // Big O(1)

    for (let i =0 ; i < input.length ; i++) // Big O(n)
    {
        anothrtFunction(); // Big O(n)
        let stranger = true; // Big O(n)
        a++; // Big O(n)
    }
    return a; // Big O(1)
}
funChallenge()
// Calculating Big O Notation for the function 
// Big O (3 + 4n)
// Simplifying Big O => Big O(n)
/*************************************[Excersie]*******************************************/
function anotherFunChallenge(input) {
    let a = 1; // Big O(1)
    let b = 2; // Big O(1)
    let c = 3; // Big O(1)
    for (let i = 0 ; i < input.length ; i++) {
        let x = i + 1; // Big O(n)
        let y = i + 2; // Big O(n)
        let z = i + 3; // Big O(n)
    }
    for (let j = 0 ; j < input.length ; j++ ) {
        let p = j * 1; // Big O(n)
        let c = j * 3; // Big O(n)
    }
    let whoAmI= "I don't know"; // Big O(1)
}
anotherFunChallenge()
// Calculating Big O Notation for the function 
// Big O (4 + 5n)
// Simplifying Big O => Big O(n)
/******************************************************************************************/
/* Big O Rules
    - Rule 1 : Worst Case.
*/
const array = ['Leo','Digo','Nemo','Moe','Harmoney','David','Hassan']
function findNemo (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Nemo") {
            console.log('Found Nemo!');
            break; 
        };
    };
};
findNemo (array)
/* 
- break; will make our code more efficient because instead of looping through 
    the entire 7 items in the array then finding Nemo,
    We will just loop until we find Nemo and breaking the loop 'in this case only first 3 items'
- Worst case will be if Nemo was the last item in the array 'in that case looping through the entire array'
- The function has Big O(n) 
/******************************************************************************************/
/* Big O Rules
    - Rule 2 : Remove Constants.
*/
function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]); //Big O(1)  //Logging the first item

    var middleIndex = Math.floor(items.length/2)
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]); // Big O(n/2)  //As long as index is less than half of middle index logging the items
        index++;
    };
    for (var i = 0 ; i < 100 ; i++ ) {
        console.log('Hi') // Big O(100) // Always 100 no matter how long are input items
    };
};
printFirstItemThenFirstHalfThenSayHi100Times(items);
// Ignoring variables , assignments and small calculations for this function
// Big O(1, n/2, 100) => Big O(n/2, 101) => Big O(n/2, 1) => Big O(n,1) => Big O(n) // Constants Removed
/******************************************************************************************/
/* Big O Rules
    - Rule 3 : Different Terms For Inputs.
    - It means there are different inputs and for loops depend on these inputs separately. 
    - Big O(boxes+boxes2) => Big O (a+b)
*/
function compressBoxesTwice (boxes,boxes2) {
    boxes.forEach(function(boxes){
        console.log(boxes);
    });
    boxes2.forEach(function(boxes){
        console.log(boxes);
    });
};
/******************************************************************************************/
/* O(n^2) Quadratic Time
    - 1 input : 2 operations 
 */
// Interview Question : Log all pairs of array
const numbers = [1,2,3,4,5]

function arrayPairs (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i],array[j])
        };
    };
};
arrayPairs(numbers)
// Big O(n * n) => Big O(n^2)
/******************************************************************************************/
/* Big O Rules
    - Rule 4 : Drop Non Dominants 
*/
function printAllNumbersThenAllPairSums(numbers){
    console.log('These are all numbers:')
    numbers.forEach(function(number){
        console.log(number);
    });
    console.log('These are all their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber){
            console.log(firstNumber+secondNumber);
        });
    });

};
printAllNumbersThenAllPairSums([1,2,3,4,5])
// Big O(n + n ^ 2) => Drop the non dominant terms => Big O(n ^ 2)
/******************************************************************************************/
/*
    - We have to write code that scale.
    - Think big about your code and what could happen in the future.
    - We use big O to measure why one data structure might be better than others.
    - We use big O to see what is a good solution to a problem and what is not.
    - Data Structures = ways to store data.
    - Algorithms = ways to use data structures to write our programs.
    - Data Structure + Algorithms = Programs 
    - Right Data Structure + Right Algorithms = Good Programs
 */
/******************************************************************************************/
/* O(n!) Factorial Time
    - Adding loop for every element 
    - Not gonna see it much and if u see it u doin' wrong
 */

/******************************************************************************************/
/* 3 Pillars Of Programming */
/*
1. Readable: Clean, maintainable and others can read it.
2. Speed (Time Complexity): Scalable  
    How fast is our runtime on the code; 
    How much time does it take for a function to run;
    How many operations does it cost;
3. Memory (Space Complexity):
    How much memory does the code take.
-- More Speed = Less Memory   
 */
/******************************************************************************************/
/* Space Complexity
    - How much a function or an input does it take from our memory
    - What causes space complexity 
        - Adding Variables.
        - Adding Data Structures.
        - Adding Function Call.
        - Adding Allocations
*/
function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booo')

    }
}
boooo([1,2,3,4,5])
// Time Complexity : Big O(n)
// Space Complexity: Big O(1) // let i = 0 is space complexity
function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi'
    }
    return hiArray;
}
arrayOfHiNTimes(6)
// Space Complexity : Big O(n) // Because we create data structure
/*************************************[Excersie]*******************************************/
const tweets = ['hi', 'doing','la'];
array[0]; // Big O(1)
array[tweets.length-1]; // Big O(1)

'oedjgioeiopgirogop'.length // Big O(1)

/******************************************************************************************/
/*****************************END OF THE SECTION ******************************************/
/******************************************************************************************/
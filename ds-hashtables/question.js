//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Naive Solution 
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))
// This solution is bad for time complexity => Big O (n^2)

// Better Solution 
function firstRecurringCharacter2(input) {
    // Creating a hashtable
    let map = {};
    // Looping through the input elements
    for (let i = 0; i < input.length; i++) {
        // If the element is already exist in the hashtable return it
        if (map[input[i]]) {
            return input[i];
        }
        // Otherwise add it to the hash table
        else {
            map[input[i]] = true;
        }
    };
    // If there's no recurring number
    return undefined
};
console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])) // returns 2
console.log(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])) // returns 1
console.log(firstRecurringCharacter2([2,3,4,5])) // returns undefined
// This solution is good for time complexity => Big O (n)
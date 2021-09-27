/* Interview Question 1: 
    Given 2 arrays, create a function that let's a user know (true/false) 
    whether these two arrays contain any common items.
*/
// Solution 1 : 
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2) {
  for (let i=0; i < arr1.length; i++) {
    for ( let j=0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log('Naive Solution => ',containsCommonItem(arr1,arr2));
// Nested loops cause bad time complexity
// Time Complexity: Big O(n^2), 
// Space Complixity: Big O(1) because we are not creating an variables we just use inputs
/* This solution is working but it's a bad solution because of time complexity */
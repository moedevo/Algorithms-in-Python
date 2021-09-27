// collection of numbers 
// finding a matching pair that is equal to a sum that is given
// Ok. that means we will have two params first: numbers , second: sum
// for example numbers = [1,2,4,4] and sum = 8

// Naive Solution 
// We will create a function that has two params and create two loops one will iterate throught the length of the array 
// and the other iterate through the length of the array -1
// if sum of those equals to the given sum will return true otherwise it will return false

function hasPairsWithSum(nums,sum) {
    let len = nums.length
    for (let i = 0; i < len -1; i++) {
        for (let j = 0; j < len; j++) {
            if (nums[i] + nums[j] === sum) {
                return true
            }
        }
    }
    return false
}
console.log('Naive Solution =>',hasPairsWithSum([1,2,4,4],2))
// This Solution is working but it is a bad solution because of time complexity 
// Time complexity : Big O(n^2)
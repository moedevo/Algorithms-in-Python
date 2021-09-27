// Solution 2: 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(array1,array2) {
    // Creating an object.
    let map = {}; 
    // Looping through the first array.
    // If item not exist in the object we gonna add it.
    // after that we will have an object call map contains map = {a:true,b:true,c:true,x:true}
    for (let i = 0; i < array1.length; i++){ 
        if (!map[array1[i]]){
            const item = array1[i];
            map[item] = true
        } 
    }
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]){
            return true
        }
    }
    return false
}
console.log('Better Solution =>',containsCommonItem2(array1,array2))
// Time Complexity: Big O(a+b)
// Space Complexity: Big O(n) we are creating an object
// This is a better solution
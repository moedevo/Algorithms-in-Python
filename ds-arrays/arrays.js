/* Arrays:
 - Organize data one after another
 - lookup: O(1) , push: O(1), insert O(n), delete O(n) 
 */
const strings = ["a","b","c","d"]

// Access the third item in the array
console.log(strings[2])

// Adding to the last of the array
strings.push("e") // Big O(1)
console.log(strings)

// Remove the last item
strings.pop() // Big O(1)
console.log(strings)

// Adding item to the begining 
strings.unshift("o") // Big O(n)
console.log(strings)

// Adding item to the middle
strings.splice(2,1,"o") // Big O(n)
console.log(strings)

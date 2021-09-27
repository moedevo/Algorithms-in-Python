let user = {
    age: 24,
    name:"kylie",
    magic:"fun",
    scream: function() {
        console.log('aha')
    }
};
console.log(user)
console.log(user.name) //O(1)
user.lastname = 'jenner' //O(1)
console.log(user)
console.log(user.scream()) //O(1)

// Collision O(n)
// map() allows you save any data type as the key , maintains insertion order 
//const a = new Map();
// set() only stores the keys no values
//const a = new Set();
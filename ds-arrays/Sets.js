const ids = new Set();
ids.add('abc')
ids.add(1)
ids.add('bb2')
ids.add(1) // we dont see it because duplicates are not allowed

for (const id of ids){
    console.log(id)
}

// console.log(ids[1]) => we get undefined that's way not for sets
console.log(ids.has(1)) // that's the right way

console.log(ids.delete(1))
console.log(ids)

//Set is great choice if you need list of data that's not duplicates and not care about the order 
class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }
    // A hash function 
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    // This will check if there's data or not
    if (!this.data[address]) {
        // if there's not create an array
      this.data[address] = [];
    }
    // This will push the key and value to the array we create
    this.data[address].push([key, value]);
    // This will return that data
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    // this will grab currentBucket data
    const currentBucket = this.data[address]
    if (currentBucket) {
        //Loop through it
      for(let i = 0; i < currentBucket.length; i++){
          // if there's a key grab its value
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
  keys () {
      const keysArray = []
      for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]) {
              keysArray.push(this.data[i][0][0])
          }
      }
      return keysArray;
  }
  values () {
      const valuesArray = []
      for (let i = 0; i < this.data.length; i++){
          if (this.data[i]) {
              valuesArray.push(this.data[i][0][1])
          }
      }
      return valuesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
console.log(myHashTable.values())

// Hashtables are faster than arrays in searching and finding an element
// Order in hashtables doesn't matter
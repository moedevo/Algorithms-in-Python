// Solution 3: Language specifcic solution
const ar1 = ['a', 'b', 'c', 'x'];
const ar2 = ['z', 'y', 'a'];
function containsCommonItem3(ar1,ar2){
    return ar1.some(item => ar2.includes(item))
}
console.log('Language Specific Solution => ',containsCommonItem3(ar1,ar2))
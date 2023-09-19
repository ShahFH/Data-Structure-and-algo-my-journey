
var validAnagram = (s, t) =>{
    // chech if both have same length if not, it return false
    if(s.length != t.length)
        return false
    // it will check in sorted order
    return Anagram(s) == Anagram(t)
}

//  Anagram function check if that's true or not

var Anagram = (str) => str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('')
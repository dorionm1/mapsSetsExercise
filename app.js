
//What does this return?
const set1 = [...new Set("referee")].join("") 
console.log(set1)//ref -- word deduped letters


const set2 = new Set([1,1,2,2,3,4])
console.log(set2)//Deduped set of numbers


//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m)

//hasdupe function
const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCounter
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
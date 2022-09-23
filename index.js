const { transform } = require("babel-core")

const obj = {one: 1, two: 2, three: 3, four: 4}

function myEach(collection, cb) {
    const updatedCollection = Object.values(collection)
    // console.log("help!!!!", updatedCollection)
    for(let i = 0; i < updatedCollection.length; i++){
        cb(updatedCollection[i])
    }
    return collection
}

function myMap(collection, cb) {
    const newCollection = Object.values(collection)
    let newArr = []
    // console.log("Hello there", newArr)
    for(let i = 0; i< newCollection.length; i++) {
    newArr.push(cb(newCollection[i]))
}
//return a new array 
return newArr
}

function myReduce(collection,cb,acc) {
    let i = 0
    console.log("testing!!!!!", acc)
    let newCollection = Object.values(collection)
    // console.log("does it work!!!!!", newCollection)

    if(!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
        
    }
    const len = newCollection.length
    for(i = 0; i < len ; i++) {
        acc = cb(acc, newCollection[i], newCollection)
        
    }
    return acc
    //return single value acc????
}

function myFind(collection,predicate) {
    const newCollection = Object.values(collection)
    for(let i = 0; i < newCollection.length ; i++) {
        console.log("Check iteration!!!", (i))
    if(predicate(newCollection[i])) return newCollection[i]
    
    }
   return undefined

}

function myFilter(collection,predicate) {
    let i = 0
    const newCollection = Object.values(collection)
    const newArr = []
    for(i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])) newArr.push(newCollection[i])
    }
    return newArr
}

function mySize(collection) {
    const newCollection = Object.values(collection) 
        return newCollection.length
    
}

function myFirst(array, n ) {
    const variable = n
   console.log("hi",n)
    const firstElement = array.slice(0,1)
    if(n === undefined) {
        return firstElement[0]
    }else {
        return array.slice(0,n)
    }
    
}

function myLast(array, n ) {
    const variable = n
   console.log("hi",lastElement)
    const lastElement = array[array.length -1]
    console.log("the last element", lastElement)
    if(n === undefined) {
        return lastElement
    }else {
        return array.slice(array.length-n, array.length)
    }
    // return firstElement[0]
}

function myKeys(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }

  function myValues(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
  
  }
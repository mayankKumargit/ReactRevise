// method to create an empty array
/*let array=new Array()
let arr2=[]
console.log(array)
console.log(arr2)
// to push element to array
array.push('apple')
arr2.push('mango')
console.log(array)
console.log(arr2)
*/

// map method in array
/*
This method creates a new array with the results of calling a function for every array element
The map() method calls the provided function once for each element in an array, in order 
Syntax :
array.map(function(currentValue,index,arr),thisValue)
Argument description
currentValue : Required, the value of the current element
index : optional, the array index of the current element
arr : optional, the array object the current element belongs to
*/

/*
const oldArr=['mango','apple','oranges']
console.log(oldArr)

const newArr=oldArr.map(function(value){
    return value
})
console.log(newArr)
let arr3=newArr
console.log(arr3)

const arr4=oldArr.map(function(value,index){
    return index+" : fruits "+value
})
console.log(arr4)
*/

/*
const students=[
    {id:1,name:'Ak',degree:'B.Tech'},
    {id:2,name:'Pk',degree:'B.Com'},
    {id:3,name:'Sk',degree:'M.Tech'}
]

// using arrow function

let newArr=students.map((value)=>{
    return `My name is ${value.name} and degree is ${value.degree}`
})
console.log(newArr)

//document.getElementById("root").innerHTML=newArr+' 😎' // window key+;
*/
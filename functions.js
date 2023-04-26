// fundamental buiding blocks of javascript
function greet(name,lastname){
    console.log("Hello" + " " +name +" "+lastname );
}
greet("John" ,"smith");
function addTwoNumbers(){
    let numOne=10
    let numTwo=20
    let sum=numOne +numTwo
    console.log(sum);
}
addTwoNumbers()
// adding console.log(); at the end makes it undefined

function printFullName(){
    let firstName="Clarine"
    let lastName="Atieno"
    let space=" "
    let fullName=firstName +space+lastName
    return fullName
}
console.log(printFullName());

// function that takes in array and returns the sum of the array
function sumArrayValues(arr){
    let sum=0;
    for (i = 0; i < arr.length; i++) {
        sum=sum + arr[i]
        // or you can also do it this Way;
        // sum+=arr[i]
    }
    return sum;
}
const numbers=[1,2,3,4,5];
console.log( sumArrayValues(numbers))

// function sum(...args){
    // return args.reduce((total,current)=> total +current);

// }
// let sum1=[1,2,3]
// console.log(sum(arg));

function sum(){
    const args=Array.from(arguments);
    return args.reduce((total,current)=> total +current);
}
// let sum1=[1,2,3]
console.log(sum(1,2,3));

function functionName(name){
    console.log("Hello there" + " "+name);
}
functionName("Jude")

function addNumbers(){
    let result=n1+n2
   return result
}
let n1=6.6
let n2=2.5
console.log(addNumbers(n1,n2))

let num=9;
let  squareRoot= Math.sqrt(num);
console.log(squareRoot);

function canVote(age){
    if(age<18){
        return("canvote");
    }
    else if(age>18){
        return("true");
    }
    else{
        return("false");
    }

}
let age=6

console.log(canVote())

function mergeSort(arr){
if(arr.length <=1){
return arr
}
let middle=Math.floor(arr.length/2)
let left=arr.slice(0,middle)
let right=arr.slice(middle)
console.log(left);
console.log(right);
return sortedArray(mergeSort(left),mergeSort(right))
}

function sortedArray(left,right){
    let emptyArray=[]
    while(left.length && right.length){
        
        if(left[0]<right[0]){
   emptyArray.push(left.shift())
        }
        else{
            emptyArray.push(right.shift())
        }
    }
    console.log({emptyArray});
    return [...emptyArray,...left,...right]

}
let arr=[10,5,20,1,0,2,7,50]
console.log(mergeSort(arr));



// how to reverse a number using split(''),reverse(),join('')
// split is used to split a string into an Array of  substring and returns a new array
// reverse is used to an array is used to reverse an array in the place
// join method is used to join an array into string
// let num1=32243
function reverseNum(n){
    n=n+ ""
    let num1=n.split('').reverse('').join('')
    // console.log(num1.split('').reverse().join(''));
    return parseInt(num1);
}  
console.log((reverseNum(32243)))






// reverse a numbers without using split(''),reverse(''),join('')

function reverse_fun(num) {
   let n=num.toString(); 
//    this will convert the number to string and store in the n variable
// then create an empty array
// then create an empty string
// then creating a for loop to reverse the number
// k[0] is used to revrse the array from 0
   let number=[]
   let str=""
   for(let i=n.length-1,k=0;i>=0;i--,k++){
    number[k]=n[i]
    str=str+number[k];
   }
   return parseInt(str);
}
console.log(reverse_fun(32243));

// accumulator is the value resulting from the previous callbackfn
const array10=[1,2,3,4,]
const initial=0;
const suminit=array10.reduce((accumulator,currentvalue)=> accumulator +currentvalue,initial);
console.log(suminit);

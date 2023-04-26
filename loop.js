let members=["Jonh","sara","Jack"]
for (const name of members) {
//    console.log(name);
let fullName=name +" " +"Smith "
console.log(fullName);
}

let name1="Programiz"
for (const i of name1) {
   console.log(i); 
}

const student={
    name:"Monica",
    grade:7,
    age:12
}
for (const key in student) {
//   console.log(key);
const value=student[key];
console.log(`${key} => $(value)`);
// console.log(student[key]);
}
// object represent js object that we want to loop

let employee={
    Jack:24000,
    Paul:34000,
    Monica:4000
}
for (const i in employee) {
    
     let salary=employee[i] +5000;  
     console.log(`$i: ${salary}`);
    
}

// Write a function that takes a string as an argument and returns true if the string is a palindrome (reads the same backwards and forwards) and false if it is not.
    
//  thought process
// loop through the string
// check if the string is a pallindrome using the length.
function palindrome(string,len){
    
for (let i = 0; i < string.length; i++) {
    if (string[i] !==string[len -1]) {
        return "true"
    } else {
        return "false"
    }
    
}
}
let string="madam"
console.log(palindrome(string));

// Write a JavaScript function that reverses a number.
// thought process 
// writting a function that takes in a single argument
// creating a variable named reversed which it's value will be 0,and then using a while loop to iterate through the digits
// the variable reversed will be multiplied by 10 the variable of number we will find the modulus by 10
// changing the number to a number by using paseint 
function reverseNumber(num){
    let reversed=0;
    while(num !==0){
        reversed=(num % 10)+(reversed *10);
        num=Math.floor(num / 10)
    }
    return reversed;

}

console.log(reverseNumber(32243));

// Write a JavaScript function that generates all combinations of a string.
// function combinations(string){
//     if(!string){
//         return[];
//     }
//     if(string.length===1){
//         return[string];
//     }
//     for(let i=0;i<string.length;i++){
//         let restStr=[...string.slice(0,i),...string.slice(i +1)];
//     }
// }

function upperCase(string){
let word =string.split('')
// let empty=[]
for (let i= 0; i < word.length; i++) {
    word[i]=word[i].charAt(0).toUpperCase()+word.substring(1);
    
}
return word.join('')
}
console.log(upperCase("the quick brow fox"));

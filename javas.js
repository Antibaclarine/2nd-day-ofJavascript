let name="  30 days of javascript"
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(0,1));
console.log(name.slice(-19));
console.log(name.includes("Script"));
console.log(name.split(''));
console.log(name.trim());
console.log(name.replace("javascript","coding"));
console.log(name.charCodeAt(3));
console.log(name.indexOf("days"));
console.log(name.concat(" ","land"));
console.log(name.match("love"));
console.log(name.match(/the/g) || []);
console.log(name.split( ''));
let num=10.5
console.log(num.parseInt);

let arrie=["dog","Mango","Cat","dog","winter","Mango"]
function removeDuplicate(arrie){
     return[...new Set(arrie)];
}
console.log(removeDuplicate(arrie));
let word2="sevink"
function text(word2){
    return text.split('').sort().join()
}
console.log(word2);

function mergeSort(array){
if(array.length<=1){
    return array
}
let middle=Math.floor(array.length/2)
let left=array.slice(0,middle)
let right=array.slice(middle)
console.log({left});
console.log({right});
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
    return[...emptyArray,...left,...right]
}
let array=[16,20,5,17,0,3,19,1]
console.log(mergeSort(array));

function binary(array,target){
leftIndex=0
rightIndex=array.length-1
while(leftIndex<=rightIndex){
    let middle=Math.floor((leftIndex+rightIndex)/2)
    if(array[middle]===target){
        return middle
    }
    else if(array[middle]<target){
        rightIndex=middle-1
    }
    else{
        leftIndex=middle+1
    }
    return-1
}
}
let target=17
console.log(binary(array,target));
let items=[1,2,3,4,5]
let num1=[2,3,4,5]
let result=num1.map(
    (items)=>{
        return items*2
    }
)
console.log(result);
let num2=[10,20,3,8,7,9,12]
for(let element of num2){
    console.log(element);
    if(element===3){
        continue;
    }
}
let i=0
  let sum=1
while(i<num2.length){
    console.log(i);
    (sum-=num2[i])
    i++;
}
console.log({sum});

let num3=[78,20,10,50,1]
let num5 =num3.sort(function (a,b){return a-b})
console.log(num5);

let fruits = ["orange","mango","apple","orange","mango"];
let fruitsNew = [...new Set(fruits)];
console.log(fruitsNew);

let firstname;
console.log(firstname);
let empty =null
console.log(empty);

// === is strictly equal to which means equal data type and equal value

// creating time object
let now=new Date()
console.log(now.getDate());

// getting fullyear from a time object.
let then=new Date()
console.log(then.getFullYear());

//getting month
 console.log(then.getMonth());
 console.log(then.getHours());
 console.log(then.getMinutes());
 console.log(then.getTime());
 console.log(then.getSeconds());

 let num4=4
 let num6=5
 console.log(num4>num6);
 console.log(num4>=num6);
 console.log(num4==num6);
 console.log(num4===num6);
 console.log(num4!==num6);
 console.log(num4!=num5);
 console.log("10"==10);
 console.log(parseInt("9.8")==10);
 console.log(then.getUTCDate());

 let a=20
 let b=10
 let ab=(0.5 *20*10)
 console.log(ab);
 area=width *length
 perimeter=(width +length) *2
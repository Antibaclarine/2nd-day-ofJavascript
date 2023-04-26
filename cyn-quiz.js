// Write a program to find a missing number in an array with 1-100 numbers stored.
// 

// Write a program to find multiple duplicate numbers in a given array with 1-100 numbers.

let range=[12,34,12,4,6,7,34]
function removeduplicate(arr){
   return [...new Set(range) ]
}
console.log(removeduplicate(range));

function findDuplicate(arr){
   let a={}
   let b=[]
   arr.forEach(element => {
      if(!a[element])
      a[element]=0
      a[element] +=1
   });
   for (const key in a) {
      if (a[key]>2) {
       b.push(key)  
         
      }
   }
   return b;
}
console.log(findDuplicate([[12,34,12,4,6,7,34]]));

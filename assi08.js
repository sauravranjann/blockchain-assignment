// 1. Can we put duplicate values in the set object ?
  
  //Ans- No, we can't put duplicate values in the set object.




// 2. Write the syntax for
// a) Creating new set object
 var saurav=new Set(["asaurav","ranjan"]);
 var saurav1 = new Set(["sumit","sumit","amit","anil","anish"]);
 
 console.log(saurav1);
 

  
// b) Adding new element to set object
saurav.add("sauravji");
 console.log(saurav);




// c) Deleting element from set object
saurav.delete("sauravji");
 console.log(saurav);



// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.
var set1=new Set([1,2,3,4,5,6,7,8,9,10]);
console.log(set1.has(8));

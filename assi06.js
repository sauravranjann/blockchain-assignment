// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.



// class Rectangle{
//     constructor(length,breath){
//         this.length=length;
//         this.breath=breath;
//     }
//     Area(length,breath)
//     {
//         return this.length*this.breath;
//     }
    
// }
// class Square extends Rectangle
//     {
//         constructor(length,breath)
//         {
//             super(length);
//             this.breath=breath;
//         }
        
//     }

//     let obj= new Square (6,4);
//    console.log( obj.Area());






// //    2) Write a javascript function find_largest to return the nth largest number

// // in an array-
// // eg- given an array of integers- [3,45,6,7,23,5,7,8]

// // find_largest(3) will return third largest number from the above array -
// // which is 8.
    

// function find_largest(d)
// {
// let saurav=[3,45,6,7,23,5,7,8];

// // function compareNumbers(a, b) {
// //     return b - a;
// //   }
// // saurav.sort(compareNumbers);

// saurav.sort((a,b)=>b-a);
// return saurav[d-1];

// }
// let s=find_largest(3);
// console.log(s);









// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

 function computeDash(num)
 {
     let str=num.toString();
     let result=[str[0]];
     for(let i=1;i<str.length;i++)
     {
         if((str[i-1]%2===0)&&(str[i]%2===0))
         {
             result.push('-',str[i]);
         }
         else
         {
             result.push(str[i]);
         }
     }
     return result.join('');
 } 

   let saurav= computeDash(25460825);
   console.log(saurav);




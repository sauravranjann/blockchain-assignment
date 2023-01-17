

// // 1. Input a String S, and check its length and if the length is greater than 4,
// // truncate the input String and output the result -
// // Input: Ice Output: Ice
// // Input:Icecream Output:Icec...

// var s="Ice";
// if(s.length>4)
// {
//     console.log(s.slice(0,4)+"...");
// }
// else
// {
//     console.log(s);
// }



// // 2. Input a String S with multiple words, and remove whitespaces and
// // output the result -
// // Input: “Hii Boy” Output: “HiiBoy”

// var s="HI MY NAME IS SAURAV RANJAN I AM IN CHANDIGARH UNIVERSITY 2ND YEAR BTech CSE STUDENT";
// var s1=s.split(" ");
// var s2=s1.join("");
// console.log(s2);





// // 3. Input a String S with two words, and replace first word with second word
// // and display the result -
// // Input: “Hii Boy” Output: “Boy Hii”

//  var s= "Hii Boy";
//  var s1=s.split(" ");
//     var s2=s1.reverse();
//     var s3=s2.join(" ");
//      console.log(s3);
     
     
  
// // 4. Input a String S with a word, and replace character “a” with “x” and
// // display the result -
// // Input: “apple” Output: “xpple”

// var s1= "sauravranjan";
// var s=s1.split("");

// for(let i=0;i<s.length;i++)
// {
//     if(s[i]=="a")
//     {
//         s[i]="x";
//     }
// }
// s=s.join("");
// console.log(s);






//// 5. What string method can be used to convert string into array ?
 
//ans-: split() method




// // 6. What string method can be used to check the occurrence of a specified
// // text in a string?

//ans-: includes() method

// // 7. How can you break a string to a newline in Javascript ?
//ans-: \n


// // 8. Write a Javascript function to test whether the first character of a string
// // is lowercase.
//  let s="Saurav";
//  //let s= "saurav";
//     if(s[0]==s[0].toLowerCase())
//     {
//         console.log("true");
//     }   
//     else    
//     {
//         console.log("false");
//     }



// // 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// // (any combination) using string methods.

// var s="yes";
// var s1=s.toLowerCase();
// //var s2 = s1.toUpperCase();
// if(s1=="yes")
// {    
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }

// How will you handle that ?
// 10. Given a String S, achieve following tasks
// // a) Convert the String into upper case.

//  var s="saurav";
//     var s1=s.toUpperCase();
//     console.log(s1);

// // b) Convert only the first character to uppercase.

// var s="saurav";
// var s1=s[0].toUpperCase();
// var s2=s.slice(1);
// s1=s1+s2;
// console.log(s1);

// // c) Convert the String into lower case.

// var s="SAURAV";
// var s1=s.toLowerCase();
// console.log(s1);


// // d) Break the string into two halves and swap them.

// var s="sauravranjan";
// var s1=s.slice(0,s.length/2);
// var s2=s.slice(s.length/2);
// console.log(s1);
// console.log(s2);

// // e) Count the repeating characters.


// var s="sauravranjan";
// var s1=s.split("");
// var count=0;
// for(let i=0;i<s1.length;i++)
// {
//     for(let j=i+1;j<s1.length;j++)
//     {
//         if(s1[i]==s1[j])
//         {
//             count++;
//         }
//     }
// }

// // f) Reverse the string

var s="sauravranjan";
var s1=s.split("");
var s2=s1.reverse();
var s3=s2.join("");
console.log(s3);
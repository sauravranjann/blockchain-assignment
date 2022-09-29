// // 1. Using for loops, write a Javascript program to output the following
// // pattern -
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10



// let j=1;
// let string="";
// for(let i=1;i<=8;i++){
//     for(let k=1;k<=i;k++){
     
//         string+=j+" ";
//         j++;
//     }
//    string +="\n";

// }
// console.log(string);




// // 2. Write a program to find whether a given number is armstrong number or

// // not-
// // The Armstrong number is a number that is equal to the sum of cubes of

// // its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// // numbers. Let's try to understand why 153 is an Armstrong number.
// // 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// // (1*1*1)=1
// // (5*5*5)=125
// // (3*3*3)=27
// // So:
// // 1+125+27=153
    

// let j=370;
// let l=j
// let z=0;
// let i=0;
// while(j)
// {  
//     z=j%10;   
//     i=i+(z*z*z);
//     j=~~(j/10);
// }

// if(i===l)
// {
//     console.log("Armstrong number");
// }
// else{
//     console.log("not Armstrong number")
// }





// Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14


function facto(n)
{
    for(let i=n-1;i>=1;i--)
    {
        n=n*i;
    }
    return n;
}

let num=146;
let nu=num;
let value=0;
while(num)
{
    a=num%10;
    value=value +facto(a);
    num=~~(num/10);


}
if(nu===value)
{
    console.log("special number")
}
else{
    console.log("not a special number");
}
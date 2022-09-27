// //  1   Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene

// function triangle(a,b,c)
// {
//     if(a===b&& b===c&& c===a)
//     {
//         console.log("Equilateral Triangle");
//     }
//     else if(a===b || b===c || a===c)
//     {
//         console.log("Isosceles Triangle");
//     }
//     else
//     {
//         console.log("Scalene Triangle");
//     }
// }
// triangle(5,5,5);
// triangle(5,5,6);
// triangle(5,6,7);



// //  2    Write a function using switch case to find the grade of a student based
// // on marks obtained
// // a. “S grade” if the marks are between 90 and 100.
// // b. “A grade” if the marks are between 80 and 90.
// // c. “B grade” if the marks are between 70 and 80.
// // d. “C grade” if the marks are between 60 and 70.
// // e. “D grade” if the marks are between 50 and 60.
// // f. “E grade” if the marks are between 40 and 50.
// // g. “Student has failed” if the marks are between 0 and 40.
// // h. Else output “Invalid marks”.

// function grade(m)
// {
//     switch (true) {
//         case (m>=90 && m<=100):
//             console.log("S grade");
//             break;
//         case (m>=80 && m<90):
//             console.log("A grade");
//             break;
//         case (m>=70 && m<80):
//             console.log("B grade");
//             break;
//         case (m>=60 && m<70):
//             console.log("C grade");
//             break;
//         case (m>=50 && m<60):
//             console.log("D grade");
//             break;
//         case (m>=40 && m<50):
//             console.log("E grade");
//             break;
//         case (m>=0 && m<40):
//             console.log("Student has failed");
//             break;
//         default:
//             console.log("Invalid marks");
//             break;
//     }
    

// }
// grade(90);
// grade(89);
// grade(79);
// grade(69);
// grade(59);
// grade(49);
// grade(39);
// grade(101);






// //3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

// function multiple_of_2_and_5()
// {
//     let sum=0;
//     for(let i=1;i<=1000;i++)
//     {
//         if(i%3==0||i%5==0) 
//         {
//             sum=sum+i;
//         }
//     }
//     console.log(sum);
// }
// multiple_of_2_and_5();







// // 4. Write a program to find the factorial of all prime numbers between a
// // given range . Range will be passed as 2 values in the function
// // parameters. eg- if it is needed to find the values for numbers 1-100, then
// // function declaration can look like - function prime(1,100).


// function factorialls(m,s)
// {
//     let f=1;
//     for(let i=m;i<=s;i++)
//     {
//     f=f*i;
//     }
//     console.log(f);
// }
// factorialls(1,4);
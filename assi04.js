// This assignment will help you interpret mathematical relationships both
// algebraically and geometrically.

// Create a function that takes a number (step) as an argument and returns the
// number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// Take input from the user in the function parameter and return the output
// using the return statement.
// examples-
// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436




function matchsticks(n)
{
    return (n*6)-n+1;
}
let no_of_sticks= matchsticks(4);

console.log(no_of_sticks);
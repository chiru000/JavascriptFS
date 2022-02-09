let x = 1, y = 2;

if (x = y)
    console.log(true);
else
    console.log(false);

console.log(x, y);

//Example 2
if ((x = y))
    console.log(true);
else
    console.log(false);

//Example 3
    if ((x=1) != y)
    console.log(true);
else
    console.log(false);

    console.log(x, y);

//Eample 4
if (Infinity)
    console.log(true);
else
    console.log(false);

//Example 5
if (-Infinity)
    console.log(true);
else
    console.log(false);

//Example 6
if (null)
    console.log(true);
else
    console.log(false);

//Example 7
if (undefined)
    console.log(true);
else
    console.log(false);
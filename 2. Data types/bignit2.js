//without bigint
var x = 2 ** 53;
console.log(x, typeof(x));
var y = x + 1 ;
console.log((y), typeof(y));


//wit bigint
var x = 2n ** 53n;
console.log(x, typeof(x));
var y = x + 1n;
console.log(y, typeof(y));     
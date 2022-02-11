var myVar = function isEven(num) {
    return num % 2 == 0;
}

console.log(myVar(10)); //true
console.log(myVar(11)); //false
console.log(myVar); // Function : isEven
console.log(typeof myVar); //function

console.log(myVar()); //false
console.log(myVar('')); //ture
console.log(myVar('Yo Yo')); //false
console.log('Yo Yo' % 2); //NaN
console.log(NaN == 0); // false
console.log('' % 2); //0
console.log(undefined % 2 == 0);
console.log(undefined % 2);
console.log('' % 2 == 0); //emty string % 2  =0
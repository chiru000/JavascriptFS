//function with no arguuments and no return value
function doSomething() {
    console.log('Doing something');
}
doSomething();
doSomething();

// function with aruments and n return value
function doSomething(whatToDo) {
    console.log('Doing :' + whatToDo);
}
doSomething('Drinking Cofee');
doSomething('Write Code');

//write a js function to add 10 and 20
//no parameter and return value
function add1() {
    let n1 = 10;
    let n2 = 20;
    let sum = n1 + n2;
    console.log(sum);
}
add1();
add1();
add1();

//js function which accepts arguments as input
function add2(n1, n2) {
    let sum = n1 + n2;
    console.log(sum);
}
add2(1, 2);
add2(3, 4);
add2(10, 20);

//js function which accepts aruments as input
//and returns the output back to the caller
function add3(n1, n2) {
    let sum = n1 + n2;
    return sum;
}

r1 = add3(10, 400);
r2 = add3(20, 200);
r3 = add3(30, 300);

console.log(r1);
console.log(r2);
console.log(r3);

console.log(add3(123, 456));
console.log(add3(789, 456));
console.log(add3(022, 456));

// Function for sum 
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = add(1, 3);
console.log(result);

let result2 = add(2, 10);
console.log(result2);

console.log(add(10, 25));

// Function for prime or not 
function area(r) {
    let a = 3.142 * r ** 2;
    return a;
}
console.log(area(123.123));

// Function for evennumber
function evenornot(evennum) {
    if (evennum % 2 == 0) {
        return evennum + ' is evenumber';
    } else {
        return evennum + ' is not evenumber';
    }
}
console.log(evenornot(1));
console.log(evenornot(2));
console.log(evenornot(3));
console.log(evenornot(5));

// Function for prime or not 
function primeornot(num) {
    let isPrime = true;
    if (num == 1) {
        isPrime = false;

    }
    else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime)
        return num + ' is prime number';
    else
        return num + ' is not prime number';
}
console.log(primeornot(1));
console.log(primeornot(2));
console.log(primeornot(3));
console.log(primeornot(4));
console.log(primeornot(55));

// Function for divisable by 4 and not by 5
function div4not5(num) {
    if (num % 4 == 0 && num % 5 != 0)
        return num + ' is divisable by 4, not by 5';
}
console.log(div4not5(16));

/*
//prime numers 1 to 100
function genprime(from, to) {
    for (var i= from; i<= to ; i++) {
        if (primeornot(i)) {
            console.log(i);
        }
    }
}
genprime (1, 100);
*/



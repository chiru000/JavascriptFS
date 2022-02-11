function funcA(a, b) {
    return a + b;
}

function funcA(c) {
    return c;
}

console.log(funcA(2));
console.log(funcA(3, 4));

//javascript doesnt Not support method overloading.
//so, if it sees/pares two or more functions
//with a same name, it'll just consider the
//last defined function and overwrite the previous ones. 

function a() {
    console.log('a function called');
}

function b(myVar) {
    console.log('b function is called');
    myVar;
    console.log(myVar);
}

b(a()); // this excecute function a and function b without storing any value in variable mayVar. 
b(a); // this assigned function a to varibale -myVar, function a wont excecute in this case  

function x() {

}
console.log(x());// with out statement returns undefied 


/*
function a() {
    console.log('a function called');
}

function b(myVar) {
    console.log('b function is called');
    myVar();
    console.log(myVar);
}

b(a); // function a excecutes in this case
*/
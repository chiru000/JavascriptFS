function a() {
    console.log('a function is called');
}

function b(myVar) {
    console.log('b function is called');
    console.log(myVar); // to check what stored in myVar
    myVar();
}

b(a); 
//myVar(); //here it work because scope is outside function


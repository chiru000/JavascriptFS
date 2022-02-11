let num = 6;

if (num < 3) {
    console.log(num == 1 ? num + " is Not a Prime Number" : num + " is  a Prime Number");
} else {
    let a = num - 1;
    while (num % a !== 0) {
        a = a - 1;
        if (a === 1) {
            console.log(num + " is a Prime Number");
        }
    }
    if (a !== 1) {
        console.log(num + " is Not a Prime Number");
    }
}
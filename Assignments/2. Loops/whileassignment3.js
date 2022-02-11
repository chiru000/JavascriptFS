/*
let n = 1;
while (n++ < 100) {
    if (n < 3) {
        console.log(n);
    } else {
        let a = n - 1;
        while (n % a !== 0) {
            a = a - 1;
            if (a === 1) {
                console.log(n)
            }
        }
    }

}
*/

let count = 2;
let i = 2;
let isPrime = true;
while (count++ < 100) {

    while (i++ < count) {
        if (count % i == 0) {
            console.log(count);
            break;
        }
    }
}

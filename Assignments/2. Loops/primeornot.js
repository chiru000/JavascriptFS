/*
var num = 4;

for (var i = 2; i <= parseInt(num / 2); i++) {
    if (num % i == 0)
        break;
}

if (i == parseInt(num / 2))
    console.log(num + " is Prime Number");
else
    console.log(num + " is Not Prime Number");
*/

let num = 4;
let isPrime = true;

for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }

}
if (isPrime)
    console.log(num + " is Prime Number");
else
    console.log(num + " is Not Prime Number");

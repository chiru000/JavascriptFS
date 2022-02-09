let from = 1;
let to = 100;

for (let j = from; j <= to; j++) {
    let isPrime = true;
    if (j == 1)
        isPrime = false;

    for (let i = 2; i < j; i++)
        if (j % i == 0) {
            isPrime = false;
            break;
        }
    if (isPrime)
        console.log(j);
}
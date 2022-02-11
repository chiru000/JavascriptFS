let num = 1;

do {
    if (num % 3 == 0 && num % 6 == 0 && num % 5 != 0)
        console.log(num);
    num++
} while (num < 200);
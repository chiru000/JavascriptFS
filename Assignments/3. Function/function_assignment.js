// 1. Addtion of 3 numbers
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(add(1, 2, 3));

//2. To find Speed (dist-in KM and Time-in mins)
function speed(dist, time) {
    return dist / (time / 60) + ' KM/h';
}
console.log(speed(200, 120));

//3. to find Area of circle
function area(radius) {
    return Math.PI * radius * radius;
}
console.log(area(123));

//4. Factorial
function factorial(number) {
    let f1 = 1;
    for (var i = number; i > 0; i--) {
        f1 = f1 * i;
    }
    return f1;
}
console.log(factorial(3));

//5. even or not with true false output
function even(n3) {
    return (n3 % 2 == 0 ? true : false);
}
console.log(even(100));

//6. odd or not with true false output
function odd(n4) {
    return (n4 % 2 != 0 ? true : false);
}
console.log(odd(15));

//7. Prime or Not 
function isPrime(num) {
    let p1 = true;
    if (num == 1)
        p1 = false;
    else
        for (var i = 2; i < num; i++)
            if (num % i == 0)
                p1 = false;
    return p1;
}
console.log(isPrime(4));

//8. Palindrome or not
function isPalindrome(num) {
    let numbkp = num;
    let rev = 0;
    while (num != 0) {
        let lastDig = num % 10;
        rev = (rev * 10) + lastDig;
        num = parseInt(num / 10);
    }
    if (rev == numbkp)
        return true;
    else
        return false;
}
console.log(isPalindrome(11));

/*
//9. Fabonacci Series
function fibonacci(size) {
    let firstnum = 0;
    let secondnum = 1;
    let nextnum = 0;
    console.log(firstnum);
    console.log(secondnum);
    for (var i = 1; i < size - 2; i++) {
        nextnum = secondnum + firstnum;
        firstnum = secondnum;
        secondnum = nextnum;
        console.log(nextnum);
    }
}
console.log(fibonacci(10));
*/

//10. Divisible by 6 or not 
function divby6(num) {
    if (num % 6 == 0)
        return true;
    else
        return false;
}
console.log(divby6(36))

//11. Convert Sec to houra
function secToHh(sec) {
    let hour = sec / 3600;
    return hour;
}
console.log(secToHh(12000));

//12. counting digits
function noOfDigits(num) {
    let count = '' + num;
    return count.length;
}
console.log(noOfDigits(123));

/*
//13. Repeat digits
function repeat(num) {
    let re = '' + num + num;
    return re;
}
console.log(repeat(12));
*/

//13. Repeat digits
function repeat(num) {
    let re = '' + num;
    re = re.length;
    re = num * (10 ** re) + num
    return re;
}
console.log(repeat(12));

//14. Hundredth digit
function hundredth(num) {
    let n1 = parseInt(num / 100);
    let n2 = n1 % 10;
    return n2;
}
console.log(hundredth(1234));

//15. Required Run Rate
function rrr(target, maxOvers, currentScore, oversBowled) {
    return (target - currentScore) / (maxOvers - oversBowled);
}
console.log(rrr(500, 50, 340, 40));

// 16. Make decimal
function makeDecimal(x, y, z) {
    let xx = (x * 100) + (y * 10) + z;
    let yy = xx / 100;
    return yy;
}
console.log(makeDecimal(1, 2, 3));

//17. sum2Digit
function sum2Digit(num) {
    let n1 = parseInt(num / 10);
    let n2 = num % 10;
    return n1 + n2;
}
console.log(sum2Digit(38));

//18. AndBooleans
function andBolleans(b1, b2, b3) {
    return b1 && b2 && b3;
}
console.log(andBolleans(true, false, true));

//19. Larger than one   
function largerThanOne(n1, n2, n3) {
    return (n1 > n2 ? true : n1 > n3 ? true : false)
}
console.log(largerThanOne(4, 2, 5));

//20. Number in Ascending Order  
function numAssending(n1, n2, n3) {
    return (n2 > n1 ? n3 > n2 ? true : false : false)
}
console.log(numAssending(1, 2, 3));

//21. sum4Digit
function sum4Digit(num) {
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    for (var i = 0; i < 4; i++) {
        n1 = parseInt(num / 10);
        n2 = num % 10;
        n3 = n3 + n2;
        num = n1;
    }
    return n3;
}
console.log(sum4Digit(123456789));

//22. Area of Squre





//23. AddDigitNumber
function addDigitNumber(n1, n2, n3) {
    return ((n1 * 1000 + n1 * 100 + n1 * 10 + n1)
        + (n1 * 1000 + n2 * 100 + n2 * 10 + n2)
        + (n3 * 1000 + n3 * 100 + n3 * 10 + n3));
}
console.log(addDigitNumber(1, 2, 3));

// 24. Multiple37
function multiple37(num) {
    return (num % 3 == 0 || num % 7 == 0 ? true : false);
}
console.log(multiple37(55));

//25. Larger than three numbers  
function largerThanThree(n1, n2, n3) {
    /* if (n1 > n2)
         if (n1 > n3)
             return n1;
         else if (n2 > n3)
             return n2
         else
             return n3*/
    return (n1 > n2 ? n1 > n3 ? n1 : n3 : n2 > n3 ? n2 : n3)
}
console.log(largerThanThree(5, 7, 3));

//26. Days in Month
function daysInMonth(month, year) {
    let noOfDays;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            noOfDays = 31;
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            noOfDays = 30;
            break;

        case 2:
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
                noOfDays = 29;
            else
                noOfDays = 28;
    }
    return noOfDays;
}
console.log(daysInMonth(3, 2020));

//27. Change char case
function changeCharcase(char) {
    let c1 = 'a';
    if (typeof c1 === typeof char)
        return char.toUpperCase();
    else
        return 'Not a Character';
}
console.log(changeCharcase('i love felight'));

// 28 isDigit
function isDigit(num) {
    let n1 = 0;
    if (typeof n1 === typeof num)
        return true;
    else
        return false;
}
console.log(isDigit(9))

// 29 Middle Char
/*
function middlechar(char1) {
    let c1 = char1
    return c1.charAt(1);
}
console.log(middlechar('win'));
*/

function middleChar(char1) {
    let c1 = 'a'
    if (typeof c1 === typeof char1)
        return char1.charAt(1);
    else
        return 'Not a Character'
}
console.log(middleChar('WIN'));

//30. same Last Digit
function sameLastDigit(num1, num2) {
    return ((num1 % 10) == (num2 % 10) ? true : false);
}
console.log(sameLastDigit(102, 121));

//31 Add for third
function addForThird(num1, num2, num3) {
    return (((num1 + num2 == num3) || (num2 + num3 == num1) || (num3 + num1 == num2)) ? true : false);
}
console.log(addForThird(2, 2, 4));
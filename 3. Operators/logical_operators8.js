//ofice closed or not?
var hour = 12;
var isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log('The office is closed.');
}
else
    console.log('Welcome');
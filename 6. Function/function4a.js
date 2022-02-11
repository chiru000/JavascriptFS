function f1() {
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        console.log('---------');
    }
}

f1();
f1(1);
f1('a', 'b');
f1(true, false, true);
f1('Blue', 'Orange', 'Yellow', 'Indigo');
//js has a bulitin variable called arguments
//n which it will store all the arguments we pass

function a() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log('----------');
    console.log();
}

a();
a(1, 2);
a(1, 2, 3);
a(1, 2, 3);
a('192.168.1.98', '6565');
a('Shri Rama', 'Jai Hanuman');
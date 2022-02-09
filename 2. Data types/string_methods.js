//chartAT(x)
var myString = 'I can Win';
console.log(myString.charAt(7));

//chartCodeAT(x)
var myString = 'I can Win';
console.log(myString.charCodeAt(7));

//concat(v1, v2,...)
var message = "Namaste"
var final = message.concat(" Friends", " Welcome to JS.");
console.log(final);

//fromCharCode(c1, c2,...)
console.log(String.fromCharCode(97, 98, 99, 120, 121, 122));
console.log(String.fromCharCode(72, 69, 76, 76, 79));

//IndexOf(substr, [start])
var myString1 = 'javascript rocks';
console.log(myString1.indexOf('r'));

//lastIndexOf(substr, [start])
var myString1 = 'javascript rocks';
console.log(myString1.lastIndexOf('s'));

//localeCompare(substr, [start])
var myString1 = 'javascript rocks';
console.log(myString1.localeCompare('r'));

//match(RegExp)
var myString1 = 'javascript rocks';
console.log(myString1.match('r'));

//replace(substr, replacetext)
var myString = 'Felight JavaScript Coders';
console.log(myString.replace(/coders/i, "Developers"));

//seach(RegExp)
var myString1 = 'javascript rocks';
console.log(myString1.search('r'));

//slice(start, end)
var text = "excellent";
console.log(text.slice(0, 4));
console.log(text.slice(2, 4));

//split(delimiter)
var message = "Welcome to Feloght";
var word = message.split("l");
console.log(word[0]);
console.log(word[1]);
console.log(word[2]);

//substr(start,length)
var myString1 = 'javascript rocks';
console.log(myString1.substr('j', 8));

//substring(start,end)
var myString1 = 'javascript rocks';
console.log(myString1.substring('j', 12));

//tolocaleLowerCase()
var myString = 'Felight Rocks';
myString = myString.toLocaleLowerCase();
console.log(myString)

//tolocaleUpperCase()
var myString = 'Felight Rocks';
myString = myString.toLocaleUpperCase();
console.log(myString);

//toLowerCase()
var myString = 'Felight Rocks';
myString = myString.toLowerCase()
console.log(myString)

//toUpperCase()
var myString = 'Felight Rocks';
myString = myString.toUpperCase()
console.log(myString)

//toString()
var myString = 'Felight Rocks';
myString = myString.toString()
console.log(myString)

//valueOf()
var myString = 'Felight Rocks';
myString = myString.valueOf()
console.log(myString)




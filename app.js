/* *********************************  TYPY DANYCH I OPERATORY  ********************************* */

/* 
// 2. Tworzenie zmiennych

var name = "Jan", 
	surname = "Kowalski";

var age;
age = "23";

name = "Maciej";

var copyName = name;
*/





/*
// 3. Tekstowy typ danych

var firstName = 'Jan';
var lastName = 'Kowalski';

var bookTitle = "\'Władca Pierścieni\'";

var multiline = "Linijka pierwsza\nlinijka druga\n\ttrzecia linijka";
*/





/* 
// 4. Liczbowy typ danych


var number = 20;
*/





/*
// 5. Prawda, fałsz i wartości prawdziwe oraz fałszywe

var isLoggedIn = false;


if(isLoggedIn) {
	console.log("Zalogowano");
} else {
	console.log("Nie zalogowano");
}

	//Watości fałszywe
		// false
		// 0
		// ""
		// null
		// undefinded
		// NaN

var value = '0 ';

if(value) {
	console.log('Ta wartość nie jest fałszywa');
}
*/





/*
// 6. null vs. undefined

var yourName = null;


var person = {
	name: null
};
*/




/*
// 7. Operatory artmetyczne

var number1 = 2;
var number2 = 4;

var res1 = number1 + number2;

// Konkatenacja
var res2 = 2 + '5'; 

// Odejmowanie
var res3 = number1 - number2;

// Mnożenie
var res4 = number1 * number2 * '1';
var res5 = 5 * 'asfd';

// Dzielenie
var res6 = number1 / number2;

// Modulo (reszta z dzielenia)
var res7 = 6 % 3;
var res8 = 6 % 4;

// Kolejność działań
var res9 = 2 + 2 * 4; 
var res10 = (2 + 2) * 4;

// Przypisanie z obliczeniem
// number2 = number2 + 2;
number2 += 2; // +=, -=, *=, /=, %=
*/



/*
// 8. Operatory porównania

var number = 20;

if(number == 20) {
	console.log('Liczba jest równa 20');
}


if(undefined === null) {
	console.log('undefined jest równe null');
}


if(number !== '20') {
	console.log('Liczba nie jest równa 20');
}


if(number > 10) {
	console.log('Liczba jest większa od 10');
}


if(number < 10) {
	console.log('Liczba jest mniejsza od 10');
}


if(number <= 20) {
	console.log('Liczba jest mniejsza lub równa 20');
}


if(number >= 20) {
	console.log('Liczba jest większa lub równa 20');
}


var number2 = 6;
var isEven = (number2 % 2) === 0;
*/




/*
// 8. Operatory logiczne

var number = 10;

console.log(number < 20 && number > 5);



var firstName = 'Maciej';
var lastName = 'Nowak';

if(firstName === 'Jacek' || lastName === 'Nowak'){
	console.log('Jacek lub Nowak');
}



var name = 'Ania';

if(!name) {
	console.log('Imię nie zostało podane');
} else {
	console.log('Witaj ' + name + '!');
}

*/


/*

// 9. Inkrementacja i dekrementacja

var number1 = 0,
	number2 = 5;


//console.log(number1++);
console.log(++number1);


//console.log(number2--);
//console.log(--number2);
console.log(number2 - 1);

*/




/* *********************************  INSTRUKCJE WARUNKOWE  ********************************* */

/*
// 2. Instrukcja if - jeżeli

	// var firstName = '';

	// if(firstName !== '') {
	// 	console.log('Cześć ' + firstName);
	// } else {
	// 	console.log('Cześć, Nieznajomy');
	// }

var number = 40;

if(number < 30) {
	console.log('Liczba jest mniejsza od 30');
} else if(number > 10) {
	console.log('Liczba jest większa od 10');
} else {
	console.log('Liczba nie jest ani mniejsza od 30 ani większa od 10');
}
*/



/*
// 3. Skrócony zapis if

 var firstName = '';
 var userName;


	// if(firstName) {
	// 	userName = firstName;
	// } else {
	// 	userName = 'Nieznajomy';
	// }


userName = firstName ? firstName : 'Nieznajomy';


 console.log('Witaj, ' + userName);

 */



/*
// 4. Instrukcja switch

var number = 4;

var word = '';

	// if(number === 1) {
	// 	word = 'jeden';
	// } else if(number === 2) {
	// 	word = 'dwa';
	// } else if(number === 3) {
	// 	word = 'trzy';
	// } else {
	// 	word = 'Wartość nieznana';
	// }

switch(number) {
	case 1:
		word = 'Jeden';
		break;
	case 2:
		word = 'dwa';
		break;
	case 3:
		word = 'trzy';
		break;
	default:
		word = 'Wartość nieznana';
}


console.log('Wartość to ' + word + '.');
*/





/* *********************************  PĘTLE  ********************************* */

/*
// 2. Pętla while

	// var number = 10;

	// while(number > 0) {
	// 	console.log(number);
	// 	number--;
	// }

var secretNumber = 2;

while(prompt('Podaj liczbę') != secretNumber) {
	alert("Nie trafiłeś!");
}

alert('Brawo!');
*/




// 3. Pętla do while - wykonuje kod a następnie sprawdza warunek

/*
var number = 20;


do {
	console.log(number);
	number++
} while(number > 30);
*/



// 4. Pętla for 

/*
for(var i = 0; i <=10; i++) {
	console.log(i);
}

*/


/*
// 4. Pętla for in

var person = {
	'Imię': 'Maciej',
	'Nazwisko': 'Kowalski',
	'Wiek': 32
};

var person2 = {};


// for(var key in person) {
// 	console.log(key + ': ' + person[key]);
// }



for(var key in person) {
	person2[key] = person[key];
}

console.log(person2);
*/



/*
// 5. Przerywanie lub kontynuacja pętli

// for(var i = 0; i <= 20; i++) {

// 	if( (i % 2) === 0 ){
// 		console.log(i);
// 	}

// }


// for(var i = 0; i <= 20; i++) {

// 	if( (i % 2) === 0 ){
// 		continue;

// 	}

// 		console.log(i);	
// }


var numbers = [2, 3, 6, 20, 0, 52, 11];

var containsZero = false;



for(var i = 0; i < numbers.length; i++) {

	console.log(numbers[i]);

	if(numbers[i] === 0) {
		containsZero = true;
		break;
	}
}

*/






/* *********************************  OBIEKTY  ********************************* */

/*
// 2. Tworzenie obiektów i praca z właścowościami

var person = {

	firstName: 'Tomasz',
	lastName: 'Kowalski',
	age: 32,

};

person.job = 'Programista';

delete person.age;

console.log(person);


var person2 = person;

person2.age = 23;
*/



/*
// 2. Funkcje jako metody obiektów

var person = {
	firstName: 'Maciej',
	lastName: 'Kowalski',
	sayHello: function() {
		console.log('Cześć, mam na imię ' + this.firstName);
	},
	setFirstName: function(firstName) {
		this.firstName = firstName;
	}
};
*/



/*
// 3. Porównywanie obiektów

var person = {
 	firstName: 'Maciej',
 	lastName: 'Kowalski'
 };


var person2 = {
 	firstName: 'Maciej',
 	lastName: 'Kowalski'
 };


 var person3 = person2;


 console.log(person === person2);
 */






 /* *********************************  TABLICE  ********************************* */

/*
// 2. Tworzenie tablic jedno i wielowymiarowych

var numbers = [1, 3, 4, 5];


console.log (numbers[2]);

console.log (numbers.length);


var things = [{firstName: 'Anna'}, 2, 2 + 8];


var arrays = [[2, 3, 4], [4, 2, 1, ['Jan']]];
*/




/*
// 3. Dodawanie elementów do tablicy

var arr = [];


arr[0] = 'Kasia';
arr[1] = 'Tomek';

arr[arr.length] = 'Piotrek';

arr.push('Monika');

arr.unshift('Patryk');



console.log(arr.length);
*/




/*
// 4. Usuwanie elementów tablicy


var arr = ['Tomek', 'Ania', 'Jacek', 'Mariusz'];

console.log(arr.length);

arr.length = 2;
*/




/*
// 5. Sortowanie elementów tablicy

var arr = [5, 8, 1, 2, 1, 33, 23, 18, 4],
	arr2 = ['anita', 'Tomek', 'Ania', 'Andrzej', 'Mateusz', 'Kasia'];




console.log(arr);

arr.sort(function(a, b) {

	return a - b;

	// if(a < b) {
	// 	return -1;
	// } else if(a > b) {
	// 	return 1;
	// } else {
	// 	return 0;
	// }
});

console.log(arr);




console.log(arr2);

arr2.sort(function(a, b){

	if(a < b) {
		return -1;
	} else if(a > b) {
		return 1;
	} else {
		return 0;
	}

});
*/




/*
// 6. Używanie pętli na tablicach


// var numbers = [2, 3, 17, 32, 28, 9],
// 	text = "Wylosowane liczby to: ";
// var arrLength = numbers.length;


// for(var i = 0; i < arrLength; i++) {

// 	text += numbers[i];

// 	if(i !== arrLength - 1) {
// 		text += ', ';
// 	}

// }

//console.log(text);




var arr = [['Tomasz', 'Kowalski', 23], ['Maria', 'Nowak', 30], ['Jacek', 'Zielinski', 38]];


for(var i = 0; i < arr.length; i++){

	console.log('DANE');


	for(var j = 0; j < arr[i].length; j++) {

		console.log(arr[i][j]);

	}


	console.log('---------------');
}

*/

/*
// 7. Metody tablic

var arr = [2, 3, 17, 32, 28, 9, 67, 36, 1, 98];

	console.log(arr);


var half = arr.slice(4, 7);

//	console.log(half);

// console.log(arr.join(", "));


// console.log(arr.indexOf(101) !== -1);


//console.log(arr.concat(half));


arr.forEach(function(value, index, array) {

	//console.log(value);

});

var gt10 = arr.filter(function(value) {

	return value > 10;

});

//console.log(gt10);


var negativ = arr.map(function(value){

	return value * -1;

});


console.log(negativ);

*/






/* *********************************  FUNKCJE ********************************* */

/*
// 2. Tworzenie funkcji

var text = 'Cześć';

sayHello();


function sayHello(){

	console.log(text);

	console.log('Witaj!');

}

//sayHello();





var sayHello2 = function(){

	console.log('Cześć!');

};




var sayHello3 = function hello() {

	console.log(hello);

	console.log('Siema');

}
*/



/*
// 3. Zwracanie wartości

function sayHello() {

	return 'Witaj, ';

}

var hello = sayHello();



function makeArray() {

	var arr = [1, 2, 3]

	return arr;
}


function hi() {

	if(3 < 1) {
		return false;
	}

	console.log('Cześć');
}
*/



/*
// 4. Parametry funkcji


function square(num){

	return num * num;
}






var firstName = 'Tomasz';

var person = {
	firstName: 'Tomasz',
	lastName: 'Kowalski'
};



function sayHello(obj){

	obj.firstName = 'Piotr';

	return "witaj, " + obj.firstName + ' ' + obj.lastName;

}


console.log(sayHello(person));

*/


/*
// 5. Zakres zmiennych

function init() {

	var firstName = 'Maciej';


	function sayHello(text) {

		var lastName = 'Kowalski';

		console.log('Cześć ' + firstName + ' ' + lastName);
	}


}

init();


*/

/*
// 6. Zmienna arguments


function sum1(num1, num2){

	if(arguments.length === 2 && typeof num1 === 'number' && typeof num2 === 'number') {

		return num1 + num2;

	} else {

		return 'Podaj poprawne argumenty';
	}

}


//console.log( sum(2, 894) );


function sum() {

	var total = 0;

	for(var i = 0; i < arguments.length; i++) {

		total += arguments[i];
	}

	return total;
}


console.log( sum(2, 3, 4, 5) );

*/


/*
// 7. Funkcje anonimowe


(function() {

	var arr = [1, 45, 22, 31, 3];

		arr.sort(function(a, b) {

			return a - b;
		});




		function sayHello(text, getName) {

			var result = text + getName();

			return result;

		}


		console.log( sayHello('Witaj, ', function() {

			return 'Piotr';

		}) );


	})();

*/


/*
// 9. Wbudowane funkcje JavaScript


//eval('alert("Witaj");');

//console.log( isFinite(-Infinity) );

//console.log( isNaN( 2 * undefined) );

//console.log( parseFloat('20.6') );

//console.log( parseInt('20 zł') );



//alert('Witaj');

*/



 /* *********************************  WBUDOWANE OBIEKTY JAVASCRIPT  ********************************* */


/*
// 1. Obiekt String

var n = 'Ania';

var n1 = new String('Ania');

var n2 = String(32);


// console.log( typeof n2 );

// console.log( n.length );


console.log( n.length );

console.log( n[1] );

console.log( n.charAT(1) );

console.log( n.indexOf('Anna') );

console.log( n.replace('nia', 'nna') );

console.log( n.slice(0, 2) );

console.log( n.substr(0, 2) );

console.log( n.split(' ') );

console.log( n.toLowerCase() );

console.log( n.toUpperCase );

*/




/*
// 2. Obiekt Number

var number = 23;

var number2 = Number('23');

console.log( number2 );

// console.log( Number.MAX_VALUE );
// console.log( Number.MIN_VALUE );
// console.log( Number.NaN );
// console.log( Number.NEGATIVE_INFINITY );
// console.log( Number.POSITIVE_INFINITY );


console.log( Infinity === Number.POSITIVE_INFINITY );


console.log( number.toString(16) );

console.log( number.toFixed(2) );

*/




/*
// 3. Obiekt Boolean

var b = Boolean('');


console.log( b.valueOf() );

*/





/*
// 4. Obiekt Array

var arr = [];

var arr1 = new Array(1, 2);
*/




/*
// 3. Obiekt Function

function sayHello(firstName, lastName) {

	return firstName + ' ' + lastName;

}


//var f = new Function ('firstName', 'lastName', "return firstName + ' ' + lastName;");


function f(firstName, lastName) {

	arguments.callee.counter = arguments.callee.counter ? arguments.callee.counter : 1;

	return firstName + ' ' + lastName + ', funkcja wywołana po raz ' + arguments.callee.countner++; 

};


console.log( f.length );
*/




/*
// 6. Obiekt Math

//console.log(Math);

//console.log( Math.abs(-22.1) );

//console.log( Math.round(22.5234) );

//console.log( Math.ceil(22.02) );

//console.log( Math.floor(42.89) );

//console.log( Math.max(3, 5, 1, 6, 0) );

//console.log( Math.min(33, 123, 5, 10) );

//console.log( Math.round( Math.random() * 10 ) );
*/



/*
// 7. Obiekt Date

var d = new Date();

var d2 = new Date(123142744756354);

var d3 = new Date(2015, 0, 16, 12, 35, 55);



// console.log( d3.getFullYear() ); // rok

// console.log( d3.getMonth() ); // miesiąc

// console.log( d3.getDate() ); // dzień

// console.log( d3.getHours() ); // godzina

// console.log( d3.getMinutes() ); // minuty

// console.log( d3.getMilliseconds() ); // ms

// console.log( d3.getDay() ); // dzień tygodnia

// console.log( d3.getTime() ); //   


console.log( d3.toString() );
console.log( d3.toLocaleString() );

console.log ( d3.getDate() + '.' + ( d3.getMonth() + 1) + '.' + d3.getFullYear() );



d3.setFullYear(2020);
console.log( d3.getFullYear() );


var d4 = new Date('Fri Jan 16 2015 12:35:55 GMT+0100 (CET)');

*/


/*
// 8. Obiekt RegExp


// var regex = /a+/gi;

var regex = new RegExp('a+', 'ig');

var n = 'Ania';

console.log( n.replace(regex, 'p') );

console.log( regex.test('Ania') );
*/




 /* *********************************  OBSŁUGA WYJĄTKÓW  ********************************* */

/*
// 1. Blok try catch

function searchDb() {

	console.log('Otwieram połączenie')

	db.search();

	console.log('Zamykam połączenie')

}

try {

	searchDb();

} catch(e) {

	console.dir(e);

} finally {

	console.log('Zamykam połaczenie');

}
*/

/*
// 2. Zgłaszanie własnych błędów

function getData() {

	if(!type) {
		throw new Error('Nieprawidłowy typ');
	}

	return {
		firstName: 'Jan',
		lastName: 'Kowalski'
	};
}



function searchDb() {

	console.log('Otwieram połączenie.');

	console.log('Pobieram dane.');

	var data = getData();

	if(data === null) {

		throw new Error('Brak danych');
	}

	console.log('Zamykam połączenie.');

}

try {

	searchDb();

} catch(e) {

	console.log('Wystąpił błąd: ' + e.message);

} finally {

	console.log('Zamykam połaczenie.');

}


*/




/* *********************************  OBIEKTOWY MODEL DOKUMENTU ********************************* */



/* *********************************  OBIEKT WINDOW ********************************* */

/*
//1. Globalny obiekt window


//console.log(window);

function sayHello() {


	//window.message = 'Cześć!';
	message = 'Cześć!';
	

	//alert(message);
	//var con = confirm('czy wyrażasz zgodę?');
	var ans = prompt('Jak masz na imię?', 'Podaj swoje imię')

	console.log(ans);
}



sayHello();


console.log(message);
*/



/*
//2. Obiekt navigator


var isChrome = navigator.userAgent.match(/chrome/i);


console.log('Nazwa aplikacji: ' + navigator.appName);
console.log('Wersja aplikacji: ' + navigator.appVersion);
console.log('Ciąg User-Agent: ' + navigator.userAgent);
console.log('Platforma systemowa: ' + navigator.platform);
console.log('Język przeglądarki: ' + navigator.language);
console.log('Status online: ' + navigator.onLine);

*/



/*
//3. Obiekt screen

console.log('Rozdzielczość ekranu: ' + screen.width + 'x' + screen.height + 'px');
console.log('Maksymalna dostępna szerokość: ' + screen.availWidth + 'px');
console.log('Maksymalna dostępna wysokość: ' + screen.availHeight + 'px');
console.log('Głębia kolorów ekranu: ' + screen.colorDepth);
*/

/*
//3. Obiekt location

console.log(window.location);
*/




/*
//4. setTimeout i setInterval

// setTimeout(function() {

// 	 console.log('Witaj po 2 sekundach!');

// }, 2000);

// var timeout = setTimeout(function() {

// 	 console.log('Witaj po 2 sekundach!');

// }, 5000);

//clearTimeout(timeout);


var counter = 0,
	clock = null;

function tick(){

	if (counter <= 5){
		console.log(counter++);
	} else {
		clearInterval(clock);
	}

}


//clock = setInterval(tick, 1000);


counter = 0;

function tock() {

	if(counter <=5) {
		console.log(counter++);
		setTimeout(tock, 100);
	}

}

tock();

*/




/* *********************************  WYSZUKIWANIE ELEMENTÓW NA STRONIE ********************************* */

/*
//1. Metody przeszukiwania drzewa DOM

var container = document.getElementById('container');


var firstName = document.getElementByName('firstName')[0];


var paragraphs = document.getElementByTagName('p');


var texts = document.getElementByClassName('text');


var h1 = document.querySelector('h1');


var form = document.querySelector('#myForm');
var submit = form.querySelector("button[type = 'submit']");


var links = document.querySelectorAll('a');



document.all;
document.forms;
document.images;
document.links;



var firstForm = document.forms[0];
*/













































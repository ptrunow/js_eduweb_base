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



/* *********************************  TWORZENIE NOWYCH ELEMENTÓW HTML ********************************* */

/*
//1. Tworzenie elementów HTML


var div = document.createElement("<div>");

var img = new Image();

var text = document.createTextNode('treść');

*/

/*
//2. Wstawianie i usuwanie elementów ze strony

var list1 = document.querySelector('#list1'),
	list2 = document.querySelector('#list2');

var li = document.createElement('li'),
	text = document.createTextNode('treść');


li.appendChild(text);

// list1.appendChild(li);

// list1.insertBefore(li, list1.querySelector('li:nth-child(2)'));

// list1.appendChild(list1.querySelector('li:first-child'));

//list2.removeChild(list2.querySelector(':last-child'));

list1.replaceChild(li, list1.querySelector(':last-child'));
*/

/*
//3. Tworzenie fragmentu dokumentu

var list = document.getElementById('list');

// for(var i=0; i <=5; i++){

// 	var li = document.createElement('li');

// 	li.appendChild(document.createTextNode('Nowy elem listy ' + i));

// 	list.appendChild(li);

// }


var dc = document.createDocumentFragment();

for(var i=0; i <=5; i++){

	var li = document.createElement('li');

	li.appendChild(document.createTextNode('Nowy elem listy ' + i));

	dc.appendChild(li);
}

list.appendChild(dc);
*/

/*
//4. Relacje między dokumentami


var list = document.querySelector('#list');


var children = list.childNodes;
var elementChildren = list.children;


var first = list.firstChild;
var firstElement = list.firstElementChild;


var last = last.lastChild;
var lastElement = list.lastElementChild;


var second = firstElement.nextSibling;
var lastButOneElement = lastElement.previousElementSibling;


var parent = second.parentNode;


secondElement.parentNode.removeChild(secondElement);

*/


/*
//5. Praca z atrybutami


var link = document.querySelector('.link'),
	href = link.getAttribute('href');



link.setAttribute('href', 'http://eduweb.pl');

link.removeAttribute('class');



var button = document.querySelector('button');

button.setAttribute('disabled', true);
button.removeAttribute('disabled');



var img = document.createElement('img');

img.src = 'http://www.noordinaryhomestead.com/wp-content/uploads/2011/09/ayla-wanna-play.jpg';

document.body.appendChild(img);



var attrs = img.attributes;
*/

/*
//5. Praca z klasami CSS

var link = document.querySelector('.link');

console.log ( link.className );


link.classList.add('red', 'green');

link.classList.remove('green');

link.classList.toggle('green'); 


console.log(link.classList.contains('red'));
*/

/*
//5. Inne własciwości elementów

var list = document.querySelector('#list');

var first = list.firstChild;

var firstElement = list.firstElementChild;

var last = last.lastChild;
*/



/* *********************************  PRACA Z TREŚCIĄ ELEMENTÓW HTML ********************************* */

/*
//1. innerHTML, outerHTML oraz textContent

var container = document.querySelector('#container'),
para = document.querySelector('#container p');

// console.log( container.innerHTML );

// console.log( para.textContent ); 



// //para.innerHTML = '<b>nowa treść</b>';

para.textContent = 'Nowa treść';


console.log(container.outerHTML);

container.outerHTML = "<div id='container'><p>Treść</p></div>";

container.id = 'container2';

document.body.appendChild(container);
*/

/*
//2. Wartości pól formularza

var form = document.querySelector('#myForm');


console.log( form.firstName.value );

console.log( form.lastName.value );


form.lastName.value = 'Kowalski';

form.message.value = 'Treść';

console.log(form.subject.value);



form.subject.length = 2;

console.log( form.remember.checked );

console.log(form.querySelector("input[type='submit']").value);

*/



/* *********************************  MANIPULACJA ZE STYLAMI CSS ELEMENTÓW ********************************* */

/*
//1. Praca ze stylami CSS elementów

var h1 = document.querySelector('h1'),
	
	container = document.querySelector('#container'),

	p = container.querySelector('p'),

	link = container.querySelector('a');



h1.style.color = '#ff0000';
h1.style.fontSize = '20px';


container.style.cssText = 'width: 600px; margin: 0 auto;';


for(var i = 0; i < p.length; i++) {

	p[i].style.lineHeight = '30px';

}


link.style.display = 'block';


//console.log(parseInt(container.style.width));


console.log(window.getComputedStyle(h1).display);

*/



/* *********************************  GEOMETRIA ELEMENTÓW HTML ********************************* */

/*
//1. Współrzędne położenia elementu

var container = document.querySelector('#container'),
	box = container.querySelector('.box');


console.log(box.offsetTop);

console.log(box.offsetLeft);

console.log(box.offsetParent);



var pos = box.getBoundingClientRect();

console.log(pos);



console.log(document.elementFromPoint(400,200));


*/


/*
//2. Wymiary elementu

var container = document.querySelector('#container'),
	box = container.querySelector('.box'),
	link = container.querySelector('a');


var containerDim = container.getBoundingClientRect();

console.log(box.getBoundingClientRect().width);

console.log(box.offsetWidth);


console.log(container.clientWidth);

console.log(container.clientHeight);



console.log(box.scrollWidth);

console.log(box.scrollHeight);



console.log(link.offsetWidth);



console.log(window.innerWidth);

console.log(window.innerHeight);

*/

/*
//3. Pozycje suwaków

var container = document.querySelector('#container'),
	box = container.querySelector('.box');



console.log(box.scrollTop);

console.log(box.scrollLeft);



window.scrollTo(0, 200);

*/



/* *********************************  ZDARZENIA DOM ********************************* */


//1. Czym są zadrzenia?

/*
//2. Przypisywanie i usuwanie zdarzeń dla elementów

var btn2 = document.querySelector('#btn2'),
btn3 = document.querySelector('#btn3');



function sayHello() {

	alert('Hej!');
}



btn2.onclick = sayHello;



btn3.addEventListener('click', sayHello, false);
btn3.addEventListener('click', function(){

	alert('Witaj!');

}, false);




btn2.onclick = null;


btn3.removeEventListener('click', sayHello, false);
*/


/*
//3. Obiekt event i target

var btn = document.querySelector('#btn');

btn.onclick = function(e) {

	console.log(this);

	console.log(e.target);

	e.target.setAttribute('disabled', true);

};


document.body.onclick = function(e) {

	console.log(this);

	console.log(e.target);

}

*/

/*
//4. Czym jest bubbling?

var body = document.body,
	btn = document.querySelector('#btn');


body.addEventListener('click', function(e) {

	console.log('Kliknąłeś w body');

}, false);




btn.addEventListener('click', function(e){

	e.stopPropagation();
	e.stopImmediatePropagation();

	console.log('Kliknąłeś w przycisk');

}, false);



btn.addEventListener('click', function(e) {

	console.log('znów kliknąłeś w przycisk');

}, false);

*/

/*
//4. Czym jest capturing?


var body = document.body,
	btn = document.querySelector('#btn');




body.addEventListener('click', function(e) {

	console.log(e.eventPhase);

	console.log('Kliknąłeś w body');

}, true);


btn.addEventListener('click', function(e){

	console.log(e.eventPhase);

	console.log('Kliknąłeś w body ponownie');

}, false);


btn.addEventListener('click', function(e) {

	console.log(e.eventPhase);

	console.log('Klinkąłeś w przycisk');

}, false);

*/

/*
//5. Zapobieganie domyślnej akcji przeglądarki

var form = document.querySelector('#myForm'),
	link = document.querySelector('#showMessage');



form.addEventListener('submit', function(e) {

	if(this.firstName.value === "") {

		e.preventDefault();
		alert('Wpisz swoje imię');
	} 

}, false);



form.querySelector('#firstName').addEventListener('keypress', function(e){

	if(String.fromCharCode(e.charCode) === 'a') {

		e.preventDefault();
	}

}, false);




link.onclick = function(e) {

	e.preventDefault();

	var message = document.querySelector(e.target.hash);

	message.style.display = 'block';

	return false

};

*/

/*
//6. Zdarzenie DomContentLoaded i load

window.addEventListener('load', function(e){

	var img = document.querySelector('img');

	console.log('Wymiary obrazka to: ', img.offsetWidth + 'x' + img.offsetHeight + 'px');

})



document.addEventListener('DOMContentLoaded', function(e) {
	
	// var h1 = document.querySelector('h1');

	// console.log(h1.textContent);

	var img = document.querySelector('img');

	console.log('Wymiary obrazka to: ', img.offsetWidth + 'x' + img.offsetHeight + 'px');


}, false);

*/



/* *********************************  DEBUGOWANIE KODU ********************************* */


//1. Typy błędów w JavaScript


//2. Debugowanie kodu JavaScript



/* *********************************  PRAKTYCZNY 1 - LOSOWANIE DUŻEGO LOTKA ********************************* */
/*

(function(){




	var btn = document.querySelector('#getNumbers'),
	output = document.querySelector('#showNumbers');



	function getRandom(min, max) {

		return Math.round(Math.random() * (max - min) + min);

	}



	function showRandomNumbers() {


		var numbers = [],
		random;


		for(var i = 0; i < 6; i++) {

			random = getRandom(1, 49);



			while(numbers.indexOf(random) !== -1) {

				random = getRandom(1, 49);
				console.log('Powtórzyła się liczba ' + random);

			}


			numbers.push(random);

		}

		output.value = numbers.join(', ');
		//console.log(numbers);

	}


	btn.onclick = showRandomNumbers;


})();

*/


/* **************************  PRAKTYCZNY 2 - SORTOWANIE TABELI PO KOLUMNACH CZ. 1 i 2 *************************** */
/*
(function() {

	var table = document.querySelector('#myTable'),
	ths = table.querySelectorAll('thead th'),
	trs = table.querySelectorAll('tbody tr');


function makeArray(nodeList) {

	var arr = [];

	for(var i = 0; i < nodeList.length; i++){

		arr.push(nodeList[i]);
	}

	return arr;

}

function clearClassName(nodeList){

	for(var i = 0; i < nodeList.length; i++){
		nodeList[i].className = '';
	}

}



function sortBy(e) {

	var target = e.target,
		thsArr = makeArray(ths),
		trsArr = makeArray(trs),
		index = thsArr.indexOf(target),
		df = document.createDocumentFragment(),
		order = (target.className === '' || target.className === 'desc') ? 'asc' : 'desc';

		console.log(order);


	clearClassName(ths);


	trsArr.sort(function(a, b){

		var tdA = a.children[index].textContent,
			tdB = b.children[index].textContent;


		if(tdA < tdB) {
			return order === 'asc' ? -1 : 1;
		} else if(tdA > tdB){
			return order === 'asc' ? 1 : -1;
		} else {
			return 0;
		}

	});

	trsArr.forEach(function(tr){

		df.appendChild(tr);

	});


	target.className = order;




	table.querySelector('tbody').appendChild(df);

}


for(var i = 0; i < ths.length; i++) {

	ths[i].onclick = sortBy;

}



})();


*/



/* **************************  PRAKTYCZNY 3 - WALIDACJA FORMULARZA CZ. 1 i 2 *************************** */
/*
(function(){

	var form = document.querySelector('#myForm'),
	fields = form.querySelectorAll('[data-error]');




	function isNotEmpty(field){

		return field.value !== '';
	}



	function isAtLeast(field, min){

		return field.value.length >= min;

	}



	function isEmail(field){

		return field.value.indexOf('@') !== -1;

	}



	function displayErrors(errors) {

		var ul = document.querySelector('ul.errors');

		if(!ul){
			ul = document.createElement('ul');

			ul.classList.add('errors');
		}


		ul.innerHTML = '';



		errors.forEach(function(error){
			var li = document.createElement('li');

			li.textContent = error;

			ul.appendChild(li);
		});


		form.parentNode.insertBefore(ul, form);

	}





	form.addEventListener('submit', function(e) {

		e.preventDefault();

		var errors = [];


		for (var i = 0; i < fields.length; i++) {
			
			var field = fields[i],
				isValid = false;

			if(field.type === 'text'){
				isValid = isNotEmpty(field);

			} else if(field.type === 'email'){
				isValid = isEmail(field);

			} else if(field.type === 'select-one'){
				isValid = isNotEmpty(field);

			} else if(field.type === 'textarea'){
				isValid = isAtLeast(field, 2);

			}


			if(!isValid){
				field.classList.add('error');
				errors.push(field.dataset.error);
			} else {
				field.classList.remove('error');
			}

		}

if(errors.length){
	displayErrors(errors);
} else {
	form.submit();
}



		console.log(errors);

	}, false);

})();

*/

/* **************************  PRAKTYCZNY 4 - POWRÓT DO GÓRY STRONY *************************** */

/*
(function(){


	function createButton() {

		var button = document.createElement('button');

		button.classList.add('backToTop', 'hidden');
		button.textContent = '^';
		document.body.appendChild(button);

		return button;

	}


	var button = createButton();


	function animateScroll() {

		if(document.body.scrollTop > 0) {

			window.scrollBy(0, -5);

			setTimeout(animateScroll, 0.1);

		}


	}


	button.addEventListener('click', function(e) {

	e.stopPropagation();

	animateScroll();


	}, false);



	window.addEventListener('scroll', function(e) {

		if(document.body.scrollTop >= 200) {

			button.classList.remove('hidden');

		} else {

			button.classList.add('hidden');
		}

	}, false);

})();



/* **************************  PRAKTYCZNY 5 - TOOLTIP *************************** */

/*
(function() {


	var globalTooltip = null;




	function assignEvents(elems, type, event) {

		for (var i = 0; i < elems.length; i++) {

			elems[i].addEventListener(type, event, false);

		}

	}



	function createTooltip(text, options) {

		var tooltip = document.createElement('div');

		tooltip.className = 'tooltip hidden';
		tooltip.appendChild(document.createTextNode(text));
		document.body.appendChild(tooltip);

		tooltip.style.left = (options.x + options.w / 2) - (tooltip.offsetWidth / 2) +'px';
		tooltip.style.top = (options.y - tooltip.offsetHeight) - 15 + 'px';
		

		tooltip.classList.remove('hidden');

		globalTooltip = tooltip;


	}



	function showTooltip(e){

		var options = {
			w: e.target.offsetWidth,
			x: e.target.offsetLeft,
			y: e.target.offsetTop
		};



		var text = e.target.getAttribute('title');

		createTooltip(text, options);

		e.target.removeAttribute('title');

	}



	function removeTooltip(e){

		e.target.setAttribute('title', globalTooltip.textContent);

		globalTooltip.parentNode.removeChild(globalTooltip);

	}



	function init(elems){

		assignEvents(elems, 'mouseenter', showTooltip);

		assignEvents(elems, 'mouseleave', removeTooltip);

	}



	window.t00ltip = init;

})();

*/


/* **************************  TIPS & TRICKS W JavaScript *************************** */

/* Trick 1 - Konwersja na prawdę/fałsz */
/*
var txt = '';
var b = Bollean(txt);

if(!!txt === false) {
	console.log('fałsz');
}
*/


/* Trick 2 - Warunkowe przypisywanie wyrażeń */
/*
function sayHello(name) {

	name = name || "Nieznajomy";

//	name = name ? name : 'Nieznajomy';

	alert('Witaj ' + name);

}

sayHello("Tomek");
*/


/* Trick 3 - Generowanie powtarzającego się ciągu znaków */
/*
 var text = '';

for(var i = 0; i < 100; i++) {

	text += '-';

}

console.log(text);

var text = (new Array(101)).join('-');

console.log(text); 
*/


/* Trick 4 - Odwrócenie tekstu */
/*
var text = 'Uczę się JavaScriptu z Eduweb.pl!';
var reverse = '';


// for(var i = text.length - 1; i >= 0; i--) {

// 	reverse += text[i];

// }

// console.log(reverse);


console.log( text.split('').reverse().join(''));
*/


/* Trick 5 - Warunkowe wywoływanie funkcji */
/*
function sayHello() {
	alert('Hello!');
}

*/


/* Trick 6 - Zwracanie wielu wartości z funkcji */
/*
function getValues() {

	var obj = {
		firstName: 'Anna',
		lastName: 'Kowalska'
	};

	var id =12331;

	return [obj, id];

}

var values = getValues();
	data = values[0],
	id = values[1];


console.log(data);
console.log(id);
*/


/* Trick 7 - Etykietowanie pętli */
/*
var people = [

{
	firstName: 'Maciej',
	lastName: 'Kowalski',
	numbers: [47, 49, 26, 96, 13, 1] 
},

{
	firstName: 'Maria',
	lastName: 'Antonik',
	numbers: [86, 14, 11, 24, 1, 5] 
},

{
	firstName: 'Andrzej',
	lastName: 'Nowak',
	numbers: [23, 1, 5, 3, 87, 34] 
},

{
	firstName: 'Karolina',
	lastName: 'Długopolska',
	numbers: [56, 4, 23, 8, 75, 8] 
},

{
	firstName: 'Krzysztof',
	lastName: 'Mariańczyk',
	numbers: [6, 45, 9, 23, 0, 34] 
},
];


var has5 = false;

mainLoop: for(var i = 0; i < people.length; i++) {

	var numbers = people[i].numbers;

	for (var j = 0; j < numbers.length; j++) {
		if(numbers[j] === 5) {
			has5 = true;
			console.log(5);
			break mainLoop;
		}
	}

}

console.log(has5);
*/


/* Trick 8 - Przetasowanie tablicy */
/*
var arr = [1, 5, 34, 71, 173, 98, 6, 7, 345, 32, 96, 6, 5, 2, 2, 2];

console.log(arr);

arr.sort(function(a, b) {

	var random1 = Math.round( Math.random() * (10 - 1) + 1 ),
		random2 = Math.round( Math.random() * (10 - 1) + 1 );

		return random1 - random2;

});

console.log(arr);
*/


/* Trick 9 - Powiększenie pierwszej litery tekstu */
/*
function capitalize(text) { 

	return text.charAt(0).toUpperCase() + text.slice(1);
}


console.log(capitalize('kasia'));
*/


/* Trick 10 - Porównanie dwóch dat */
/*
var date1 = new Date(2015, 3, 21),
	date2 = new Date(2015, 4, 21);


console.log( date1.getTime() > date2.getTime() );
console.log( date1.getTime() < date2.getTime() );
console.log( date1.getTime() === date2.getTime() );
*/



































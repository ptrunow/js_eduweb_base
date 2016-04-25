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


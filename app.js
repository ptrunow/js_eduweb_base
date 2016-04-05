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



































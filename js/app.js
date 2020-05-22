'use strict';

//	First task (Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.)

// let firstNumber = prompt('Введите любое число', 999);
// let secondNumber = prompt('Введите ещё одно любое число', 888);

// function comparisonOfNumbers() {
// 	if (firstNumber < secondNumber) {
// 		alert('➡➡➡ -1 ⬅⬅⬅');
// 	}else if (firstNumber > secondNumber) {
// 		alert('➡➡➡ 1 ⬅⬅⬅');
// 	}else {
// 		alert('➡➡➡ 0 ⬅⬅⬅');
// 	}	
// }

// comparisonOfNumbers();






//	Second task (Написать функцию, которая вычисляет факториал переданного ей числа.)

// let randomNumber = prompt('Введите любое число', 999);

// function factorialNumber() {

// 	let result = 1;
// 	for (let i = 1; i <= randomNumber; i++) {
// 		result *= i; };
//  	alert(result);
// }

// factorialNumber();







//	Third task (Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.)

// function threeRandomNumbers() {

// let firstRandomNumber = prompt('Введите три любые числа, первое из них:', '8-800-555-35-35');
// let secondRandomNumber = prompt('Введите три любые числа, второе из них:', 999);
// let thirdRandomNumber = prompt('Введите три любые числа, третье из них:', 777);

// let result = (firstRandomNumber + secondRandomNumber + thirdRandomNumber);

// alert(result);
// }

// threeRandomNumbers();






//	Fourth task (Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.)

// function areaOfTheFigure() {

// 	let firstSide = prompt('Введите ширины фигуры в см:', 123);
// 	let secondSide = prompt('Введите высоту фигуры в см:', 321);

// 	if (firstSide <= 0 || firstSide == null) {
// 		alert('Площадь фигуры составит ' + Number(secondSide) * Number(secondSide) + ' квадратных сантиметров.');
// 	}else if (secondSide <= 0 || secondSide == null) {
// 		alert('Площадь фигуры составит ' + Number(firstSide) * Number(firstSide) + ' квадратных сантиметров.');
// 	}else {
// 		alert('Площадь фигуры составит ' + Number(firstSide) * Number(secondSide) + ' квадратных сантиметров.');
// 	}
// }

// areaOfTheFigure();





//	Fifth task(Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.)


// let hours = prompt('Введите количество часов', 123);
// let minutes = prompt('Введите количество минут', 321);
// let seconds = prompt('Введите количество секунд', 123);

// function sum() {
// 	let result = ((Number(hours) * 60 * 60) + (Number(minutes) * 60) + Number(seconds));
	
// 	alert('Всего секунд: ' + result);
// }
 
//  sum();





//	Sixth task (Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.)


let hours = prompt('Введите количество часов', 12);
let minutes = prompt('Введите количество минут', 15);
let seconds = prompt('Введите количество секунд', 30);

function someTime(){

	if (hours == 0 || hours == null) {
		hours = '00';
	};
	if  (minutes == 0 || minutes == null) {
		minutes = '00';
	};
	if  (seconds == 0 || seconds == null) {
		seconds = '00';
	}

	alert(hours + " : " + minutes + " : " + seconds);
}

someTime();
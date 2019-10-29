//adding the value to js
const one = document.getElementById('one').value = 1;
const two = document.getElementById('two').value = 2;
const three = document.getElementById('three').value = 3;
const four = document.getElementById('four').value = 4;
const five = document.getElementById('five').value = 5;
const six = document.getElementById('six').value = 6;
const seven = document.getElementById('seven').value = 7;
const eight = document.getElementById('eight').value = 8;
const nine = document.getElementById('nine').value = 9;
const ten = document.getElementById('zero').value = 0;
const remove = document.getElementById('remove').value = 'remove';
const bspace = document.getElementById('bspace').value = 'bspace';
const divide = document.getElementById('divide').value = 'divide';
const value = document.getElementById('value').value = 'value';
const multiply = document.getElementById('multiply').value = 'multiply';
const minus = document.getElementById('minus').value = 'minus';
const plus = document.getElementById('plus').value = 'plus';
const point = document.getElementById('point').value = 'point';
const result = document.getElementById('result').value = 'result';


//example of the command
const array = [one, two, divide, six, result, remove];

//getting special input location
const divideSearch = array.indexOf(divide);
const resultSearch = array.indexOf(result);
const removeSearch = array.indexOf(remove);

//testing the array items
let i = array.forEach(myFunction)

function myFunction(item) {
    console.log(item);
}


 





















//[one, two, "devide", six, result, remove]
//1. search the "devide"
//2. write the number before (ex dev=3; list[0], list[1], list[2])
//3. do the same after
//4. search for result
//5. if result is invoked before anothe function, return the value
//6. invoke remove to break


//adding the command
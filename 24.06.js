//Дано слово. Если первая буква равна последней

const str = 'finger';
const result = (str[0] === str[str.length -1])? 'equal': 'not equal';

//2. Функция принимает неотрицательное число n 
// и возвращает массив чисел от 1 до n

function fillArray(n) {
    let arr = [];
      if (n) for (let i = 1; i <= n;) arr.push(i++);
      return arr;
}

//3. Напишите функцию, которая принимает 
//неотрицательное число n и возвращает сумму чисел от 1 до n

function sum(n){
    let sum = 0;
      for (let i = 1; i <= n; i++) {
        sum += i;
      }
      return sum;
    }

//4. написать функцию, которая принимает аргумент (число) 
//и возвращает его последнюю цифру.

function lastDigit(number){
    return + number.toString().slice(number.toString().length-1, 
    number.toString().length)
    }


// 5. функция принимает два числа
// и возвращает массив чисел, включая эти два числа
  
function fillArray(n, m){
    let array = [];
   for (let i = n; i <= m; i++) array.push(i);
  
   return array;
 }

 // 6. функция принимает аргумент
 // и возвращает количество цифр в этом числе

 function numberOfDigits(number){
    let nCh = String(number);
    return nCh.length 
    }
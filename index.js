// PARA ESTE EJERCICIO SE PUEDE UTILIZAR SOLO PUBLIQUE FOR O WHILE

// Crea un array vacío llamado `stack`
const stack = [];
// Crea un array `numbers` con los números del 1 al 5 in orden ascendente
const numbers = [1, 2, 3, 4, 5];
// La función multiplyByTwo tiene que devolver un array con los números multiplicados por 2 de cada elemento del array `numbers`
function multiplyByTwo(numbers) {
  // Aquí va tu código
  const doubleArray = [];
  for (let i = 0; i < numbers.length; i++) {
    doubleArray[i] = numbers[i] * 2;
  }
  return doubleArray;
}

// La función evenNumbers tiene que devolver los números pares del array `numbers`
function evenNumbers(numbers) {
  // Aquí va tu código
  const evenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenArray.push(numbers[i]);
    }
  }
  return evenArray;
}

// La función numbersBackwards tiene que devolver los números del array `numbers` en orden inverso
function numbersBackwards(numbers) {
  // Aquí va tu código
  const reverseArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reverseArray.push(numbers[i]);
  }
  return reverseArray;
}

// La función `sum` tiene que devolver la suma de todos los números del array `numbers`
function sum(numbers) {
  // Aquí va tu código
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// La función `average` tiene que devolver el promedio de todos los números del array `numbers`
function average(numbers) {
  // Aquí va tu código
  let sum = 0;
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  average = sum / numbers.length;
  return average;
}

// La función `biggestPrime` tiene que devolver el número primo más grande de los primeros 100 números
// El parámetro numbers es el número 100
function biggestPrime(numbers) {
  // Aquí va tu código
  defaultPrime = -1 // this is worse case smallest # for my record if there is nothing
  for (let i = 2; i <= numbers; i++) {
    let isPrime = true;
  for (let w = 2; w < i; w++) {
    if (i % w === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    largestPrime = i;
    }
  }
return largestPrime;
}

//this above was very hard!!! ugh!  Is this correct?



// Crea una variable person y asígnale un objeto vacío

// Agrega una propiedad `name` al objeto y asígnale "Jorge" como valor

// Agrega una propiedad `lastName` al objeto y asígnale "Gonzalez" como valor

// Agrega una propiedad `birthYear` al objeto y asígnale 1995 como valor

// Agrega una función `getFullName` al objeto que devuelva el nombre completo

// Agrega una función `getBirthYear` al objeto que devuelva la edad (asumiendo que es el año 2023)

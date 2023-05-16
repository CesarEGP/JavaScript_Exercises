/* console.log("hola mundo!");
console.log(12 == "12");

/* condicionales */
/* if */
/* const edad = 23;

if (edad <= 30) {
    console.log("tas chivolex");
} else {
    console.log("tas abuelo");
} */

/* condicionales anidados */
/* switch */
/* let dia = "MArtEs";
switch (dia.toLowerCase()) {
    case "lunes":
        console.log("es Lunes")
        break;
    case "martes":
        console.log("es Martes")
        break;
    case "miercoles":
        console.log("es Miercoles")
        break;
    case 'jueves':
        console.log("es Jueves")
        break;
    case 'viernes':
        console.log("es Viernes")
        break;
    case 'sabado':
        console.log("es Sabado")
        break;
    case 'domingo':
        console.log("es Domingo")
        break;
    default:
        console.log("no es un dia de la semana")
        break;
} */

/* condicionales */
/* for(let numero =0; numero <= 10; numero++){
    console.log(numero)
}  */

// Arreglo de objetos "persona"
/* const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 32 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Ana", edad: 27 }
  ]; */

// Función de comparación para ordenar por la cantidad de años
/*   function compararPorEdad(persona1, persona2) {
    return persona1.edad - persona2.edad;
  } */

// Ordenar el arreglo de objetos por la cantidad de años
/*   personas.sort(compararPorEdad); */

// Imprimir el arreglo ordenado
/*   console.log(personas); */

/* let num1 = '10';
let num2 = Number(num1); // convertir cadena en número
console.log(typeof num2 +'el dato de num2 es :'+{$num2}); // 'number' */

/* sintaxis y funciones */

/* let nombre = 'juan';
function saludar(){
    let edad = 30;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);    
}
saludar(); */

/* arreglos */

/* let numeros = [1,2,3,4,5,6,7,];
let numerosx2 = numeros.map(function(s){
    return s*2;
});

console.log(numeros);
console.log(numerosx2); */

/* funcion map basico */

/* let calificaciones = [12,13,19,11,09,12,12,14];

let aprobados = calificaciones.map(function(recorredor){
    if(recorredor>=12){
        return recorredor;
    }else{
        return `desaprobado`;
    }    
});

console.log(aprobados); */

/* let animalesPequeños = [`tucan`,`picaflor`,`pato`,`pollo`,`perro`,]
let animalesconAlas = animalesPequeños.map(function(index){
    if (index === 'perro'){
        return `este animal no tiene alas`;
    }else{
        return index;
    }
});
console.log(animalesconAlas); */

/* let numeros = [12,13,19,20,221,212,492,322,1299,123187,1230912389,123727,93876387];
let numerosPar = numeros.map(function(index){
    if(index%2===0){
        return index;
    }else{
        return `${index} no es par`;
    }
});

console.log(numerosPar); */

/* let numeros = [2, 123, 122, 123, 3, 23, 12, 15, 18];
let numerosPot2=numeros.map(function(index){
    return index*index;
});

console.log(numerosPot2); */


/* funciones flecha */

/* let cuadrado = numero => numero * numero;
let num = cuadrado(12);
console.log(num); */

/* funciones flecha con codicionales */

/* let numPar = num => num % 2 === 0 ? `el numero: ${num} es par` : `el numero: ${num} es impar`;
let numero=13;
console.log(numPar(numero)); */

/* let edadMayor = edad => edad >= 18 ? `Tienes mas de 18 años y eres mayor` : `Tienes menos de 18 y eres chivolo`;
let edad = 15;
console.log(edadMayor(edad)); */

/* con 2 argumentos */

/* let Suma2n = (numero1, numero2) => numero1 + numero2;
let primerN = 12;
let segundN = 47;
console.log(Suma2n(primerN, segundN)); */

/* con 3 argumentos */

/* let Promedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3)/3;
let nota1 = 12;
let nota2 = 13;
let nota3 = 15;
console.log(Promedio(nota1, nota2, nota3)); */


/* funcion definida */

/* function esPar(numero) {
    if (numero % 2 === 0) {
        return `el numero: ${numero} es par`;
    } else {
        return `el numero: ${numero} es impar`;
    }
}
let numero = 23;

console.log(esPar(numero)); */



/* 1.Ejercicio de bucles:
Escribe un bucle que imprima los números del 1 al 10 en la consola. */

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

/* 2.Ejercicio de condicionales:
Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar. */

/* let esPar = numero => numero%2===0 ? `el numero ${numero} es par`:`el numero ${numero} es impar`;
let numero = 13;
console.log(esPar(numero)); */

/* 3.Ejercicio de map:
Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()). */

/* let numeros = [13, 123, 65, 234, 76867, 1234, 63, 484];
let potencia = numeros.map(function (index) {
    return index ** 2;
});
console.log(potencia); */

/* 4.Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números pares. */

/* 5.Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce para calcular la suma de todos los elementos del arreglo. */

/* 6.Ejercicio combinado:
Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres. Luego, utiliza el método map para convertir cada palabra en mayúsculas. */

/* let arreglo = ['perro', 'gato', 'pollo', 'pato', 'caballo', 'pez', 'lagarto'];
let nuevoArray = []; */
/* function imprimir() {
    let index = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].length > 5) {            
            nuevoArray[index] = arreglo[i];
            index++;            
        } else {
            console.log(`${arreglo[i]} tiene menos o igual a 5 cifras`);
        }
    } */
/* return nuevoArray; */
/* } */

/* imprimir() me devuelve el array con cadenas de mas de 5 caracteres */
/* for (let index = 0; index < imprimir().length; index++) {    
    console.log(imprimir()[index]);    
} */

/* let mayusculas = imprimir().map(function(indice){
    return console.log(indice.toUpperCase());
}); */

/*7. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo 
que contenga solo los productos que están en stock(es decir, aquellos cuya propiedad stock sea verdadera)
.Luego, utiliza el método reduce para calcular el precio total de todos los productos en stock. */


/* 8. Ejercicio combinado:
Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres que comienzan con la letra "A". 
Luego, utiliza el método reduce para concatenar todos los nombres en una sola cadena separada por comas. */


/* 9. Ejercicio de bucles:
Escribe un bucle que imprima los números del 10 al 1 en la consola, en orden descendente. */

/* let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 10-1; index >= 0; index--) {
    console.log(numeros[index]);
} */

/* 10. Ejercicio de condicionales:
Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, "Negativo" si el número es menor que 0, 
y "Cero" si el número es igual a 0. */

/* let numero = 0; 
let Condicional = num => num > 0 ? `Positivo` : num < 0 ? `Negativo` : `es Cero`;
console.log(Condicional(numero)); */

/* 11. Ejercicio de map:
Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la longitud de cada palabra. */

/* let arreglo = [`casa`, `edificio`, `codominio`, `habitacion`, `sala`, `cocina`, `ventana`, `puerta`];
let tamaño = arreglo.map(function(index){
    return console.log(`La palabra: ${index}, tiene ${index.length} caracteres`);
}); */

/* 12. Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números mayores que 5. */

/* 13. Ejercicio de reduce:
Dado un arreglo de números, utiliza el método reduce para calcular el producto de todos los elementos del arreglo. */

/* 14. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga solo los estudiantes 
que tienen una calificación mayor o igual a 80. Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de esos 
estudiantes. */

/* 15. Ejercicio combinado:
Dado un arreglo de palabras, utiliza el método filter para crear un nuevo arreglo que contenga solo las palabras que contienen la letra "a". Luego, 
utiliza el método map para convertir cada palabra en minúsculas. */

/* 16. Ejercicio combinado:
Dado un arreglo de objetos que representan libros, utiliza el método filter para crear un nuevo arreglo que contenga solo los libros cuyo autor sea "J.K. Rowling". 
Luego, utiliza el método reduce para calcular la suma de las páginas de todos los libros seleccionados. */

/* 17. Ejercicio de bucles:
Escribe un bucle que imprima los números pares del 1 al 20 en la consola. */

/* function Pares(){
    for (let index=1; index <= 20; index++) {
        if(index % 2 ===0){
            console.log(`El numero : ${index} es par`);
        }else{
            console.log(`El numero : ${index} es impar`);
        }
    }
}
Pares(); */

/* 18. Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento y devuelva "Es una frase" si la cadena contiene espacios en blanco,
 y "Es una palabra" si la cadena no contiene espacios en blanco. */

/* let frase = `el pollo estaba vivo o muerto?`;
let palabra = `sombrero`;
function Cadena(palabra) {
    if (palabra.includes(" ")) {
        console.log("Es una frase");
    } else {
        console.log("Es una palabra");
    }
}
Cadena(frase); */

/* 19. Ejercicio de map:
Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres en mayúsculas. */

/* let cadena = [`cesar`,`jose`,`mauricio`,`juan`,`carlos`,`miguel`,`percy`,`helar`];
let Mayusculas = cadena.map(function(index){        
    return index.toUpperCase();
});
console.log(Mayusculas); */

/* 20.Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números impares. */

/* 21. Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método reduce para calcular la cantidad total de caracteres de todas las palabras en el arreglo. */

/* 22. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo que contenga 
solo los productos cuyo precio sea mayor a $50. Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de esos productos. */

/* 23. Ejercicio combinado:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números que sean múltiplos de 3. 
Luego, utiliza el método reduce para calcular la suma de los números seleccionados. */

/* 24. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo 
que contenga solo los estudiantes que tienen una calificación promedio mayor o igual a 90. Luego, utiliza 
el método reduce para calcular el promedio de las calificaciones de los estudiantes seleccionados. */

/* 25. Ejercicio de bucles:
Escribe un bucle que imprima la serie de Fibonacci hasta el décimo término. 
(La serie de Fibonacci comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores). */

/* let nodo1 = 0;
let nodo2 = 1;
let nodo3 = 0;

function Serie() {
    console.log(`Serie Fibonacci`);
    for (let index = 1; index <= 10; index++) {
        nodo3 = nodo1 + nodo2;
        console.log(index + `: ${nodo1} + ${nodo2} = ${nodo3}`);
        nodo1 = nodo2;
        nodo2 = nodo3;
    }
}
Serie(); */

/* 26. Ejercicio de condicionales:
Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" 
si la cadena es igual al revés, y "No es un palíndromo" si no lo es. */

/* let cadena = `palap`;
function cadenasinEspacio(cadena) {
    cadena0espacio = cadena.replace(/\s/g, "");
    return cadena0espacio;
}
function tamañoCadena(cadena) {
    let tamaño = cadena.length;
    return tamaño;
}
function palindromo(cadena) {
    let cadena0 = cadenasinEspacio(cadena).toLowerCase();
    let tamaño = Math.floor(tamañoCadena(cadena));
    let cont = 0;
    for (let i = 0; i < tamaño; i++) {        
        if (cadena0[0 + cont] = cadena0[tamaño-cont]) {            
            console.log(`${cadena0[0 + cont]}  ==> ${cadena0[tamaño-cont]}`);
            cont=cont+1;
        } else {
            console.log(`${cadena} No es una palabra palíndroma`);
        }
    }
}
palindromo(cadena); */

/* 27. Ejercicio de map:
Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el doble de cada número. */

/* let numero = [23, 123, 56, 457, 457, 234523, 1313, 322, 233, 898, 2]

let Doble = numero.map(function (index) {
    return index * 2;
})
console.log(Doble); */

/* 33. Ejercicio de bucles:
Escribe un bucle que imprima los números impares del 1 al 50 en la consola. */

/* for (i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
} */

/* 34. Ejercicio de condicionales:
Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos. */

/* function Mayor(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`El numero: ${numero1} es mayor`);
    } else {
        if (numero1 === numero2) {
            console.log(`El numero: ${numero1} y ${numero2} son iguales`);
        } else {
            console.log(`El numero: ${numero2} es mayor`);
        }
    }
}
Mayor(14, 29); */


/* 35. Ejercicio de map:
Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la primera letra de cada palabra. */

/* let arreglo= [`casa`,`cocina`,`baño`,`sala`,`habitacion`,`ventana`,`puerta`,`lavamanos`,]
let Letra = arreglo.map(function(index){
    return index[0];
});
console.log(Letra); */

/* 36. Ejercicio de filter:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números divisibles por 3. */

/* 37. Ejercicio de reduce:
Dado un arreglo de palabras, utiliza el método reduce para concatenar todas las palabras en una sola cadena. */

/* 38. Ejercicio combinado:
Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga 
solo los estudiantes que tienen una calificación mayor a 90. Luego, utiliza el método map para crear un nuevo arreglo que 
contenga solo los nombres y calificaciones de esos estudiantes. */

/* 39. Ejercicio combinado:
Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números positivos. 
Luego, utiliza el método reduce para calcular la suma de los números seleccionados. */

/* 40. Ejercicio combinado:
Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo que contenga solo 
los productos con un precio mayor a $50. Luego, utiliza el método reduce para calcular el promedio de los precios de los productos seleccionados. */

/* 41. Ejercicio de funciones:
Crea una función llamada saludar que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!" */

/* let nombre = `Cesar`;
function Saludar(nomb){
    console.log(`¡Hola, ${nomb}!`);
}
Saludar(nombre); */

/* 42. Ejercicio de funciones flecha:
Convierte la función saludar en una función flecha. */

/* let nombre = `Cesar`;
let saludo = nomb => console.log(`¡Hola, ${nomb}!`);
saludo(nombre); */

/* 43. Ejercicio de funciones anónimas:
Crea una función anónima que tome dos números como argumentos y devuelva su suma. */

/* let Suma = function (numero1, numero2) {
    return console.log(`La suma de los dos numeros es: ${numero1 + numero2}`);
}
Suma(12, 19); */

/* 44. Ejercicio de funciones:
Crea una función llamada calcularPromedio que tome un arreglo de números como argumento y devuelva el promedio de esos números. */

/* let acum=0;
let arreglo = [12, 24, 64, 86, 93, 83, 78, 36]; */
/* let calcularPromedio = function (array) {
    for (let i = 0; i < array.length; i++) {
        acum = array[i]+acum;        
    }
    console.log(`El primedio es de: ${acum/array.length}`);
}
calcularPromedio(arreglo); */

/* 45. Ejercicio de funciones flecha:
Convierte la función calcularPromedio en una función flecha. */

/* let acum=0;
let arreglo = [12, 24, 64, 86, 93, 83, 78, 36]; 
let calcularPromedio = array =>{
    for (let i = 0; i < array.length; i++) {
        acum = array[i]+acum;        
    }
    return console.log(`El primedio es de: ${acum/array.length}`);
} 
calcularPromedio(arreglo); */

/* 46. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra. */

/* let arreglo = [`carro`, `camioneta`, `avion`, `biciclecta`, `camion`, `barco`, `helicoptero`];
let longitud = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].length);
    }
}
longitud(arreglo); */

/* 47. Ejercicio de funciones:
Crea una función llamada esPar que tome un número como argumento y devuelva true si el número es par, y false si no lo es. */
/* let numero = 13;
let condicional = undefined;
function esPar(num) {
    if (num % 2 == 0) {
        return console.log(`El numero: ${num} es par, ${true}`);
    } else {
        return console.log(`El numero: ${num} es impar, ${false}`);
    }
}
esPar(numero); */

/* 48. Ejercicio de funciones flecha:
Convierte la función esPar en una función flecha. */

/* let numero = 29;
let esPar = num => num % 2 == 0 ? console.log(`El numero: ${num} es par, ${true}`) : console.log(`El numero: ${num} es impar, ${false}`);
esPar(numero); */

/* 49. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números pares. */

/* let arreglo = [45, 124, 2457, 796, 1354, 54, 49, 135, 532, 28, 2754];
let Par = function (array) {
    let indice = 0;
    let arregloPar = [];
    for (let index = 0; index < array.length; index++) {        
        if (array[index] % 2 == 0) {            
            arregloPar[indice] = array[index];
            indice++;
        }        
    }
    return arregloPar;
}
console.log(Par(arreglo)); */

/* 50. Ejercicio de funciones:
Crea una función llamada convertirAMayusculas que tome una cadena como argumento y devuelva la cadena en mayúsculas. */

/* let cadena = (`Una vez una tarde llevaba un niño un pollo a la espalda, el pollo el maestro no sabía que cosa estaba llevando, 
y quería preguntarle al maestro y le decía quería hacerle creer y le decía, preguntarle si estaba vivo o estaba muerto. Si estaba muerto 
le enseñaba el pollo vivo pero si estaba viv perdón sí estaba muerto si el el maestro le decía que estaba muerto el niño el profesor 
le entrega..el niño le entregaba vivo pero si le decía que estaba mue..vivo el niño torcia el cuello del pollo le enseñaba el pollo muerto 
`);
function Mayusculas(string) {
    return console.log(string.toUpperCase());
}
Mayusculas(cadena); */

/* 51. Ejercicio de funciones:
Crea una función llamada sumar que tome dos números como argumentos y devuelva la suma de esos números. */

/* let numero1 = 123;
let numero2 = 322;
function Sumar(num1, num2) {
    return console.log(`La suma de los numeros es: ${num1 + num2}`);
}
Sumar(numero1, numero2); */

/* 52. Ejercicio de funciones flecha:
Convierte la función sumar en una función flecha. */

/* let Sumar = (num1, num2) => (num1 + num2);
let numero1 = 12;
let numero2 = 82;
console.log(`La suma de ${numero1} y ${numero2} es: ${Sumar(numero1, numero2)}`); */

/* 53. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de números como argumento y devuelva la suma de todos los elementos del arreglo. */

/* let arreglo = [313, 1253, 457345, 26645, 745, 312, 3, 2, 2];
let acum = 0;
let Sumar = function (array) {
    for (let i = 0; i < array.length; i++) {
        acum = acum + array[i];
    }
    return console.log(`La suma de los numeros es: ${acum}`);
}
Sumar(arreglo); */

/* 54.Ejercicio de funciones:
Crea una función llamada esPalindromo que tome una cadena como argumento y devuelva true si la cadena es un palíndromo 
(se lee igual de izquierda a derecha que de derecha a izquierda), y false si no lo es. */

/* 55. Ejercicio de funciones flecha:
Convierte la función esPalindromo en una función flecha. */

/* 56. Ejercicio de funciones anónimas:
Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con solo las palabras que sean palíndromos. */

/* 57.Ejercicio de funciones:
Crea una función llamada duplicarElementos que tome un arreglo como argumento y devuelva un nuevo arreglo con los elementos duplicados. */
/* let arreglo = [`hola`, `mundo`, 12, 322, `sommbrero`, true, false, `a`];
function duplicarElementos(array) {
    let arreglo2 = [];
    let indice = 0;
    for (let i = 0; i < array.length; i++) {
        arreglo2[indice] = array[i];
        arreglo2[indice + 1] = array[i];
        indice = indice + 2;
    }
    return arreglo2;
}
console.log(duplicarElementos(arreglo)); */

/* .58 Ejercicio de funciones flecha:
Convierte la función duplicarElementos en una función flecha. */
/* let arreglo = [`hola`, `mundo`, 12, 322, `sommbrero`, true, false, `a`];
let duplicarElementos = array => {
    let arreglo2 = [];
    let indice = 0;
    for (let i = 0; i < array.length; i++) {
        arreglo2[indice] = array[i];
        arreglo2[indice + 1] = array[i];
        indice = indice + 2;
    }
    return arreglo2;
}
console.log(duplicarElementos(arreglo)); */
/* ***EJERCICIO #1 PARA ARJUNA ***
En este desafío tienes un array que contiene otros arrays internos, debes retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm". */

// Tu código aquí 👇​

const raiz = [
	[1, 2, 3],
	[4, 5, 6, [12, 10], [30, 20]],
	[7, 8, 9],
];

//SOLUCIÓN ARJUNA
function aplanarArray(datos, acumulador) {
	for (let i = 0; i < datos.length; ++i) {
		if (Array.isArray(datos[i])) {
			aplanarArray(datos[i], acumulador);
		} else {
			acumulador.push(datos[i]);
		}
	}
}

let resultado = [];
aplanarArray(raiz, resultado);
console.log(resultado);

//SOLUCIÓN 1 JAIRO
const resultArrays = raiz.flat(3);
console.log(resultArrays);

//SOLUCIÓN 2 JAIRO
function solution(array) {
	return array.flat(3);
}

solution([1, 2, 3], [4, 5, 6], [7, 8, 9]);

/* ***EJERCICIO #2 PARA ARJUNA *** 
En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

La solución debería tener un input y output como los siguientes:
*/
function solution(lines) {
	// Tu código aquí 👈​​
}

//input
solution([
	'Mejorando cada día',
	'Aprendiendo cosas cada vez más nuevas',
	'No es simple, pero enfocado lo lograré',
	'Y cuando llegue arriba, diré LO LOGRÉ',
]);

//output
//El resultado de la longitud debe ser 23

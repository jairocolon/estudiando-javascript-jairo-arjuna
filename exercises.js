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



//// Ejercicios realizados 

/////Ejercicio - 01

let deudas = {
	Juanita: 1200,
	Roberta: 1500,
	Dayana: 200,
	bancosPendientes: {
	bbva: [1500, 1400],
	bancolombia: [700, 700],
	bogota: 1200,
	  }
  }
  let totalDeudas = deudas.Juanita + deudas.Roberta + deudas.Dayana + deudas.bancosPendientes.bbva[0] + deudas.bancosPendientes.bbva[1] + deudas.bancosPendientes.bancolombia[0] + deudas.bancosPendientes.bancolombia[1] + deudas.bancosPendientes.bogota;
  let pagado = 1800;
  let totalPagar = totalDeudas - pagado;
  function resultadoDeudas(Total){   
   if(Total === 6600){
	 console.log("Lo puedo pagar todo")
   }else if(Total > 6600){
	console.log("No puedo pagarlo todo")
  }
  }
  resultadoDeudas(totalPagar);
  

  //// Ejercicio 02

  let edad = parseInt(prompt("Introduce tu edad"))

if(edad < 18){
  console.log("Eres menor de edad no puedes conducir")
}else if(edad >= 18){
  console.log("Eres mayor de edad ya puedes conducir")
}else{
  console.log("Introduce un numero valido")
}

////// Ejercicio 03

const nota = parseInt(prompt("Introduce tu nota"));

do{ 
  if (nota > 0 && nota <= 10){
			if (nota < 3) {
				console.log("Muy deficiente");
      }
   	else if (nota < 5) {
				console.log("Insuficiete");
			}
			else if (nota < 6) {
				console.log("Suficiente");
			}
      else if (nota < 7) {
				console.log("Bien");
			}
			else if (nota < 9) {
				console.log("Notable"); 
			}
			else if (nota >= 9) {
				console.log("Sobresaliente");
      }
  } else if(nota >= 11) {
    console.log("Nota Erronea, Introduce una nota del 1 a 10");
  } 
}while(nota >= 100);

////// Ejercicio 04

const clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio "];
 
console.log ("Clasificación actual"); 

clasificacion[2] = "Celia";
clasificacion[3] = "Raúl";
clasificacion.pop();
clasificacion.splice(1, 0, "Roberto", "Amaya");
clasificacion.unshift("Marta");

function mostrarClasificacion() {
    for (var i = 0; i < clasificacion.length; i++) {
    console.log(i+1 + ". " + clasificacion[i] );
    }
}
  mostrarClasificacion();


  ////// Ejercicio 05


let nombre = prompt("¿Cuál es tu nombre?");
let apellido1 = prompt("¿Cuál es tu primer apellido?");
let fullName = nombre + " " + apellido1;
let edad = prompt("¿Qué edad tienes?");
let year = 2022 - edad; 
console.log("Nombre completo: " + fullName);
console.log("Año de nacimiento: " + year);


 ////// Ejercicio 06

let nombre = prompt("¿Cuál es tu nombre?");
let apellido1 = prompt("¿Cuál es tu primer apellido?");
let fullName = nombre + " " + apellido1;
let edad = prompt("¿Qué edad tienes?");
edad = parseInt(edad);
let year = 2022 - edad;
if (edad < 18){
    mayorEdad = year + 18;
    console.log("Eres menor de edad, no podemos darte de alta hasta el año " + mayorEdad);
}
else if (edad > 18 && edad < 25) {
    console.log("Tienes un 10% de descuento");
}
else if (edad > 25) {
    console.log("Tienes un 10% de descuento");
}
else if (edad == 18 || edad == 25) {
     console.log("Premio, tienes un descuento especial del 20%");
}
     console.log("Nombre completo: " + fullName);
if (!year) {
     console.log("Año de nacimiento: no puede calcularse");
}
else {
     console.log("Año de nacimiento: " + year);
}

////// Ejercicio 07

let precio = prompt("Introduzca Precio producto: ");
let descuento = prompt("Introduzca descuento: ");
 
function calculoPrecioTotal(precio, descuento) {
   let iva = 1.21;  
   let precioTotal = (precio - descuento) * iva;
   return precioTotal;  
}
 
console.log("Precio= " + calculoPrecioTotal(precio,descuento) +  " $");

////// Ejercicio 08

let jugados = 0;
    let ganados = 0;
    let perdidos = 0;
    do {
        let jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\"");
      
        let aleatorio = Math.floor((Math.random() * 9) + 1);
        let elige = "";
        if (aleatorio <= 3) {
            elige = "piedra";
        }
        else if (aleatorio <= 6) {
            elige = "papel";
        }
        else {
            elige = "tijera";
        }

        if ((jugada == "piedra") && (elige == "piedra")) {
            cnsole.log(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "piedra") && (elige == "papel")) {
            console.log(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "piedra") && (elige == "tijera")) {
            console.log(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "papel") && (elige == "papel")) {
            console.log(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "papel") && (elige == "tijera")) {
            console.log(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "papel") && (elige == "piedra")) {
            console.log(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        else if ((jugada == "tijera") && (elige == "tijera")) {
            console.log(jugada+"-"+elige+": Empate");
        }
        else if ((jugada == "tijera") && (elige == "piedra")) {
            console.log(jugada+"-"+elige+": Gana PC");
            perdidos++;
        }
        else if ((jugada == "tijera") && (elige == "papel")) {
            console.log(jugada+"-"+elige+": Gana Jugador");
            ganados++;
        }
        jugados++;

    } while (confirm("Jugar de nuevo"));

    console.log("Partidas jugadas: "+jugados);
    console.log("Partidas ganadas: "+ganados);
    console.log("Partidas perdidas: "+perdidos);
    console.log("Partidas empatadas: "+(jugados-ganados-perdidos));
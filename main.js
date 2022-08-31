/* ***EJERCICIO PARA ARJUNA ***
En este desafío tienes un array que contiene otros arrays internos, debes retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm". */

// Tu código aquí 👇​ 


const raiz = [
  [1, 2, 3],
  [4, 5, 6, [12, 10], [30, 20]],
  [7, 8, 9]
]

function aplanarArray(datos, acumulador) {
    
    for(let i = 0; i < datos.length; ++i) {
        if(Array.isArray(datos[i])){
          aplanarArray(datos[i], acumulador);
        }else {
          acumulador.push(datos[i]);
        }

    }
}

let resultado = [];
aplanarArray(raiz, resultado);
console.log(resultado);

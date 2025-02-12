// const valor1 = 100; // Variable global
// const valor2 = 200; // Variable global

// function sumar(valor1, valor2) {
//   console.log("El valor de la suma es: " + (valor1 + valor2));
// }

// sumar(100, 200);

// let valor1 = 100; // Variable global
// let valor2 = 200; // Variable global

// function sumar() {
//   console.log("El valor de la suma es: " + (valor1 + valor2));
// }

// sumar();

// valor1 = 500;
// valor2 = 500;

// sumar();

// Función regular: tienen la característica de hoisted (pueden ser invocadas sin importar la)

function sumar(valor1, valor2) {
  return valor1 + valor2;
}

console.log("El valor de la suma es: " + sumar(20, 20));

// alert("El valor de la suma es: " + sumar(20, 20));

// Función flecha

const sumar_flecha = (valor1, valor2) => {
  return valor1 + valor2;
};

console.log("(FUNCIÓN FLECHA) El valor de la suma es: " + sumar_flecha(20, 20));

// Función anónima

const sumar_anonima = function (valor1, valor2) {
  return valor1 + valor2;
};

console.log("(FUNCIÓN ANÓNIMA) El valor de la suma es: " + sumar_anonima(20, 20));

// Return implicito

const sumar_flecha_return_implicito = (valor1, valor2) => valor1 + valor2;

console.log(
  "(FUNCIÓN FLECHA RETURN IMPLICITO) El valor de la suma es: " +
    sumar_flecha_return_implicito(20, 20)
);

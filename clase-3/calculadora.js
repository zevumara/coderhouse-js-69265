// const suma = (valor1, valor2) => {
//   const resultado = valor1 + valor2;
//   return resultado;
// };

// CALCULADORA "BUENAS PRÁCTICAS"

const suma = (valor1, valor2) => valor1 + valor2;
const resta = (valor1, valor2) => valor1 - valor2;
const multiplicar = (valor1, valor2) => valor1 * valor2;
const dividir = (valor1, valor2) => valor1 / valor2;

function calculadora() {
  const valor1 = parseInt(prompt("Ingresá el primer valor:"));
  const valor2 = parseInt(prompt("Ingresá el segundo valor:"));
  const operacion = prompt("¿Que operación querés hacer? (+ - * /)");

  switch (operacion) {
    case "+":
      alert("El resultado de la suma es: " + suma(valor1, valor2));
      break;
    case "-":
      alert("El resultado de la resta es: " + resta(valor1, valor2));
      break;
    case "*":
      alert("El resultado de la multiplicación es: " + multiplicar(valor1, valor2));
      break;
    case "/":
      alert("El resultado de la división es: " + dividir(valor1, valor2));
      break;
    default:
      alert("La operación ingresada es inválida.");
      break;
  }
}

calculadora();

const edad = prompt("Ingresá tu edad:");
const genero = prompt("Ingresá tu género:");

// Siempre que uso && (and) se tienen que cumplir todas las condiciones
if (edad > 18 && genero == "F") {
  alert("Pasá gratis.");
} else if (edad > 18 && genero == "M") {
  alert("Pasá por caja campeón.");
} else {
  alert("Sos menor.");
}
let mayorEdad;

if (edad >= 18) {
  // Es mayor?
  mayorEdad = true;
} else {
  mayorEdad = false;
}

if (mayorEdad == true) {
  // Ejemplo de or (||). Con que se cumpla una sola condición, ejecuta el bloque de código
  if (genero == "F" || genero == "Femenino" || genero == "femenino" || genero == "f") {
    alert("Pasá gratis.");
  }
} else {
  alert("Sos menor de edad, no podés pasar.");
}

// Ejemplo de not (!)
if (!mayorEdad) {
  alert("Sos menor de edad");
} else {
  alert("Sos mayor de edad");
}

const codigo_postal = prompt("Ingrese su código postal:");

// Ejemplo de if anidados

if (codigo_postal == 2001) {
  console.log("Tu zona es Rosario");
} else if (codigo_postal == 1621) {
  console.log("Tu zona es Benavidez");
} else if (codigo_postal == 1663) {
  console.log("Tu zona es San Miguel");
} else {
  console.log("No reconozco tu zona.");
}

// Ejemplo de switch

switch (codigo_postal) {
  case "2001":
    console.log("Tu zona es Rosario");
    break;
  case "1621":
    console.log("Tu zona es Benavidez");
    break;
  case "1663":
    console.log("Tu zona es San Miguel");
    break;
  default:
    console.log("No reconozco tu zona.");
}

// Ejemplo de ciclo for

const tabla = prompt("¿Qué tabla querés saber?");

for (let contador = 1; contador <= 12; contador++) {
  let resultado = tabla * contador;
  console.log(tabla + " x " + contador + " es igual a " + resultado);
}

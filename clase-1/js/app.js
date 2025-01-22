// Declaración de una variable
let edad;
// Asignación de una variable previamente declarada
edad = 42; // tipo de variable: number

// Declaración y asignación en una sola línea
let anio = 2025; // tipo de variable: number

// Declaración y asignación de una variable constante (no puede cambiar su valor)
const apodo = "Ricky"; // tipo de variable: string

// Operación maemática con números (variables tipo number)
const fechaNacimento = anio - edad;

// Cuando sumo variables de tipo string (cadenas de texto) se llama concatenación:
console.log(apodo + " tu año de nacimiento es: " + fechaNacimento);

// Usamos funciones nativas como prompt y alert para interactuar con el usuario
const nombre = prompt("Ingresá tu nombre");
// Con el operador + "concatenamos" cadenas de texto (strings)
alert("¡Hola Mundo! Mi nombre es " + nombre + ", y esta es mi primera app.");

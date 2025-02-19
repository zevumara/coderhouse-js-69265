/**
 * Objetivos:
 * x Usar variables
 * x Usar array
 * x Usar funciones
 * x Usar algún ciclo
 *  */

// Objetos literales

// const espada = {
//   nombre: "Espada",
//   precio: 1000,
//   tipo: "arma",
//   descripcion: "",
// };

// const escudo = {
//   nombre: "Escudo",
//   precio: 500,
//   tipo: "armadura",
//   descripcion: "",
// };

// const pocion = {
//   nombre: "Poción",
//   precio: 500,
//   tipo: "curación",
//   descripcion: "Una poción curativa que restaura 500 puntos de vida.",
// };

// Objetos instanciados desde una clase "molde"

class Item {
  constructor(nombre, precio, tipo, descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
}

const shop = [
  new Item("Poción", 500, "consumible", "Una poción curativa."),
  new Item("Espada", 500, "arma", "Una espada."),
  new Item("Escudo", 500, "armadura", "Un escudo."),
];

let mi_inventario = [];
let mi_oro = 1500;

if (localStorage.getItem("mi_oro")) {
  mi_oro = parseInt(localStorage.getItem("mi_oro"));
}
if (localStorage.getItem("mi_inventario")) {
  mi_inventario = JSON.parse(localStorage.getItem("mi_inventario"));
}

function comprar_prompt() {
  const item_a_comprar = prompt("¿Qué item deseas comprar para tu aventura?");
  comprar_item(item_a_comprar);
}

function vender_prompt() {
  const item_a_vender = prompt("¿Qué item deseas vender?");
  vender_item(item_a_vender);
}

// 1. Validar que el item que ingresó en el prompt, esté a la venta
// 2. Validar que tenga suficiente oro para comprar el item
// 3. Si pasa las validaciones, resta el oro y agrega el item al inventario
function comprar_item(prompt) {
  let item_a_comprar = false;
  // Busco si existe el item
  for (item of shop) {
    if (item.nombre == prompt) {
      item_a_comprar = item;
    }
  }

  if (item_a_comprar) {
    if (mi_oro >= item_a_comprar.precio) {
      // Acá va la lógica de comprar el item
      mi_oro = mi_oro - item_a_comprar.precio;
      localStorage.setItem("mi_oro", mi_oro);
      mi_inventario.push(item_a_comprar);
      localStorage.setItem("mi_inventario", JSON.stringify(mi_inventario));
      console.log("¡Compraste " + item_a_comprar.nombre + "!");
    } else {
      console.warn(
        "No tenés oro suficiente para comprar " +
          item_a_comprar.nombre +
          ". Tu oro es: " +
          mi_oro +
          ". Costo del item: " +
          item_a_comprar.precio
      );
    }
  } else {
    console.error("No tengo nada de '" + prompt + "' disponible a la venta.");
  }
}

// 1. Validar que el item que queremos vender esté en el invetario
function vender_item(prompt) {
  let item_a_vender = false;
  // Busco si existe el item
  for (item of mi_inventario) {
    if (item.nombre == prompt) {
      item_a_vender = item;
    }
  }
  if (item_a_vender) {
    // Acá va la lógica de vender el item
    const indice = mi_inventario.indexOf(item_a_vender);
    mi_inventario.splice(indice, 1);
    localStorage.setItem("mi_inventario", JSON.stringify(mi_inventario));
    console.log("¡Vendiste " + item_a_vender.nombre + "!");
    mi_oro = mi_oro + item_a_vender.precio;
    localStorage.setItem("mi_oro", mi_oro);
    mostrar_inventario();
  } else {
    console.error("No tenés nada de '" + prompt + "' para vender.");
  }
}

function mostrar_inventario() {
  console.log("Inventario:");
  for (item_inventario of mi_inventario) {
    console.log("- " + item_inventario.nombre);
  }
  console.log("Oro:", mi_oro);
}

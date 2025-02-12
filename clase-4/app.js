/**
 * Objetivos:
 * x Usar variables
 * x Usar array
 * x Usar funciones
 * x Usar algún ciclo
 *  */

const shop = ["Poción", "Espada", "Escudo", "Daga"];
const precio_x_item = 500;

const mi_inventario = [];
let mi_oro = 1500;

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
function comprar_item(item) {
  if (shop.includes(item)) {
    if (mi_oro >= precio_x_item) {
      // Acá va la lógica de comprar el item
      mi_oro = mi_oro - precio_x_item;
      const indice = shop.indexOf(item);
      mi_inventario.push(shop[indice]);
      console.log("¡Compraste " + item + "!");
    } else {
      console.warn(
        "No tenés oro suficiente para comprar " +
          item +
          ". Tu oro es: " +
          mi_oro +
          ". Costo del item: " +
          precio_x_item
      );
    }
  } else {
    console.error("No tengo nada de '" + item + "' disponible a la venta.");
  }
}

// 1. Validar que el item que queremos vender esté en el invetario
function vender_item(item) {
  if (mi_inventario.includes(item)) {
    // Acá va la lógica de vender el item
    const indice = mi_inventario.indexOf(item);
    mi_inventario.splice(indice, 1);
    console.log("¡Vendiste " + item + "!");
    mi_oro = mi_oro + precio_x_item;
    mostrar_inventario();
  } else {
    console.error("No tenés nada de '" + item + "' para vender.");
  }
}

function mostrar_inventario() {
  console.log("Tu inventario:");
  for (let indice = 0; indice < mi_inventario.length; indice++) {
    console.log(mi_inventario[indice]);
  }
  console.log("Mi oro:", mi_oro);
}

class Item {
  constructor(nombre, precio, tipo, descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }

  usar() {
    switch (this.tipo) {
      case "consumible":
        // Lógica de consumible
        jugador.vida += 100;
        console.log("¡Usaste " + this.nombre + "!");
        console.log("Tu vida:", jugador.vida);
        // Borramos el item del inventario
        // for (const item of jugador.inventario) {
        //   if (item.nombre == this.nombre) {
        //     const indice = jugador.inventario.indexOf(item);
        //     jugador.inventario.splice(indice, 1);
        //   }
        // }
        const indice_item = jugador.inventario.findIndex((item) => item.nombre == this.nombre);
        if (indice_item >= 0) {
          jugador.inventario.splice(indice_item, 1);
        }
        localStorage.setItem("jugador", JSON.stringify(jugador));
        break;
      case "arma":
        // Atacar
        console.log("Vas a usar " + this.nombre + " para atacar a tu oponente.");
        break;
      case "armadura":
        // Defenderse
        console.log("Vas a usar " + this.nombre + " para defenderte de tu oponente.");
        break;
    }
  }
}

const shop = [
  new Item("Poción", 500, "consumible", "Una poción curativa."),
  new Item("Espada", 500, "arma", "Una espada."),
  new Item("Escudo", 500, "armadura", "Un escudo."),
];

let jugador = {
  inventario: [],
  oro: 1500,
  vida: 1000,
  nombre: null,
};

if (localStorage.getItem("jugador")) {
  jugador = JSON.parse(localStorage.getItem("jugador"));
  jugador.inventario = jugador.inventario.map(
    (item) => new Item(item.nombre, item.precio, item.tipo, item.descripcion)
  );
}

if (!jugador.nombre) {
  const nombre_jugador = prompt("¿Cuál es tu nombre, aventurero?");
  jugador.nombre = nombre_jugador;
  localStorage.setItem("jugador", JSON.stringify(jugador));
}

if (jugador.nombre) {
  const el_titulo = document.querySelector("#titulo_bienvenida");
  el_titulo.innerText = "¡Hola " + jugador.nombre + "! ¿En qué te puedo ayudar?";
}

function comprar_prompt() {
  const item_a_comprar = prompt("¿Qué item deseas comprar para tu aventura?");
  comprar_item(item_a_comprar);
}

function vender_prompt() {
  const item_a_vender = prompt("¿Qué item deseas vender?");
  vender_item(item_a_vender);
}

// 1. Validar que el jugador realmente posea una poción en el inventario
// 2. Llamar a su método usar()
function usar_pocion() {
  let tiene_pocion = false;
  for (const item of jugador.inventario) {
    if (item.nombre == "Poción") {
      tiene_pocion = item;
    }
  }

  if (tiene_pocion) {
    tiene_pocion.usar();
  } else {
    console.warn("No tenés ninguna Poción en tu inventario.");
  }
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
    if (jugador.oro >= item_a_comprar.precio) {
      // Acá va la lógica de comprar el item
      jugador.oro = jugador.oro - item_a_comprar.precio;
      jugador.inventario.push(item_a_comprar);
      localStorage.setItem("jugador", JSON.stringify(jugador));
      console.log("¡Compraste " + item_a_comprar.nombre + "!");
    } else {
      console.warn(
        "No tenés oro suficiente para comprar " +
          item_a_comprar.nombre +
          ". Tu oro es: " +
          jugador.oro +
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
  // Busco si existe el item con una función de orden superior
  const item_a_vender = jugador.inventario.find((item) => item.nombre == prompt);
  // let item_a_vender = false;
  // // Busco si existe el item
  // for (item of jugador.inventario) {
  //   if (item.nombre == prompt) {
  //     item_a_vender = item;
  //   }
  // }
  if (item_a_vender) {
    // Acá va la lógica de vender el item
    const indice = jugador.inventario.indexOf(item_a_vender);
    jugador.inventario.splice(indice, 1);
    console.log("¡Vendiste " + item_a_vender.nombre + "!");
    jugador.oro = jugador.oro + item_a_vender.precio;
    localStorage.setItem("jugador", JSON.stringify(jugador));
    mostrar_inventario();
  } else {
    console.error("No tenés nada de '" + prompt + "' para vender.");
  }
}

function mostrar_inventario() {
  console.log("Inventario:");
  // for (const item_inventario of jugador.inventario) {
  //   console.log("- " + item_inventario.nombre);
  // }
  // jugador.inventario.forEach((item_inventario) => {
  //   console.log(">>> " + item_inventario.nombre);
  // });
  const consumibles = jugador.inventario.filter((item) => item.tipo == "consumible");
  const armas = jugador.inventario.filter((item) => item.tipo == "arma");
  const armaduras = jugador.inventario.filter((item) => item.tipo == "armadura");
  console.log("# Consumibles:");
  consumibles.forEach((item) => console.log(">> " + item.nombre));
  console.log("# Armas:");
  armas.forEach((item) => console.log(">> " + item.nombre));
  console.log("# Armaduras:");
  armaduras.forEach((item) => console.log(">> " + item.nombre));
  console.log("Oro:", jugador.oro);
  console.log("Vida:", jugador.vida);
}

// Eventos
const boton_comprar = document.addEventListener("click", (event) => {
  const el_titulo = document.querySelector("#titulo_bienvenida");
  el_titulo.remove();
  // comprar_prompt();
});

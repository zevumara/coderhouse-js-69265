let jugador = {
  nombre: null,
  oro: 1000,
  inventario: [],
};

// Traigo los datos del jugador guardados en el localStorage
if (localStorage.getItem("jugador")) {
  jugador = JSON.parse(localStorage.getItem("jugador"));
}

// Si no está seteado el nombre, fuerzo al jugador que lo defina
while (!jugador.nombre) {
  jugador.nombre = prompt("¿Cuál es tu nombre, aventurero?");
  guardar_partida();
}

// Guardamos los datos del jugador en el localStorage
function guardar_partida() {
  localStorage.setItem("jugador", JSON.stringify(jugador));
}

mostrar_informacion_jugador();

// Función para mostrar o actualizar los datos del jugador
function mostrar_informacion_jugador() {
  // Selecciono todos los elementos que tengan la clase .jugador_nombre
  const els_jugador_nombre = document.querySelectorAll(".jugador_nombre");
  // Recorro todos los elementos y les pongo el nombre del jugador con innerText
  els_jugador_nombre.forEach((el) => (el.innerText = jugador.nombre));
  // Selecciono todos los elementos que tengan la clase .jugador_oro
  const els_jugador_oro = document.querySelectorAll(".jugador_oro");
  // Recorro todos los elementos y les pongo el or del jugador con innerText
  els_jugador_oro.forEach((el) => (el.innerText = jugador.oro));

  // Muestro los items que tiene el jugador en el inventario
  const el_inventario = document.querySelector("#inventario");
  // Lo vaciamos
  el_inventario.innerHTML = "";
  // Con += concateno los elementos HTML
  jugador.inventario.forEach((item) => {
    el_inventario.innerHTML += `<img src="img/${item.imagen}" data-id="${item.id}" class="item_a_vender" title="Nombre: ${item.nombre} | Precio: ${item.precio}" />`;
  });
  const els_inventario = document.querySelectorAll(".item_a_vender");
  // Por cada item que agregue al HTML, debo crear un evento par "escuchar" cuando el jugador hace click en el item
  els_inventario.forEach((el) => {
    el.addEventListener("click", (event) => {
      // Con event.target puedo obtener información de elemento con el que estoy
      // interactuando (haciendo click en este caso)
      vender_item(event.target.getAttribute("data-id"));
    });
  });
}

// Clase "molde" de los items
class Item {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// Items disponibles a la venta
const shop = [
  new Item(1, "Poción", 400, "pocion.png"),
  new Item(2, "Espada", 800, "espada.png"),
  new Item(3, "Escudo", 600, "escudo.png"),
];

// Muestro los items disponibles a la venta en el HTML
const el_items_a_la_venta = document.querySelector("#items_a_la_venta");
// Vacio el div
el_items_a_la_venta.innerHTML = "";
// Con += concateno los elementos HTML
shop.forEach((item) => {
  el_items_a_la_venta.innerHTML += `<img src="img/${item.imagen}" data-id="${item.id}" class="item_a_comprar" title="Nombre: ${item.nombre} | Precio: ${item.precio}" />`;
});

const els_a_la_venta = document.querySelectorAll(".item_a_comprar");
// Por cada item que agregue al HTML, debo crear un evento par "escuchar" cuando el jugador hace click en el item
els_a_la_venta.forEach((el) => {
  el.addEventListener("click", (event) => {
    // Con event.target puedo obtener información de elemento con el que estoy
    // interactuando (haciendo click en este caso)
    comprar_item(event.target.getAttribute("data-id"));
  });
});

function comprar_item(id) {
  const item_a_comprar = shop.find((item) => item.id === Number(id));
  if (item_a_comprar) {
    if (jugador.oro >= item_a_comprar.precio) {
      jugador.inventario.push(item_a_comprar);
      jugador.oro -= item_a_comprar.precio;
      mostrar_informacion_jugador();
      guardar_partida();
    } else {
      alert(`No tenés el oro suficiente para comprar ${item_a_comprar.nombre}.`);
    }
  }
}

function vender_item(id) {
  const item_a_vender = jugador.inventario.find((item) => item.id === Number(id));
  if (item_a_vender) {
    const indice = jugador.inventario.findIndex((item) => item.id === Number(id));
    jugador.inventario.splice(indice, 1);
    jugador.oro += item_a_vender.precio;
    mostrar_informacion_jugador();
    guardar_partida();
  }
}

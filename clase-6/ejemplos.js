// const carrito_de_compras = [];

// // const producto = "Combo Mouse y Teclado"; // producto string
// const producto_combo_mouse = {
//   nombre: "Combo Mouse y Teclado",
//   precio: 30000,
//   cantidad: 1,
// };

// class Producto {
//   constructor(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
//   }
// }

// const producto_monitor = new Producto("Monitor", 230000, 1);
// const producto_auricular = new Producto("Auricular", 30000, 1);

// function boton_agregar_al_carrito() {
//   carrito_de_compras.push(producto_combo_mouse);
//   carrito_de_compras.push(producto_monitor);
//   carrito_de_compras.push(producto_auricular);
// }

// boton_agregar_al_carrito();

// console.log("Mi carrito:");
// for (const producto of carrito_de_compras) {
//   console.log(
//     "-",
//     producto.nombre + " Precio: " + producto.precio + " Cantidad: " + producto.cantidad
//   );
// }

// console.log("Total de productos:", carrito_de_compras.length);

// // carrito_de_compras.pop();
// carrito_de_compras.splice(carrito_de_compras.length - 1, 1);

// console.log("Mi carrito:");
// for (const producto of carrito_de_compras) {
//   console.log("Producto:", producto);
// }

// console.log("Total de productos:", carrito_de_compras.length);

class Pocion {
  constructor(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
  }

  usar() {
    if (this.tipo == "curativa") {
      jugador.vida = jugador.vida + 100;
    } else if (this.tipo == "venenosa") {
      jugador.vida = jugador.vida - 100;
    }
  }
}

const pocion_de_vida = new Pocion("Poción de Vida", "curativa", 100);
const pocion_de_veneno = new Pocion("Poción de Veneno", "venenosa", 50);

pocion_de_veneno.usar();
pocion_de_vida.usar();

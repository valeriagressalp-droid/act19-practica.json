import * as ctrl from "./src/controller/producto.controller.js"
import * as model from "./src/models/producto.model.js"
console.log("---- PRODUCTOS AL ARRANCAR ----");
    console.log(model.listar().map((p) => p.nombre));
console.log("---- creando uno nuevo ----");
const nombre = "Sincronizada" + Date.now();
const creado = ctrl.crearProducto({nombre, precio:32, categoria:"comida"});
// el controlador devuelve el {ok:data} o {ok:false, error}
// hay que revisar SIEMPRE cual de los dos llego antes de usar el .data
if(creado.ok){
    console.log("creado", creado.data.nombre);
} else {
    console.log("no se pudo crear:", creado.error.mensaje);
}

console.log("---- Productos ahora ----");
console.log(model.listar().map((p) => p.nombre));
console.log("");
console.log("Abre src/data/productos.json y compruebalo");
console.log("Vuelve a ejecutar: el producto anterior sigue ahi");
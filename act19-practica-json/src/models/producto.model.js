import {leer, guardar, RUTA_PRODUCTOS} from "../data/almacen.js"
// se lee una vez al arrancar. apartir de aqui se trabaja en memoria
// se guarda el arreglo completo cada vez que algo cambia
let productos = leer(RUTA_PRODUCTOS);
// ---- SOLO LEEN, NO GUARDAN ----
export const listar = () => productos;
export const listarDisponibles = () => productos.filter ((p) => p.disponible);
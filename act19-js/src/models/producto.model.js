
import { leer, guardar, RUTA_PRODUCTOS } from "../data/almacen.js";

// Se lee una vez al arrancar. A partir de aquí se trabaja en memoria
// y se guarda el arreglo completo cada vez que algo cambia.
let productos = leer(RUTA_PRODUCTOS);

// ---- Solo leen: NO guardan ----
export const listar = () => productos;
export const listarDisponibles = () => productos.filter((p) => p.disponible);
export const obtenerPorId = (id) => productos.find((p) => p.id === id);
export const existeNombre = (nombre) =>
  productos.some((p) => p.nombre.toLowerCase() === nombre.toLowerCase());

// ---- Modifican: SÍ guardan ----
export function crear(datos) {
  const nuevo = { id: crypto.randomUUID(), disponible: true, ...datos };
  productos.push(nuevo);
  guardar(RUTA_PRODUCTOS, productos);
  return nuevo;
}

export function actualizar(id, cambios) {
  const i = productos.findIndex((p) => p.id === id);
  if (i === -1) return null;
  productos[i] = { ...productos[i], ...cambios };
  guardar(RUTA_PRODUCTOS, productos);
  return productos[i];
}

export function eliminar(id) {
  const producto = obtenerPorId(id);
  if (!producto) return null;
  producto.disponible = false;
  guardar(RUTA_PRODUCTOS, productos);
  return producto;
}
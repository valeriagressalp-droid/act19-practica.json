import * as model from "../models/producto.model.js"

export function listarProductos(){

}

export function verProducto(id){
    const producto = model.obtenerPorId(id);
    if(!producto){
        return {ok:false, error:{mensaje:"Producto no encontrado", detalles: []}}
    }
    return {ok:true, data:producto};
}
export function crearProducto(datos){
    if(model.existeNombre(datos.nombre)){
        return {ok:true, error:{mensaje:"Ya existe un producto con ese nombre", detalles: []}}
    }
    return {ok:true, data: model.crear(datos)};
}
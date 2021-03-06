/**
 * Este archivo contiene la creación y configuración
 * de 2 instancias de axios conecatdas a 2 API's
 * (media-atid-api, proveedores-atid-api) de tal manera que
 * los servicos creados puedan realizar peticiones
 * consumiendo una conexion en particular.
 * @author Rodrigo García Ávila
 * @author Osvaldo Jair González Martínez
 */

import axios from "axios";

/**
 * Crea una conexión con la API media-proveedores-atid
 */
export const createFileAPIConnection = axios.create({
  baseURL: process.env.VUE_APP_API_UPLOAD_FILES,
  headers: {
    "Content-type": "application/json",
  },
});
 
 /**
  * Crea una conexión con la API proveedores-atid-api
  */
 export const createProveedoresAPIConnection = axios.create({
     baseURL: process.env.VUE_APP_API_PROVEEDORES,
     headers: {      
       Accept: "applicacion/json",
       "Content-type": "application/json",      
     }
 });
 
 
 
 
 

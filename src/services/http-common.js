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
  * Crea una conexión con la API media-becas-api
  */
 export const createFileAPIConnection = axios.create({
     /* baseURL: process.env.VUE_APP_API_UPLOAD_FILES,
     headers: {
       "Content-type": "application/json",
     } */
 });
 
 /**
  * Crea una conexión con la API becas-atid-api
  */
 export const createBecasAPIConnection = axios.create({
     /* baseURL: process.env.VUE_APP_API_BECAS_BASE,
     headers: {      
       Accept: "applicacion/json",
       "Content-type": "application/json",      
     } */
 });
 
 
 
 
 
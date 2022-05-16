import { createProveedoresAPIConnection } from "./http-common";
import { Service } from "./serivce";
import Router from '../router'

class AuthService extends Service{
    constructor(){
        super()
    }

    /**
     * Conecta con la API 'proveedores-atid-api'
     * para autenticar al usuario.
     * @param {*} credentials 
     * @returns {Promise}
     */
    loginProveedor(credentials){
        return createProveedoresAPIConnection.post('/authorize/login-proveedor', credentials)
    }


    /**
     * Conecta con la API 'proveedores-atid-api'
     * para autenticar al usuario.
     * @param {*} credentials 
     * @returns {Promise}
     */
    loginAdmin(credentials){
        return createProveedoresAPIConnection.post('/authorize/login-admin', credentials)
    }


    /**
     * Conecta con la API 'proveedores-atid-api'
     * para registrar un nuevo proveedor.
     * @param {*} credentials 
     * @returns {Promise}
     */
    registraProveedor(datosProveedor){
        return createProveedoresAPIConnection.post('/authorize/nuevo-proveedor',datosProveedor)
    }

    /**
     * Cierra la sesión de usuario, borradno el token del storage
     */
    logout(){
        localStorage.removeItem('proveedores-tkn')
        Router.go('/')
    }
}


export default new AuthService()
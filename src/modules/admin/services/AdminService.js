import { getAuthToken } from "@/helpers/utils";
import { createProveedoresAPIConnection } from "@/services/http-common";
import { Service } from "@/services/serivce";


class AdminServe extends Service{
    constructor(){
        super()
    }

    /**
     * Obtiene la lista de proveedores según el tipo
     * de proveedor. 
     * @param {*} tipoProveedor 
     * @returns 
     */
    getListaProveedores(tipoProveedor){
        createProveedoresAPIConnection.defaults.headers.common['Authorization'] = `Bearer ${ getAuthToken() }`;
        return createProveedoresAPIConnection.get(`/admin/proveedores-lista?tipoProveedor=${tipoProveedor}`)        
    }

    /**
     * Conecta con la api para eliminar un proveedor
     * en especifico.
     * @param {*} rfc 
     * @returns {Promise}
     */
    eliminaProveedor(rfc){
        createProveedoresAPIConnection.defaults.headers.common['Authorization'] = `Bearer ${ getAuthToken() }`;
        return createProveedoresAPIConnection.delete(`/admin/elimina-proveedor?rfc=${rfc}`)
    }

    /**
     * Conecta con la api para actualizar el estatus de un proveedor
     * en especifico.
     * @param {*} rfc 
     * @returns {Promise}
     */
    actualizaEstausProveedor(rfc){
        createProveedoresAPIConnection.defaults.headers.common['Authorization'] = `Bearer ${ getAuthToken() }`;
        return createProveedoresAPIConnection.put(`/admin/actualiza-estatus?rfc=${rfc}`)
    }

    /**
     * Conecta con la api para enviar correo personalizado de proveedores
     * @param {*} message 
     * @returns {Promise}
     */
    enviaCorreoPersonalizado(message){
        createProveedoresAPIConnection.defaults.headers.common['Authorization'] = `Bearer ${ getAuthToken() }`;
        return createProveedoresAPIConnection.post('/admin/correo-proveedor',message)
    }


    /**
     * Conecta con la api para envíar correo a proveedores
     * cuya documentacion ya expiró.
     * @param {*} message 
     * @returns {Promise}
     */
    enviaCorreoAvisoExpiracion(message){
        createProveedoresAPIConnection.defaults.headers.common['Authorization'] = `Bearer ${ getAuthToken() }`;
        return createProveedoresAPIConnection.post('/admin/correo-aviso-expiracion',message)
    }
}

export default new AdminServe()
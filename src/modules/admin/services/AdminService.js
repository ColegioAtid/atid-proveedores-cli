import { createProveedoresAPIConnection } from "@/services/http-common";
import { Service } from "@/services/serivce";


class AdminServe extends Service{
    constructor(){
        super()
    }

    /**
     * Obtiene de  
     * @param {*} tipoProveedor 
     * @returns 
     */
    getListaProveedores(tipoProveedor){
        return createProveedoresAPIConnection.get(`/admin/proveedores-lista?tipoProveedor=${tipoProveedor}`)        
    }
}

export default new AdminServe()
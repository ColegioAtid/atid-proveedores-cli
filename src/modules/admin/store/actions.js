import { buildErrorMessage } from "@/helpers/utils"
import AdminService from "../services/AdminService"

export const getListaProveedoresAction = async ({ commit }) => {
  try {
    const data = await AdminService.getListaProveedores('valido')
    commit('setListaProveedores', data.data.proveedores)
  } catch (error) {
    commit(
      'shared/setShowErrorOrSuccessAlert', 
      {
        message: buildErrorMessage(error),
        errorOnPetition: true,
      },
      { 
        root: true 
      }
    )
  }
}

export const getListaExpiradosAction = async ({ commit }) => {
  try {
    const data = await AdminService.getListaProveedores('expirado')    
    commit('setListaProveedoresExpirados', data.data.proveedores)
  } catch (error) {
    commit(
      'shared/setShowErrorOrSuccessAlert', 
      {
        message: buildErrorMessage(error),
        errorOnPetition: true,
      },
      { 
        root: true 
      }
    )
  }
  
}

export const getListaNoValidosAction = async ({ commit }) => {
  try {
    const data = await AdminService.getListaProveedores('invalido')
    commit('setListaProveedoresNoValidados', data.data.proveedores)        
  } catch (error) {
    commit(
      'shared/setShowErrorOrSuccessAlert', 
      {
        message: buildErrorMessage(error),
        errorOnPetition: true,
      },
      { 
        root: true 
      }
    )
  }
}

export const eliminaProveedorAction = async ({ commit }, rfc) => {    
    try { 
      // Muestra overlay     
      commit(
        'shared/setOverlayState',
        {text: "Eliminando proveedor...", visible: true},
        { root: true }
      )
      // Conecta con el servicio para eliminar
      await AdminService.eliminaProveedor(rfc)      
      // Cierra overlay
      commit(
        'shared/setOverlayState',
        { text: "", visible: false },
        { root: true })            
      // Muestra alerta de exito
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: "Proveedor eliminado",success: true},
        {root: true}
      )      
      return true // exito en la petición
    } catch (error) {
      // Cerrar overlay
      commit(
        'shared/setOverlayState',
        {text: "", visible: false},
        { root: true }
      )
      // Mensaje de error
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: buildErrorMessage(error),errorOnPetition: true,},
        {root: true}
      )
      return false // Error en la petición
    }
}

export const actualizaEstatusProveedorAction = async ({ commit }, rfc) => {    
    try { 
      // Muestra overlay     
      commit(
        'shared/setOverlayState',
        {text: "Actualizando estatus...", visible: true},
        { root: true }
      )
      // Conecta con el servicio para eliminar
      await AdminService.actualizaEstausProveedor(rfc)      
      // Cierra overlay
      commit(
        'shared/setOverlayState',
        { text: "", visible: false },
        { root: true })            
      // Muestra alerta de exito
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: "Estatus actualizado",success: true},
        {root: true}
      )      
      return true // exito en la petición
    } catch (error) {
      // Cerrar overlay
      commit(
        'shared/setOverlayState',
        {text: "", visible: false},
        { root: true }
      )
      // Mensaje de error
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: buildErrorMessage(error),errorOnPetition: true,},
        {root: true}
      )
      return false // Error en la petición
    }
}
export const enviaCorreoIndividualAction = async ({ commit }, message) => {    
    try { 
      // Muestra overlay     
      commit(
        'shared/setOverlayState',
        {text: "Envíando correo...", visible: true},
        { root: true }
      )
      // Conecta con el servicio para eliminar
      await AdminService.enviaCorreoPersonalizado(message)      
      // Cierra overlay
      commit(
        'shared/setOverlayState',
        { text: "", visible: false },
        { root: true })            
      // Muestra alerta de exito
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: "Correo envíado exitosamente",success: true},
        {root: true}
      )           
    } catch (error) {
      // Cerrar overlay
      commit(
        'shared/setOverlayState',
        {text: "", visible: false},
        { root: true }
      )
      // Mensaje de error
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: buildErrorMessage(error),errorOnPetition: true,},
        {root: true}
      )      
    }
}
export const correoAvisoExpiracionAction = async ({ commit }, message) => {    
    try { 
      // Muestra overlay     
      commit(
        'shared/setOverlayState',
        {text: "Enviando correos...", visible: true},
        { root: true }
      )
      // Conecta con el servicio para eliminar
      await AdminService.enviaCorreoAvisoExpiracion(message)      
      // Cierra overlay
      commit(
        'shared/setOverlayState',
        { text: "", visible: false },
        { root: true })            
      // Muestra alerta de exito
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: "Correos enviados",success: true},
        {root: true}
      )            
    } catch (error) {
      // Cerrar overlay
      commit(
        'shared/setOverlayState',
        {text: "", visible: false},
        { root: true }
      )
      // Mensaje de error
      commit(
        'shared/setShowErrorOrSuccessAlert', 
        {message: buildErrorMessage(error),errorOnPetition: true,},
        {root: true}
      )      
    }
}
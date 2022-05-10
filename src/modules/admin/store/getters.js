export const getListaProveedoresState = ( state ) => () => {
    return state.listaProveedores
}
export const getListaProvExpiradosState = ( state ) => () => {
    return state.listaProveedoresExpirados
}
export const getListaProvNoValidosState = ( state ) => () => {
    return state.listaProveedoresNoValidados
}
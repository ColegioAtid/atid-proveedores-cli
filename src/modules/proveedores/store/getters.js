export const getDatosProveedor = ( state ) => () => {
    return state.datosProveedor;
}
export const getDocumentos = ( state ) => () => {
    return state.filesUpload;
}
export const getDataProveedor = ( state ) => () => {
    return state.dataProveedor;
}

export const getRutasNavigator = ( state ) => () => {
    return state.rutasNavigator;
}
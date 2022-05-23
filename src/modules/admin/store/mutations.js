export const setListaProveedores =  ( state, data ) => {
    state.listaProveedores = data
}
export const setListaProveedoresExpirados =  ( state, data ) => {
    state.listaProveedoresExpirados = data
}
export const setListaProveedoresNoValidados =  ( state, data ) => {
    state.listaProveedoresNoValidados = data
}

export const setListaProveedoresFiles =  ( state, payload ) => {
    state.listaFiles.general = payload.general_files;
    state.listaFiles.historico = payload.historico;
}


export const setDataForm = (state, value) => {
  state.datosProveedor = value;
};
export const setDocumentos = (state, value) => {
  state.filesUpload = value.documentos;

  for (const key in state.documentosProveedor) {
    state.documentosProveedor[key].attached = false;
  }

  for (const file of value.documentos) {
    if (file.file !== null) {
      state.documentosProveedor[file.keyName].attached = true;
    }
  }

};

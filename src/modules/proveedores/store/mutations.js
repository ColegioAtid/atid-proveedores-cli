import { getUserInfo } from "@/helpers/utils";

export const setDataForm = (state, value) => {
  let { rfc } = getUserInfo();
  state.datosProveedor = value;
  state.datosProveedor.rfc = rfc;
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

export const setCorreoUpdate = (state, value) => {
  state.correoToUpdate = value;
}

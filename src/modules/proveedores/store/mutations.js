import { getUserInfo } from "@/helpers/utils";

export const setDataForm = (state, value) => {
  let { rfc } = getUserInfo();
  state.datosProveedor = value;
  state.datosProveedor.rfc = rfc;
};

export const setCorreoUpdate = (state, value) => {
  state.correoToUpdate = value;
}

export const setDataProveedor = (state, value) => {
  state.dataProveedor = value;
}

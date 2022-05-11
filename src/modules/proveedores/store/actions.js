import ProveedoresService from "../services/proveedores-service";

export const sendFilesproveedor = async ({state}) => {
  let filesPromises = [];
  for (let i = 0; i < state.filesUpload.length; i++) {
    filesPromises.push(ProveedoresService.uploadFiles(state.filesUpload[i]));
  }
  await Promise.all(filesPromises);
};

export const sendDataProveedor = async ({state}) => {
  await ProveedoresService.sendDataProveedores(state.datosProveedor);
};

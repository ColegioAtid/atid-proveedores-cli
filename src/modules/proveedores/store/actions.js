import { getUserInfo } from "@/helpers/utils";
import ProveedoresService from "../services/proveedores-service";

export const sendFilesproveedor = async (_ , files ) => {
  let filesPromises = [];
  for (let i = 0; i < files.length; i++) {
    filesPromises.push(ProveedoresService.uploadFiles(files[i].file));
  }
  await Promise.all(filesPromises);
};

export const sendDataProveedor = async ({ state }) => {
  await ProveedoresService.sendDataProveedores(state.datosProveedor);
};

export const getDataproveedor = async () => {
  let { rfc } = getUserInfo();
  let data = await ProveedoresService.getDataProveedor(rfc);
  return data.data;
};

export const updateCorreoProv = async ({ state }) => {
  await ProveedoresService.updateCorreoProv(state.correoToUpdate);
};

export const updateDataProv = async ({ state }) => {
  await ProveedoresService.updateDataProveedor(state.datosProveedor);
};

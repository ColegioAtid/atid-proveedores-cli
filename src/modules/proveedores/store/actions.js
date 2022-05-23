import { getUserInfo } from "@/helpers/utils";
import ProveedoresService from "../services/proveedores-service";

export const sendFilesproveedor = async ({ state }, {files, tipo}) => {
  if (tipo === 'POST') {      
    let filesPromises = [];
    for (let i = 0; i < files.length; i++) {
      filesPromises.push(
        ProveedoresService.uploadFiles(files[i], state.dataProveedor.id_historico)
      );
    }
    await Promise.all(filesPromises);
  }else{    
    await ProveedoresService.uploadFiles(files, state.dataProveedor.id_historico)
  }
};

export const sendDataProveedor = async ({ state }) => {
  await ProveedoresService.sendDataProveedores(state.datosProveedor);
};

export const getDataproveedor = async ({commit}) => {
  let { rfc } = getUserInfo();
  let data = await ProveedoresService.getDataProveedor(rfc);  
  commit('setDataProveedor',data.data.proveedorData);
  commit('setRutasNavigator');
};

export const updateCorreoProv = async ({ state }) => {
  await ProveedoresService.updateCorreoProv(state.correoToUpdate);
};

export const updateDataProv = async ({ state }) => {
  await ProveedoresService.updateDataProveedor(state.datosProveedor);
};

export const incrementHistorico = async () => {
  let { rfc } = getUserInfo();
  let data = await ProveedoresService.incrementHistorico(rfc);
  return data.data;
};

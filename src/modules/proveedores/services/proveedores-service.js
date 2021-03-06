import { Service } from "@/services/serivce";
import {
  createFileAPIConnection,
  createProveedoresAPIConnection,
} from "@/services/http-common";
import { getAuthToken, getUserInfo } from "@/helpers/utils";

class ProveedoresService extends Service {
  constructor() {
    super();
  }

  uploadFiles(payload, idHistorico) {
    let formData = new FormData();
    let fileCopy = new File(
      [payload.file],
      `${payload.rfc}_${payload.filename}.pdf`
    );
    formData.append("pdf", fileCopy);
    return createFileAPIConnection.post(
      `/media/upload-proveedores-file/${idHistorico}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
  updateFile(payload) {
    let formData = new FormData();
    let fileCopy = new File(
      [payload.file],
      `${payload.rfc}_${payload.nameFile}.pdf`
    );
    formData.append("pdf", fileCopy);
    return createFileAPIConnection.post(
      `/media/update-proveedores-file/${payload.rfc}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  deleteFilesServer() {
    const { rfc } = getUserInfo();
    return createFileAPIConnection.get(`/media/delete-local-files/${rfc}`);
  }

  getDataProveedor(rfcProveedor) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    return createProveedoresAPIConnection.get(
      `/proveedores/get-data-proveedor?rfc=${rfcProveedor}`
    );
  }

  sendDataProveedores(data) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    return createProveedoresAPIConnection.post(
      "/proveedores/registra-datos-proveedor",
      data
    );
  }

  updateCorreoProv(dataToUpdate) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    return createProveedoresAPIConnection.put(
      "/proveedores/update-correo",
      dataToUpdate
    );
  }

  updateDataProveedor(dataToUpdate) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    return createProveedoresAPIConnection.put(
      "/proveedores/update-data",
      dataToUpdate
    );
  }

  incrementHistorico(rfcProveedor) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    return createProveedoresAPIConnection.put(
      `/proveedores/historico-increment?rfc=${rfcProveedor}`
    );
  }
}

export default new ProveedoresService();

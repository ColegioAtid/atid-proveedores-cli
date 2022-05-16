import { Service } from "@/services/serivce";
import {
  createFileAPIConnection,
  createProveedoresAPIConnection,
} from "@/services/http-common";
import { getAuthToken } from "@/helpers/utils";

class ProveedoresService extends Service {
  constructor() {
    super();
  }

  uploadFiles(payload) {
    let formData = new FormData();
    let fileCopy = new File(
      [payload.file],
      `${payload.rfc}_${payload.nameFile}.pdf`
    );
    formData.append("pdf", fileCopy);
    return createFileAPIConnection.post(
      "/media/upload-proveedores-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  getDataProveedor(rfcProveedor) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    console.log("HOLA GET DATA, rfc ", rfcProveedor);
    return createProveedoresAPIConnection.get(
      `/get-data-proveedor?rfc=${rfcProveedor}`
    );
  }

  sendDataProveedores(data) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    console.log(data);
    // return createProveedoresAPIConnection.post('/registra-datos-proveedor', data);
    return;
  }

  updateCorreoProv(dataToUpdate) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    console.log(dataToUpdate);
    // return createProveedoresAPIConnection.put('/update-correo', dataToUpdate);
  }

  updateDataProveedor(dataToUpdate) {
    createProveedoresAPIConnection.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getAuthToken()}`;
    console.log(dataToUpdate);
    // return createProveedoresAPIConnection.put('/update-data', dataToUpdate);
  }
}

export default new ProveedoresService();

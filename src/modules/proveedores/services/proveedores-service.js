import { Service } from "@/services/serivce";
import { createFileAPIConnection } from "@/services/http-common";

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
      "/media/upload-proveedores-filee",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  sendDataProveedores(data) {
    console.log(data);
    return;
  }
}

export default new ProveedoresService();

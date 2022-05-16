export default () => ({
  filesUpload: [],
  datosProveedor: {
    nombre_empresa: null,
    domicilio_fiscal: null,
    razon_social: null,
    nombre_proveedor: null,
    appa_proveedor: null,
    apma_proveedor: null,
    numero_prim: null,
    numero_sec: null,
    rfc: null,
  },
  documentosProveedor: {
    documento1: {
      filename: "documento1.pdf",
      filetag: "documento 1",
      attached: false,
    },
    documento2: {
      filename: "documento2.pdf",
      filetag: "documento 2",
      attached: false,
    },
    documento3: {
      filename: "documento3.pdf",
      filetag: "documento 3",
      attached: false,
    },
    documento4: {
      filename: "documento4.pdf",
      filetag: "documento 4",
      attached: false,
    },
    documento5: {
      filename: "documento5.pdf",
      filetag: "documento 5",
      attached: false,
    },
  },
  correoToUpdate: {
  },
});

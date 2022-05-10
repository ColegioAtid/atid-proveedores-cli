export default () => ({
  filesUpload: [],
  datosProveedor: {
    nombreEmpresa: null,
    domicilioFiscal: null,
    razonSocial: null,
    nombreContacto: null,
    correoContacto: null,
    numeroContacto1: null,
    numeroContacto2: null,
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
});

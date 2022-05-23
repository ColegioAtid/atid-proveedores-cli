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

export const setRutasNavigator = (state) => {

  const rutas = [
    {
      title: "Datos generales",
      icon: "mdi-home-circle",
      route: {
        name: "datos-generales-proveedores",
        params: null,
      },
    },
    {
      title: "Actualización de datos",
      icon: "mdi-sign-text",
      route: {
        name: "datos-proveedores",
        params: null,
      },
    },
    {
      title: "Actualización de documentos",
      icon: "mdi-file-send",
      route: {
        name: "documentos-proveedores",
        params: null,
      },
    },
    {
      title: "Registro",
      icon: "mdi-border-color",
      route: {
        name: "registro-proveedores",
        params: null,
      },
    },
  ]

  if (!state.dataProveedor.datosGenerales) {
    state.rutasNavigator = rutas.filter((ruta) => {
      return (
        ruta.title !== "Actualización de documentos" &&
        ruta.title !== "Actualización de datos"
      );
    });

  } else {
    state.rutasNavigator = rutas.filter((ruta) => {
      return ruta.title !== "Registro"
    });
  }
}

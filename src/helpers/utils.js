import decode from "jwt-decode";

/**
 * Función que obtiene el JTW-TOKEN de
 * autenticación para poder dar acceso a los demás servicios
 * @returns String TOKEN (si existe)
 */

export const getAuthToken = () => {
  const token = localStorage.getItem("jwt-proveedores") || null;
  return token;
};

/**
 * Función que retorna los headers para
 * enviarlos en las peticiones HTTP al servidor
 * @returns {Object} Headers de authorization
 */
export const getHeadersOnHTTP = () => {
  let token = getAuthToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

/**
 * Función que se encarga de informar el sistema
 * si el usuario ha iniciado sesión y si su token
 * no ha expirado
 * @returns Boolean
 */
export const isLoggedIn = () => {
  let authToken = getAuthToken();
  return !!authToken && !isTokenExpired(authToken);
};

/**
 * Verifica que el tiempo de vida del token
 * @param {*} token 
 * @returns Date
 */
const isTokenExpired = (token) => {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
};

/**
 * Obtiene la fecha de expiración de token
 * @param {*} encodedToken 
 * @returns token
 */
const getTokenExpirationDate = (encodedToken) => {
  let token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }

  let date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
};

/**
 * Obtiene la información del usuario
 *  que se encuentra dentro del toekn
 * @returns {Object} User info
 */
export const getUserInfo = () => {
  if (isLoggedIn()) {
    return decode(getAuthToken());
  }
};


/**
 * Verifica si los valores de un objetos son todos
 * vacios.
 * @param {*} object 
 * @returns boolan
 */
export const isEmptyObjectValues = (object) => {
  for(const property in object){
    if(object[property] === "") return true;
  }
  return false;
}

/**
 * Se encarga formar el mensaje de alerta en caso de errores
 * @param {*} err 
 * @returns String (meesage)
 */
export const buildErrorMessage  = (err) => {
  if (err.response) {
    // if (err.response.data === undefined || err.response.data === "" || err.response.data === null){
    //   return "Hubo un error interno al tratar de realizar la petición";
    // }
    // Error al procesar información statuscode 2.x.x
    return err.response.data.message + " - " + err.response.status;
  } else if (err.request) {
      // Error de conexión con el servidor
      return "¡Hubo un error al conectar con el servidor, intente más tarde!";
  } else {
      // Error interno
      console.log(err);
      return "Hubo un error interno al tratar de realizar la petición";
  }
}
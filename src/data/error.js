export const HTTP_ERRORS = {
    400: {
        status: 400,
        title: "Petición Inválida",
        message: "Los datos enviados son incorrectos. Por favor, verifica la información."
    },
    401: {
        status: 401,
        title: "No Autorizado",
        message: "Tu sesión ha expirado o no tienes permisos para ver este contenido."
    },
    404: {
        status: 404,
        title: "No Encontrado",
        message: "El recurso que buscas no existe o ha sido movido."
    },
    500: {
        status: 500,
        title: "Error de Servidor",
        message: "Algo salió mal en nuestros servidores. Inténtalo de nuevo más tarde."
    },
    DEFAULT: {
        status: "UNKNOW",
        title: "Error Inesperado",
        message: "Ha ocurrido un problema de red. Revisa tu conexión."
    }
};

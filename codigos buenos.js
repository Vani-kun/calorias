      function obtenerInfoDispositivoCompleta() {
    const ua = navigator.userAgent;
    let sistemaOperativo = "Desconocido";
    let navegador = "Desconocido";
    let dispositivo = "Computadora de Escritorio";

    // 1. Detectar Sistema Operativo
    if (/win/i.test(ua)) {
        sistemaOperativo = "Windows";
        dispositivo = "PC con Windows";
    } else if (/mac/i.test(ua) && !/iphone|ipad|ipod/i.test(ua)) {
        sistemaOperativo = "macOS";
        dispositivo = "Mac";
    } else if (/android/i.test(ua)) {
        sistemaOperativo = "Android";
        dispositivo = "Dispositivo Android";
    } else if (/iphone|ipad|ipod/i.test(ua)) {
        sistemaOperativo = "iOS";
        dispositivo = /ipad/i.test(ua) ? "iPad" : "iPhone";
    } else if (/linux/i.test(ua)) {
        sistemaOperativo = "Linux";
        dispositivo = "PC con Linux";
    }

    // 2. Detectar Navegador
    if (/edg/i.test(ua)) {
        navegador = "Microsoft Edge";
    } else if (/chrome|crios/i.test(ua)) {
        navegador = "Google Chrome";
    } else if (/firefox|fxios/i.test(ua)) {
        navegador = "Firefox";
    } else if (/safari/i.test(ua) && !/chrome/i.test(ua)) {
        navegador = "Safari";
    } else {
        navegador = "Navegador web";
    }

    // 3. Obtener Memoria RAM aproximada
    // Nota: Por privacidad, algunos navegadores o dispositivos no devuelven este dato exacto (retorna undefined)
    const ram = navigator.deviceMemory ? `${navigator.deviceMemory} GB aprox.` : "No disponible por privacidad";

    // 4. Detectar Tipo de Conexión (Wi-Fi, 4G, etc.)
    const conexion = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    let tipoConexion = "Desconocida";
    if (conexion) {
        // effectiveType suele devolver '4g', '3g', etc. (en conexiones rápidas como Wi-Fi o fibra en PC suele reportar 4g o similar)
        tipoConexion = conexion.effectiveType ? conexion.effectiveType.toUpperCase() : "Desconocida";
        if (conexion.type) {
            tipoConexion += ` (${conexion.type})`; // A veces arroja 'wifi', 'cellular', etc.
        }
    }

    // 5. Obtener Zona Horaria
    const zonaHoraria = Intl.DateTimeFormat().resolvedOptions().timeZone || "Desconocida";

    // 6. Construir el texto final detallado
    return `Hola, estás usando un dispositivo ${dispositivo} con el navegador ${navegador} y sistema operativo ${sistemaOperativo}. ` +
           `Tu equipo cuenta con una RAM de ${ram}, estás conectado mediante red tipo ${tipoConexion} ` +
           `y te encuentras en la zona horaria ${zonaHoraria}.`;
}
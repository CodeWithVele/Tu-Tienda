// Control de versión - Tu-Tienda
const APP_VERSION = '20260208232514';
const APP_NAME = 'Tu-Tienda';

console.log(APP_NAME + ' - Versión: ' + APP_VERSION);

// Si es versión nueva, forzar recarga
if (localStorage.getItem('app_version') !== APP_VERSION) {
    console.log('🔄 Nueva versión disponible. Actualizando...');
    localStorage.setItem('app_version', APP_VERSION);
    
    // Recargar en 2 segundos
    setTimeout(() => {
        window.location.reload(true);
    }, 2000);
}

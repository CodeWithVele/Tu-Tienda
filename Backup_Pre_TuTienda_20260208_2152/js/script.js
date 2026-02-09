// script.js - FUNCIONALIDADES PRINCIPALES DE Tu-Tienda
console.log("ðŸš€ Tu-Tienda cargando...");

// InicializaciÃ³n cuando el DOM estÃ© listo
document.addEventListener('DOMContentLoaded', function() {
    console.log("âœ… DOM cargado, iniciando Tu-Tienda...");
    
    // Verificar si hay negocios cargados
    if (typeof window.negociosMacas === 'undefined') {
        console.warn("âš ï¸ No se encontrÃ³ negocios.js, cargando datos de respaldo...");
        cargarDatosRespaldo();
    }
    
    // Inicializar contador de negocios
    actualizarContadorNegocios();
    
    // Cargar negocios en la pÃ¡gina principal
    cargarNegociosInicio();
    
    // Configurar sistema de compartir
    configurarCompartir();
    
    // Configurar menÃº de navegaciÃ³n
    configurarNavegacion();
    
    console.log("ðŸŽ‰ Tu-Tienda completamente cargado");
});

// FunciÃ³n para cargar datos de respaldo si no hay negocios.js
function cargarDatosRespaldo() {
    window.negociosMacas = [
        {
            id: 1,
            nombre: "ZapaterÃ­a Colombiano",
            categoria: "ReparaciÃ³n de Calzado",
            descripcion: "Â¡Gracias por Preferirnos! ðŸŒŸ 35 aÃ±os reparando el calzado de Macas.",
            ubicacion: "Macas Centro",
            telefono: "0981342236",
            fundador: true
        }
    ];
}

// FunciÃ³n para actualizar el contador de negocios
function actualizarContadorNegocios() {
    const contador = document.getElementById('contadorNumero');
    if (contador && window.negociosMacas) {
        contador.textContent = window.negociosMacas.length;
    }
}

// FunciÃ³n para cargar negocios en la pÃ¡gina principal
function cargarNegociosInicio() {
    const contenedor = document.getElementById('listaNegocios');
    if (!contenedor) return;
    
    // Limpiar mensaje de carga
    contenedor.innerHTML = '';
    
    if (!window.negociosMacas || window.negociosMacas.length === 0) {
        contenedor.innerHTML = `
            <div class="sin-resultados">
                <i class="fas fa-exclamation-circle"></i>
                <h3>No hay negocios disponibles</h3>
                <p>Pronto agregaremos mÃ¡s negocios de Macas.</p>
            </div>
        `;
        return;
    }
    //ðŸ˜’ðŸ˜’ðŸ˜’
    function cargarNegociosInicio() {
    console.log("ðŸ”„ Cargando negocios en inicio...");
    console.log("Negocios disponibles:", window.negociosMacas);
    
    const contenedor = document.getElementById('listaNegocios');
    if (!contenedor) {
        console.error("âŒ No se encontrÃ³ #listaNegocios");
        return;
    }
    
    // ... resto del cÃ³digo ...
}
    //ðŸ˜’ðŸ˜’ðŸ˜’
    // Mostrar mÃ¡ximo 4 negocios destacados en la pÃ¡gina principal
    const negociosAMostrar = window.negociosMacas.slice(0, 4);
    
    negociosAMostrar.forEach(negocio => {
        const tarjeta = crearTarjetaNegocio(negocio);
        contenedor.appendChild(tarjeta);
    });
    
    // Si hay mÃ¡s de 4 negocios, agregar botÃ³n para ver todos
    if (window.negociosMacas.length > 4) {
        const verTodosBtn = document.createElement('a');
        verTodosBtn.href = 'negocios.html';
        verTodosBtn.className = 'btn-ver-todos';
        verTodosBtn.innerHTML = `
            <i class="fas fa-list"></i> Ver todos los ${window.negociosMacas.length} negocios
        `;
        contenedor.appendChild(verTodosBtn);
    }
}

// FunciÃ³n para crear tarjeta de negocio
// function crearTarjetaNegocio(negocio) {
//     const tarjeta = document.createElement('div');
//     tarjeta.className = 'tarjeta-negocio';
    
//     const contenidoHTML = `
//         <div class="encabezado-tarjeta">
//             <span class="etiqueta-categoria">
//                 <i class="fas fa-tag"></i> ${negocio.categoria}
//             </span>
//             ${negocio.fundador ? '<span class="etiqueta-destacado">ðŸŒŸ FOUNDER</span>' : ''}
//         </div>
        
//         <h3 class="nombre-negocio">
//             ${negocio.nombre}
//         </h3>
        
//         <p class="descripcion-negocio">
//             ${negocio.descripcion}
//         </p>
        
//         <div class="detalles-negocio">
//             <div class="detalle-item">
//                 <i class="fas fa-map-marker-alt"></i>
//                 <span>${negocio.ubicacion}</span>
//             </div>
//             ${negocio.telefono ? `
//             <div class="detalle-item">
//                 <i class="fas fa-phone"></i>
//                 <span>${negocio.telefono}</span>
//             </div>
//             ` : ''}
//             ${negocio.horario ? `
//             <div class="detalle-item">
//                 <i class="fas fa-clock"></i>
//                 <span>${negocio.horario}</span>
//             </div>
//             ` : ''}
//         </div>
        
//         <div class="botones-accion">
//             ${negocio.telefono ? `
//             <a href="tel:${negocio.telefono}" class="btn-accion btn-llamar">
//                 <i class="fas fa-phone"></i> LLAMAR
//             </a>
//             ` : ''}
            
//             ${negocio.whatsapp ? `
//             <a href="https://wa.me/${negocio.whatsapp}" class="btn-accion btn-whatsapp" target="_blank">
//                 <i class="fab fa-whatsapp"></i> WHATSAPP
//             </a>
//             ` : ''}
            
//             <a href="dm.html?negocio=${negocio.id}" class="btn-accion btn-dm">
//                 <i class="fas fa-comment-dots"></i> DM
//             </a>
//         </div>
//     `;
    
//     tarjeta.innerHTML = contenidoHTML;
//     return tarjeta;
// }
// REEMPLAZA la funciÃ³n crearTarjetaNegocio en script.js con esta versiÃ³n:

function crearTarjetaNegocio(negocio) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'negocio-card';
    tarjeta.setAttribute('data-category', negocio.etiquetas ? negocio.etiquetas[0] : 'general');
    tarjeta.setAttribute('data-keywords', negocio.etiquetas ? negocio.etiquetas.join(' ') : '');
    
    // Generar servicios/etiquetas
    const serviciosHTML = negocio.servicios ? negocio.servicios.map(servicio => 
        `<span class="etiqueta-item">${servicio}</span>`
    ).join('') : '';
    
    const contenidoHTML = `
        <div class="negocio-header">
            <span class="etiqueta-categoria">
                <i class="fas fa-tag"></i> ${negocio.categoria || 'Negocio'}
            </span>
            ${negocio.fundador ? '<span class="etiqueta-destacado">ðŸŒŸ FOUNDER</span>' : ''}
            ${negocio.horario && negocio.horario.includes('24') ? '<span class="etiqueta-destacado" style="background: #dc3545; color: white;">ðŸš¨ 24H</span>' : ''}
        </div>
        
        <h3 class="nombre-negocio">
            ${negocio.nombre || 'Negocio sin nombre'}
        </h3>
        
        <p class="descripcion-negocio">
            ${negocio.descripcion || 'DescripciÃ³n no disponible.'}
        </p>
        
        <div class="detalles-negocio">
            <div class="detalle-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${negocio.ubicacion || 'UbicaciÃ³n no disponible'}</span>
            </div>
            
            ${negocio.telefono ? `
            <div class="detalle-item">
                <i class="fas fa-phone"></i>
                <span>${negocio.telefono}</span>
            </div>
            ` : ''}
            
            ${negocio.whatsapp ? `
            <div class="detalle-item">
                <i class="fab fa-whatsapp"></i>
                <span>${negocio.whatsapp}</span>
            </div>
            ` : ''}
            
            ${negocio.horario ? `
            <div class="detalle-item">
                <i class="fas fa-clock"></i>
                <span>${negocio.horario}</span>
            </div>
            ` : ''}
        </div>
        
        ${serviciosHTML ? `
        <div class="etiquetas-negocio" style="margin-top: 15px;">
            ${serviciosHTML}
        </div>
        ` : ''}
        
        <div class="botones-accion">
            ${negocio.telefono ? `
            <a href="tel:${negocio.telefono}" class="btn-accion btn-llamar">
                <i class="fas fa-phone"></i> LLAMAR
            </a>
            ` : ''}
            
            ${negocio.whatsapp ? `
            <a href="https://wa.me/${negocio.whatsapp}" class="btn-accion btn-whatsapp" target="_blank">
                <i class="fab fa-whatsapp"></i> WHATSAPP
            </a>
            ` : ''}
            
            <a href="dm.html?negocio=${negocio.id}" class="btn-accion btn-dm">
                <i class="fas fa-comment-dots"></i> DM
            </a>
            
            ${negocio.coordenadas ? `
            <a href="mapa.html?lat=${negocio.coordenadas.lat}&lng=${negocio.coordenadas.lng}" class="btn-accion btn-mapa">
                <i class="fas fa-map-marker-alt"></i> MAPA
            </a>
            ` : ''}
        </div>
    `;
    
    tarjeta.innerHTML = contenidoHTML;
    return tarjeta;
}

// Configurar sistema de compartir
function configurarCompartir() {
    const btnCompartir = document.getElementById('btnCompartir');
    if (btnCompartir) {
        btnCompartir.addEventListener('click', function() {
            const url = window.location.href;
            const mensaje = "Â¡Mira esta app increÃ­ble para encontrar negocios en Macas! - Tu-Tienda";
            const whatsappURL = `https://wa.me/?text=${encodeURIComponent(mensaje + " " + url)}`;
            
            window.open(whatsappURL, '_blank');
        });
    }
}

// Configurar navegaciÃ³n del menÃº
function configurarNavegacion() {
    // Verificar si ya tiene acceso para actualizar Ã­conos
    if (typeof window.permisosPorSeccion !== 'undefined') {
        const dmIcon = document.querySelector('#dm-icono, .dm-notificacion');
        const alertasIcon = document.querySelector('#alertas-icono');
        
        if (dmIcon && window.permisosPorSeccion.dm) {
            dmIcon.textContent = 'ðŸ’¬';
            dmIcon.style.background = '#6a11cb';
        }
        
        if (alertasIcon && window.permisosPorSeccion.alertas) {
            alertasIcon.textContent = 'ðŸ””';
            alertasIcon.style.color = '#28a745';
        }
    }
}

// FunciÃ³n para contactar negocio (global)
window.contactarNegocio = function(telefono) {
    if (telefono && telefono.trim() !== '') {
        const mensaje = "Hola, vi tu negocio en Tu-Tienda y me interesa...";
        const url = `https://wa.me/593${telefono.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    } else {
        alert('Este negocio no tiene nÃºmero de contacto registrado.');
    }
};

// FunciÃ³n para ver en mapa (global)
window.verEnMapa = function(ubicacion) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`;
    window.open(url, '_blank');
};

// Exportar para debugging
console.log("ðŸ“¦ script.js cargado exitosamente");


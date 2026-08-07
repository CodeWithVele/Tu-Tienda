// ==========================================
// GUARDAR NEGOCIOS EN FIRESTORE
// ==========================================

// Función para guardar un negocio en Firestore
async function guardarNegocioEnFirestore(negocio) {
    try {
        const db = firebase.firestore();
        await db.collection("negocios").add({
            nombre: negocio.nombre,
            categoria: negocio.categoria,
            ubicacion: negocio.ubicacion,
            descripcion: negocio.descripcion,
            telefono: negocio.telefono,
            email: negocio.email,
            fecha: new Date()
        });
        console.log("✅ Negocio guardado en Firestore");
        return true;
    } catch (error) {
        console.error("❌ Error al guardar:", error);
        return false;
    }
}

// Función para obtener todos los negocios
async function obtenerNegociosDeFirestore() {
    try {
        const db = firebase.firestore();
        const snapshot = await db.collection("negocios").get();
        const negocios = [];
        snapshot.forEach(doc => {
            negocios.push({ id: doc.id, ...doc.data() });
        });
        return negocios;
    } catch (error) {
        console.error("❌ Error al obtener:", error);
        return [];
    }
}
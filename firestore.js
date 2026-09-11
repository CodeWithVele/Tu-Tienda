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
// Hacer las funciones accesibles globalmente
window.guardarNegocioEnFirestore = guardarNegocioEnFirestore;
window.obtenerNegociosDeFirestore = obtenerNegociosDeFirestore;
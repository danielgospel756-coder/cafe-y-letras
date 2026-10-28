// ==========================================================================
// ARCHIVO JAVASCRIPT PRINCIPAL: CAFÉ & LETRAS TRADICIONAL
// ==========================================================================

// 1. Array de objetos con frases selectas del Martín Fierro
const frasesMartinFierro = [
    {
        texto: "Sepan que olvidar lo malo también es tener memoria.",
        autor: "José Hernández (Martín Fierro)"
    },
    {
        texto: "La tierra no da fruto si no la riega el sudor; el trabajo es la virtud que nos da nuestro creador.",
        autor: "José Hernández (Martín Fierro)"
    },
    {
        texto: "Para vencer un peligro, salvar de cualquier abismo, por experiencia os lo digo: más que el sable y que la lanza suele servir la confianza que el hombre tiene en sí mismo.",
        autor: "José Hernández (Martín Fierro)"
    },
    {
        texto: "El fuego para calentar debe ir siempre por abajo; el que quiere andar con ventaja, póngase en la fila del trabajo.",
        autor: "José Hernández (Martín Fierro)"
    },
    {
        texto: "Hay hombres que de su cencia la cabeza tienen llena; hay sabios de todas menas, mas digo sin ser doctor: es mejor que aprender mucho el aprender cosas buenas.",
        autor: "José Hernández (Martín Fierro)"
    }
];

// 2. Captura única de elementos del DOM por su ID obligatoria
const textoFrase = document.getElementById("texto-frase");
const autorFrase = document.getElementById("autor-frase");
const btnNuevaFrase = document.getElementById("btn-nueva-frase");
const btnCambiarTema = document.getElementById("btn-cambiar-tema");
const menuLibros = document.getElementById("menu-libros");
const notificacionLibro = document.getElementById("notificacion-libro");
const menuCombos = document.getElementById("menu-combos");
const notificacionCombo = document.getElementById("notificacion-combo");

// 3. Evento 'click' para cambiar de frase aleatoriamente (Math.random)
btnNuevaFrase.addEventListener("click", () => {
    const indiceAleatorio = Math.floor(Math.random() * frasesMartinFierro.length);
    const fraseSeleccionada = frasesMartinFierro[indiceAleatorio];
    textoFrase.textContent = `"${fraseSeleccionada.texto}"`;
    autorFrase.textContent = `— ${fraseSeleccionada.autor}`;
});

// 4. INTERRUPTOR MAESTRO: Cambiar Modo Claro / Oscuro Amarillo Vintage
btnCambiarTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
});

// 5. Interactividad: Menú de Libros Clásicos Nacionales
menuLibros.addEventListener("change", (evento) => {
    const libroSeleccionado = evento.target.value;
    if (libroSeleccionado) {
        notificacionLibro.textContent = `📖 Excelente elección. En unos minutos te acercaremos "${libroSeleccionado}" a tu mesa.`;
        notificacionLibro.classList.remove("oculto");
    }
});

// 6. Interactividad: Menú Virtual de Pedidos e Infusiones Individuales
menuCombos.addEventListener("change", (evento) => {
    const seleccion = evento.target.value;
    if (seleccion) {
        notificacionCombo.innerHTML = `🛒 <strong>Pedido Registrado:</strong><br>${seleccion}<br><small>¡Marchando a tu mesa!</small>`;
        notificacionCombo.classList.remove("oculto");
    }
});


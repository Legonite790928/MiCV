// script.js

// Función para alternar la visibilidad de los detalles de la experiencia laboral
function toggleExperienceDetails() {
    const experienceDetails = document.getElementById('experience-details');
    experienceDetails.classList.toggle('hidden');
}

// Event listener para el botón "Mostrar detalles"
const showDetailsButton = document.getElementById('show-details-button');
showDetailsButton.addEventListener('click', toggleExperienceDetails);

// Puedes agregar más funciones e interactividad según sea necesario.

// Ejemplo: Botón para cambiar de idioma
const languageButton = document.getElementById('language-button');
languageButton.addEventListener('click', () => {
    // Alterna entre idiomas (por ejemplo, inglés y español)
    // Implementa tu lógica aquí
    console.log('¡Idioma cambiado!');
});

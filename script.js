// Base de datos de películas de ejemplo
const moviesDatabase = [
    {
        id: 1,
        title: "El Padrino",
        year: 2022,
        genre: "drama",
        genreLabel: "Drama",
        rating: 9.2,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=El+Padrino",
        director: "Francis Ford Coppola",
        duration: "175 min",
        description: "La historia de la familia Corleone, una de las familias mafiosas más poderosas de Nueva York. Don Vito Corleone es el patriarca de la familia y debe pasar el legado a sus hijos."
    },
    {
        id: 2,
        title: "Interestelar",
        year: 2024,
        genre: "ciencia-ficcion",
        genreLabel: "Ciencia Ficción",
        rating: 8.7,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Interestelar",
        director: "Christopher Nolan",
        duration: "169 min",
        description: "Un grupo de exploradores espaciales viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    },
    {
        id: 3,
        title: "Toy Story 5",
        year: 2024,
        genre: "animacion",
        genreLabel: "Animación",
        rating: 8.3,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Toy+Story+5",
        director: "Pixar Studios",
        duration: "100 min",
        description: "Los juguetes favoritos de todos regresan en una nueva aventura llena de amistad, risas y emociones."
    },
    {
        id: 4,
        title: "Misión Imposible 8",
        year: 2023,
        genre: "accion",
        genreLabel: "Acción",
        rating: 7.9,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Mision+Imposible",
        director: "Christopher McQuarrie",
        duration: "163 min",
        description: "Ethan Hunt y su equipo de la IMF se enfrentan a su misión más peligrosa hasta la fecha."
    },
    {
        id: 5,
        title: "Superbad 2",
        year: 2023,
        genre: "comedia",
        genreLabel: "Comedia",
        rating: 7.5,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Superbad+2",
        director: "Greg Mottola",
        duration: "113 min",
        description: "Una comedia sobre la amistad, el amor y las locuras de la juventud."
    },
    {
        id: 6,
        title: "El Exorcista: Origen",
        year: 2024,
        genre: "terror",
        genreLabel: "Terror",
        rating: 7.8,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=El+Exorcista",
        director: "David Gordon Green",
        duration: "121 min",
        description: "Una nueva entrega de la saga de terror más icónica del cine."
    },
    {
        id: 7,
        title: "Dune: Parte Dos",
        year: 2024,
        genre: "ciencia-ficcion",
        genreLabel: "Ciencia Ficción",
        rating: 8.9,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Dune+2",
        director: "Denis Villeneuve",
        duration: "166 min",
        description: "Paul Atreides se une a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia."
    },
    {
        id: 8,
        title: "Oppenheimer",
        year: 2023,
        genre: "drama",
        genreLabel: "Drama",
        rating: 8.6,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Oppenheimer",
        director: "Christopher Nolan",
        duration: "180 min",
        description: "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica."
    },
    {
        id: 9,
        title: "Spider-Man: Beyond",
        year: 2024,
        genre: "accion",
        genreLabel: "Acción",
        rating: 8.2,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Spider-Man",
        director: "Jon Watts",
        duration: "148 min",
        description: "Peter Parker enfrenta nuevas amenazas mientras intenta mantener su identidad secreta."
    },
    {
        id: 10,
        title: "Inside Out 3",
        year: 2024,
        genre: "animacion",
        genreLabel: "Animación",
        rating: 8.4,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Inside+Out+3",
        director: "Pete Docter",
        duration: "96 min",
        description: "Las emociones de Riley enfrentan nuevos desafíos mientras ella entra en la vida adulta."
    },
    {
        id: 11,
        title: "Alien: Romulus",
        year: 2024,
        genre: "terror",
        genreLabel: "Terror",
        rating: 7.6,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Alien+Romulus",
        director: "Fede Álvarez",
        duration: "119 min",
        description: "Un grupo de jóvenes colonizadores se enfrenta a la forma de vida más aterradora del universo."
    },
    {
        id: 12,
        title: "Barbie World",
        year: 2023,
        genre: "comedia",
        genreLabel: "Comedia",
        rating: 7.7,
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Barbie+World",
        director: "Greta Gerwig",
        duration: "114 min",
        description: "Barbie vive en el mundo perfecto de Barbieland hasta que decide explorar el mundo real."
    }
];

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');
const moviesGrid = document.getElementById('moviesGrid');
const loadingSpinner = document.getElementById('loadingSpinner');
const movieModal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

// Estado de la aplicación
let currentMovies = [...moviesDatabase];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderMovies(currentMovies);
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    genreFilter.addEventListener('change', handleFilters);
    yearFilter.addEventListener('change', handleFilters);
    closeModalBtn.addEventListener('click', closeModal);
    movieModal.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Función de debounce para optimizar búsquedas
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Manejar búsqueda
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const genre = genreFilter.value;
    const year = yearFilter.value;

    currentMovies = moviesDatabase.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm) ||
                              movie.director.toLowerCase().includes(searchTerm);
        const matchesGenre = !genre || movie.genre === genre;
        const matchesYear = !year || movie.year.toString() === year;

        return matchesSearch && matchesGenre && matchesYear;
    });

    showLoading();
    setTimeout(() => {
        hideLoading();
        renderMovies(currentMovies);
    }, 300);
}

// Manejar filtros
function handleFilters() {
    handleSearch();
}

// Mostrar loading
function showLoading() {
    loadingSpinner.classList.remove('hidden');
}

// Ocultar loading
function hideLoading() {
    loadingSpinner.classList.add('hidden');
}

// Renderizar películas
function renderMovies(movies) {
    if (movies.length === 0) {
        moviesGrid.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron películas</h3>
                <p>Intenta con otros términos de búsqueda o filtros</p>
            </div>
        `;
        return;
    }

    moviesGrid.innerHTML = movies.map(movie => createMovieCard(movie)).join('');

    // Agregar event listeners a las tarjetas
    document.querySelectorAll('.movie-card').forEach(card => {
        card.addEventListener('click', () => {
            const movieId = parseInt(card.dataset.id);
            openMovieModal(movieId);
        });
    });
}

// Crear tarjeta de película
function createMovieCard(movie) {
    return `
        <article class="movie-card" data-id="${movie.id}">
            <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">
                    <span>⭐</span>
                    <span>${movie.rating}</span>
                </div>
                <span class="movie-genre">${movie.genreLabel}</span>
            </div>
        </article>
    `;
}

// Abrir modal de película
function openMovieModal(movieId) {
    const movie = moviesDatabase.find(m => m.id === movieId);
    if (!movie) return;

    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="modal-poster">
                <img src="${movie.poster}" alt="Póster de ${movie.title}">
            </div>
            <div class="modal-details">
                <h2>${movie.title}</h2>
                <p><span class="detail-label">Año:</span> ${movie.year}</p>
                <p><span class="detail-label">Director:</span> ${movie.director}</p>
                <p><span class="detail-label">Duración:</span> ${movie.duration}</p>
                <p><span class="detail-label">Género:</span> ${movie.genreLabel}</p>
                <p><span class="detail-label">Calificación:</span> ⭐ ${movie.rating}/10</p>
                <div class="modal-description">
                    <p><span class="detail-label">Sinopsis:</span></p>
                    <p>${movie.description}</p>
                </div>
            </div>
        </div>
    `;

    movieModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    movieModal.classList.add('hidden');
    document.body.style.overflow = '';
}

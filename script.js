// Base de datos de películas de ejemplo
const moviesDatabase = [
    {
        id: 1,
        title: "El Padrino",
        year: 2022,
        releaseDate: "24 mar 1972",
        genre: "drama",
        genreLabel: "Drama",
        rating: 9.2,
        contentRating: "R",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=El+Padrino",
        director: "Francis Ford Coppola",
        duration: "175 min",
        description: "La historia de la familia Corleone, una de las familias mafiosas más poderosas de Nueva York. Don Vito Corleone es el patriarca de la familia y debe pasar el legado a sus hijos."
    },
    {
        id: 2,
        title: "Interestelar",
        year: 2014,
        releaseDate: "7 nov 2014",
        genre: "ciencia-ficcion",
        genreLabel: "Ciencia Ficción",
        rating: 8.7,
        contentRating: "PG-13",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Interestelar",
        director: "Christopher Nolan",
        duration: "169 min",
        description: "Un grupo de exploradores espaciales viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    },
    {
        id: 3,
        title: "Toy Story 5",
        year: 2026,
        releaseDate: "19 jun 2026",
        genre: "animacion",
        genreLabel: "Animación",
        rating: 8.3,
        contentRating: "G",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Toy+Story+5",
        director: "Pixar Studios",
        duration: "100 min",
        description: "Los juguetes favoritos de todos regresan en una nueva aventura llena de amistad, risas y emociones."
    },
    {
        id: 4,
        title: "Misión Imposible 8",
        year: 2025,
        releaseDate: "23 may 2025",
        genre: "accion",
        genreLabel: "Acción",
        rating: 7.9,
        contentRating: "PG-13",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Mision+Imposible",
        director: "Christopher McQuarrie",
        duration: "163 min",
        description: "Ethan Hunt y su equipo de la IMF se enfrentan a su misión más peligrosa hasta la fecha."
    },
    {
        id: 5,
        title: "Superbad 2",
        year: 2023,
        releaseDate: "15 ago 2023",
        genre: "comedia",
        genreLabel: "Comedia",
        rating: 7.5,
        contentRating: "R",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Superbad+2",
        director: "Greg Mottola",
        duration: "113 min",
        description: "Una comedia sobre la amistad, el amor y las locuras de la juventud."
    },
    {
        id: 6,
        title: "El Exorcista: Origen",
        year: 2023,
        releaseDate: "13 oct 2023",
        genre: "terror",
        genreLabel: "Terror",
        rating: 7.8,
        contentRating: "R",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=El+Exorcista",
        director: "David Gordon Green",
        duration: "121 min",
        description: "Una nueva entrega de la saga de terror más icónica del cine."
    },
    {
        id: 7,
        title: "Dune: Parte Dos",
        year: 2024,
        releaseDate: "1 mar 2024",
        genre: "ciencia-ficcion",
        genreLabel: "Ciencia Ficción",
        rating: 8.9,
        contentRating: "PG-13",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Dune+2",
        director: "Denis Villeneuve",
        duration: "166 min",
        description: "Paul Atreides se une a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia."
    },
    {
        id: 8,
        title: "Oppenheimer",
        year: 2023,
        releaseDate: "21 jul 2023",
        genre: "drama",
        genreLabel: "Drama",
        rating: 8.6,
        contentRating: "R",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Oppenheimer",
        director: "Christopher Nolan",
        duration: "180 min",
        description: "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica."
    },
    {
        id: 9,
        title: "Spider-Man: Beyond",
        year: 2024,
        releaseDate: "12 jul 2024",
        genre: "accion",
        genreLabel: "Acción",
        rating: 8.2,
        contentRating: "PG-13",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Spider-Man",
        director: "Jon Watts",
        duration: "148 min",
        description: "Peter Parker enfrenta nuevas amenazas mientras intenta mantener su identidad secreta."
    },
    {
        id: 10,
        title: "Inside Out 3",
        year: 2024,
        releaseDate: "14 jun 2024",
        genre: "animacion",
        genreLabel: "Animación",
        rating: 8.4,
        contentRating: "PG",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Inside+Out+3",
        director: "Pete Docter",
        duration: "96 min",
        description: "Las emociones de Riley enfrentan nuevos desafíos mientras ella entra en la vida adulta."
    },
    {
        id: 11,
        title: "Alien: Romulus",
        year: 2024,
        releaseDate: "16 ago 2024",
        genre: "terror",
        genreLabel: "Terror",
        rating: 7.6,
        contentRating: "R",
        poster: "https://via.placeholder.com/300x450/1a1a1a/e50914?text=Alien+Romulus",
        director: "Fede Álvarez",
        duration: "119 min",
        description: "Un grupo de jóvenes colonizadores se enfrenta a la forma de vida más aterradora del universo."
    },
    {
        id: 12,
        title: "Barbie World",
        year: 2023,
        releaseDate: "21 jul 2023",
        genre: "comedia",
        genreLabel: "Comedia",
        rating: 7.7,
        contentRating: "PG-13",
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
    
    // Section toggle buttons
    const toggleButtons = document.querySelectorAll('.section-toggle button');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Shuffle movies to simulate different content
            currentMovies = [...moviesDatabase].sort(() => Math.random() - 0.5);
            renderMovies(currentMovies);
        });
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

// Crear tarjeta de película - TMDB Style
function createMovieCard(movie) {
    const ratingPercent = Math.round(movie.rating * 10);
    let ratingClass = 'high';
    if (ratingPercent < 70) ratingClass = 'medium';
    if (ratingPercent < 40) ratingClass = 'low';
    
    return `
        <article class="movie-card" data-id="${movie.id}">
            <div class="poster-wrapper">
                <img src="${movie.poster}" alt="Póster de ${movie.title}" loading="lazy">
            </div>
            <div class="movie-info">
                <div class="rating-circle ${ratingClass}">${ratingPercent}<span>%</span></div>
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.releaseDate}</p>
            </div>
        </article>
    `;
}

// Abrir modal de película - TMDB Style
function openMovieModal(movieId) {
    const movie = moviesDatabase.find(m => m.id === movieId);
    if (!movie) return;

    const ratingPercent = Math.round(movie.rating * 10);
    
    modalBody.innerHTML = `
        <div class="modal-body">
            <div class="modal-poster">
                <img src="${movie.poster}" alt="Póster de ${movie.title}">
            </div>
            <div class="modal-details">
                <h2>${movie.title} <span class="modal-year-span">(${movie.year})</span></h2>
                <p class="modal-meta"><span class="modal-rating-badge">${movie.contentRating}</span> ${movie.genreLabel} • ${movie.duration}</p>
                <div class="modal-rating-section">
                    <div class="modal-rating-circle">
                        <div class="rating-display">${ratingPercent}<span>%</span></div>
                        <span class="modal-rating-label">Puntuación<br>de usuarios</span>
                    </div>
                </div>
                <p class="modal-tagline">Una historia épica de ${movie.genreLabel.toLowerCase()}</p>
                <div class="modal-synopsis">
                    <h4>Sinopsis</h4>
                    <p>${movie.description}</p>
                </div>
                <div class="modal-crew">
                    <div class="modal-crew-member">
                        <p class="name">${movie.director}</p>
                        <p class="role">Director</p>
                    </div>
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

// A static mapping of movie page identifiers to the displayed trailer data.
// Each entry includes the title, year, YouTube embed URL, poster image, and description.
const movieData = {
  'spiderman-brand-new-day': {
    title: 'Spider-Man: Brand New Day',
    year: 2026,
    embedUrl: 'https://www.youtube.com/embed/daXaTug8rL4',
    poster: 'images/SBND.jpg',
    description:
      'Step into the next chapter of Spider-Man with action, emotion, and blockbuster thrills.',
  },
  'dune-part-1': {
    title: 'Dune Part 1',
    year: 2021,
    embedUrl: 'https://www.youtube.com/embed/n9xhJrPXop4',
    poster: 'images/Dune.jpg',
    description:
      'A visually epic sci-fi journey through Arrakis, power, and prophecy.',
  },
  '72-hours': {
    title: '72 Hours',
    year: 2026,
    embedUrl: 'https://www.youtube.com/embed/N-J-HR3quc4',
    poster: 'images/72 Hours.jpg',
    description:
      'A tight thriller where every minute counts and tension builds to the finale.',
  },
  moana: {
    title: 'Moana',
    year: 2026,
    embedUrl: 'https://www.youtube.com/embed/n7f6hlKsxxo',
    poster: 'images/moana.jpg',
    description: 'A bold adventure across the ocean with music, heroism, and heart.',
  },
  'back-in-action': {
    title: 'Back in Action',
    year: 2025,
    embedUrl: 'https://www.youtube.com/embed/MV2nYw6gL_w',
    poster: 'images/Back in action.jpg',
    description: 'An adrenaline-packed ride with relentless stunts and fast pacing.',
  },
  havoc: {
    title: 'Havoc',
    year: 2025,
    embedUrl: 'https://www.youtube.com/embed/6txjTWLoSc8',
    poster: 'images/Havoc.jpg',
    description: 'A thrilling take on chaos, danger, and cinematic suspense.',
  },
};

// Read the query string from the current page URL to determine which movie to show.
const params = new URLSearchParams(window.location.search);
const movieKey = params.get('movie');

// Look up the selected movie in our movieData object.
const movie = movieData[movieKey];

// Cache references to the DOM elements that will display movie details.
const titleEl = document.getElementById('playerTitle');
const metaEl = document.getElementById('playerMeta');
const descEl = document.getElementById('playerDescription');
const playerEl = document.getElementById('moviePlayer');

// If the movie exists, populate the page with its data.
if (movie) {
  titleEl.textContent = movie.title;
  metaEl.textContent = `${movie.year}`;
  descEl.textContent = movie.description;

  // Use the YouTube embed URL and enable autoplay, minimal branding, and no related videos.
  playerEl.src = `${movie.embedUrl}?autoplay=1&rel=0&modestbranding=1`;
  playerEl.title = `${movie.title} trailer`;
} else {
  // If the query value does not match any known movie, show a friendly error state.
  titleEl.textContent = 'Movie not found';
  metaEl.textContent = '';
  descEl.textContent =
    'We could not find the movie you selected. Please return to the library and choose another title.';
  playerEl.src = '';
}

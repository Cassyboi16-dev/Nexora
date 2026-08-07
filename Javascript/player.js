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
  'me-before-you': {
    title: 'Me Before You',
    year: 2016,
    embedUrl: 'https://www.youtube-nocookie.com/embed/T0MmkG_nG1U?si=3nO8xFWY2OwqEtJA',
    poster: 'images/Me before You.jpg',
    description: 'A heartfelt romance about love, choice, and the life you can still build.',
  },
  interstellar: {
    title: 'Interstellar',
    year: 2014,
    embedUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    poster: 'images/Interstellar.jpg',
    description: 'A mind-bending journey through space, time, and human endurance.',
  },
  'the-wrath-of-becky': {
    title: 'The Wrath Of Becky',
    year: 2023,
    embedUrl: 'https://www.youtube.com/embed/Q-RnvQACrH0?si=vGl1jiRo1JsCSL5t',
    poster: 'images/The wrath of becky 2023.jpg',
    description: 'A sharp, brutal revenge thriller that keeps the tension high.',
  },
  'the-old-guard': {
    title: 'The Old Guard',
    year: 2020,
    embedUrl: 'https://www.youtube.com/embed/aK-X2d0lJ_s?si=zo00XgDeFNeDZPke',
    poster: 'images/The Old Guard.jpg',
    description: 'An immortal team faces a new threat and a changing world.',
  },
  'fast-x': {
    title: 'Fast X',
    year: 2023,
    embedUrl: 'https://www.youtube.com/embed/32RAq6JzY-w',
    poster: 'images/FastX.jpg',
    description: 'The Fast saga accelerates into a high-stakes global showdown.',
  },
  obsession: {
    title: 'Obsession',
    year: 2026,
    embedUrl: 'https://www.youtube.com/embed/gMC8kkwbIQQ?si=ZfT1kbeNPHH1xhXX',
    poster: 'images/Obession 2026.jpg',
    description: 'A suspenseful drama driven by obsession, secrets, and consequences.',
  },
  'mad-max-fury-road': {
    title: 'Mad Max Fury Road',
    year: 2015,
    embedUrl: 'https://www.youtube.com/embed/hEJnMQG9ev8',
    poster: 'images/Mad-Max-2014.jpg',
    description: 'A relentless post-apocalyptic chase with stunning action and style.',
  },
  'the-mask': {
    title: 'The Mask',
    year: 1994,
    embedUrl: 'https://www.youtube-nocookie.com/embed/LZl69yk5lEY?si=yTKNQ2cdV9zci9l3',
    poster: 'images/The Mask.jpg',
    description: 'A wacky, action-packed comedy with a mysterious green-faced hero.',
  },
  'the-marry-me-pact': {
    title: 'The Marry Me Pact',
    year: 2022,
    embedUrl: 'https://www.youtube-nocookie.com/embed/0N9yTStOB7E?si=-o4-fJrE1rv0KIAG',
    poster: 'images/The Marry Me Pact.jpg',
    description: 'A charming romantic comedy about love, friendship, and unexpected plans.',
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
  const separator = movie.embedUrl.includes('?') ? '&' : '?';
  playerEl.src = `${movie.embedUrl}${separator}autoplay=1&rel=0&modestbranding=1`;
  playerEl.title = `${movie.title} trailer`;
} else {
  // If the query value does not match any known movie, show a friendly error state.
  titleEl.textContent = 'Movie not found';
  metaEl.textContent = '';
  descEl.textContent =
    'We could not find the movie you selected. Please return to the library and choose another title.';
  playerEl.src = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SEARCH & FILTER LOGIC ---
  const searchInput = document.getElementById('movieSearchInput');
  const movieCards = document.querySelectorAll('#movieGrid .media-card');
  const filterButtons = document.querySelectorAll('#filterBar .filter-btn');
  const noResultsMsg = document.getElementById('noResultsMsg');
  let activeGenre = 'all';

  function filterMovies() {
    const query = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    movieCards.forEach((card) => {
      const title = card.getAttribute('data-title') || '';
      const genre = card.getAttribute('data-genre') || '';
      const matchesSearch = title.includes(query);
      const matchesGenre = activeGenre === 'all' || genre.includes(activeGenre);

      if (matchesSearch && matchesGenre) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    noResultsMsg.classList.toggle('hidden', visibleCount > 0);
  }

  if (searchInput) searchInput.addEventListener('input', filterMovies);

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeGenre = btn.getAttribute('data-genre');
      filterMovies();
    });
  });

  // --- 2. AUTH MODAL LOGIC ---
  const authModal = document.getElementById('authModal');
  const openLoginBtn = document.getElementById('openLoginBtn');
  const openSignupBtn = document.getElementById('openSignupBtn');
  const signupTriggers = document.querySelectorAll('.open-signup-trigger');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const loginView = document.getElementById('loginView');
  const signupView = document.getElementById('signupView');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');

  function showModal(view = 'login') {
    authModal.classList.remove('hidden');
    if (view === 'login') {
      loginView.classList.remove('hidden');
      signupView.classList.add('hidden');
    } else {
      signupView.classList.remove('hidden');
      loginView.classList.add('hidden');
    }
  }

  function hideModal() {
    authModal.classList.add('hidden');
  }

  if (openLoginBtn) openLoginBtn.addEventListener('click', () => showModal('login'));
  if (openSignupBtn) openSignupBtn.addEventListener('click', () => showModal('signup'));
  signupTriggers.forEach(btn => btn.addEventListener('click', () => showModal('signup')));
  if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);

  if (switchToSignup) switchToSignup.addEventListener('click', (e) => { e.preventDefault(); showModal('signup'); });
  if (switchToLogin) switchToLogin.addEventListener('click', (e) => { e.preventDefault(); showModal('login'); });

  // Close modal when clicking outside card
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal || e.target.classList.contains('screen-overlay')) {
      hideModal();
    }
  });

  // --- 3. FORM SUBMISSIONS ---
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const p1 = document.getElementById('signupPass').value;
      const p2 = document.getElementById('signupConfirmPass').value;
      if (p1 !== p2) {
        alert('Passwords do not match!');
        return;
      }
      alert('Account successfully created!');
      window.location.href = '/NEXORA.html'
      hideModal();
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Logged in successfully!');
      window.location.href = '/NEXORA.html'
      hideModal();
    });
  }
});
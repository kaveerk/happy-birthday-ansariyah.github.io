// ===== COVER SCREEN =====
const startBtn = document.getElementById('startBtn');
const cover = document.getElementById('cover');
const site = document.getElementById('site');
const bgSong = document.getElementById('bgSong');
const musicToggle = document.getElementById('musicToggle');

startBtn.addEventListener('click', () => {
  cover.classList.add('hidden');
  site.classList.remove('hidden');
  bgSong.play().catch(err => console.log('Song play blocked:', err));
});

musicToggle.addEventListener('click', () => {
  if (bgSong.paused) {
    bgSong.play();
    musicToggle.textContent = '🎵';
  } else {
    bgSong.pause();
    musicToggle.textContent = '🔇';
  }
});
// ===== COUNTDOWN =====
// Her birthday has already passed, so this will freeze at 00:00:00:00
const birthdayDate = new Date('2026-07-18T2026:07:19'); // <--

function updateCountdown() {
  const now = new Date();
  let diff = birthdayDate - now;

  if (diff < 0) diff = 0; // freeze at zero once birthday has passed

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

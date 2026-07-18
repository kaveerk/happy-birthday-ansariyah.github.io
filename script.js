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

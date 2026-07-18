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

const birthdayDate = new Date('2026-07-19T00:00:00');

function updateCountdown() {
  const now = new Date();
  let diff = birthdayDate - now;

  if (diff < 0) diff = 0;

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

const giftContents = {
  1: "Gift 1 placeholder text.",
  2: "Gift 2 placeholder text.",
  3: "Gift 3 placeholder text.",
  4: "Gift 4 placeholder text."
};

const giftEls = document.querySelectorAll('.gift');
const giftReveal = document.getElementById('giftReveal');
const giftContent = document.getElementById('giftContent');
const closeGift = document.getElementById('closeGift');

giftEls.forEach(gift => {
  gift.addEventListener('click', () => {
    const id = gift.getAttribute('data-gift');
    giftContent.textContent = giftContents[id];
    giftReveal.classList.remove('hidden');
  });
});

closeGift.addEventListener('click', () => {
  giftReveal.classList.add('hidden');
});

const loveNumberEl = document.getElementById('loveNumber');
const loveSubtext = document.getElementById('loveSubtext');
const loveSection = document.getElementById('loveCounter');

let hasAnimated = false;

function animateLoveCounter() {
  if (hasAnimated) return;
  hasAnimated = true;

  const target = 15000;
  const duration = 4000;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    loveNumberEl.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      loveNumberEl.textContent = target.toLocaleString();
      loveSubtext.textContent = "...and one more for today. I love you 💋";
    }
  }

  requestAnimationFrame(tick);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateLoveCounter();
    }
  });
}, { threshold: 0.5 });

observer.observe(loveSection);

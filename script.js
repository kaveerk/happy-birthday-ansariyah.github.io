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
  1: "Hey babyyy. Im writing this the night before! Istg it feels just like christmas eve. I never thought I could be this excited about someone else\'s birthday! I couldn\'t sleep if I tried, but obviously I\'m not gonna try. I haveee to be the first to wish your happy birthday. Well, on your birthday, cuz I can wish you it right now and be the first.. but thats cheating. Ive waited so long for this! Im equally as nervous as I am excited. Right now, the timer says theres only 2 hours and 15 minutes leftt. I cant wait baby. I hope your just as excited as I am. You cant be more excited because, well, thats not possible. I hope your not already starting to stop seeing your birthdays as specialll. As a matter of fact, I hope you never stop viewing your birthdays as 'just another day'. I will do my best to make sure that never happens. I will always celebrate the day my world opened her little teary eyes. And trust me, you won\'t be the happiest tomorrow, I will. I will always be your biggest supporter, an even bigger supporter than you are to yourself.",
  2: "I\'m still mad at you for working tomorrow! Hmph! Your wayyy too hard working baby. How can you now be coming home from work?? Im not trying to make myself sound lazy but its kinda hard when your so hardworking. Please just make sure you dont stress yourself out too much. Over the past 15 years you\'ve made the world a better place simply by just being in it. You\'ve had an impact on every single person you\'ve ever interacted with, big or small. In one way or another, some ways much more pronounced than the others, you\'ve literally influenced the actions of tens of thousands of people during the last 15 years! Even if it was just moving to the side and walking there when someone was walking straight so you two don\'t bump into eachother. By just existing and not being a bad person, you are activley making the world a better place. But you do way more than just not being a bad person, baby. Wayyyy moreee. Take a look at how much you've changed my life. I want you to actually think about it, where I\'d be rn, and in ten years if it wasn\'t for you. You might think Im overestimating all the good you\'ve done but as always I'm right and your wrong. Your underestimating it baby.",
  3: "Word search!! youhavenoideajusthowgratefuliamforyoubaby  howgratefuliamthatyouchosemetospendtherestofyourlifewithitliterallyshowsonmyfaceinthecar  
    whenallanyoneplaysislovesongsandicantstopthinkingofyouandsmilingwhilemyfathermakesjokesaboutustomakemymotherangryyouarethemost
    wonderfulthingtoeverhappentomeanditrulyhopethatwewilllast  forevernomatterwhatlifethrowsatusihopethatiwillcontinuetohavetheluxuryof  beingableto
      celebratethiswonderfulamazingdaywithyou  formanymanyyearstocomeuntilwebothdiebutdontgetmewrong  oknotevendeathwillcomebetweenusbecausemyloveforyouristoo
        strongtoletgofuck  iwassupposedtomessageyouwishingyouhaveagreatday  tomorrowatelevenelevenbutiwaswritingthisnowitseleventhirteen."
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
      loveSubtext.textContent = "I love you's 💋";
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
function spawnFloatie() {
  const symbols = ['💗', '✨', '🤍', '💫'];
  const el = document.createElement('div');
  el.className = 'floatie';
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
  el.style.setProperty('--drift', (Math.random() * 100 - 50) + 'px');
  el.style.animationDuration = (Math.random() * 4 + 6) + 's';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

setInterval(() => {
  if (!site.classList.contains('hidden')) {
    spawnFloatie();
  }
}, 800);

// Notification banner
const notify = document.getElementById('notify');
const notifyClose = document.getElementById('notifyClose');
if (notify && notifyClose) {
  notifyClose.addEventListener('click', () => notify.style.display = 'none');
}

// Theme switcher
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const apply = (dark) => document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
  // Persist theme in localStorage
  const saved = localStorage.getItem('portal-theme');
  if (saved) {
    const dark = saved === 'dark';
    themeToggle.checked = dark;
    apply(dark);
  }
  themeToggle.addEventListener('change', (e) => {
    const dark = e.target.checked;
    apply(dark);
    localStorage.setItem('portal-theme', dark ? 'dark' : 'light');
  });
}

// Modal popup
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const modalClose = document.getElementById('modalClose');

if (openModal && modal && modalClose) {
  openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

// Accordion (FAQ)
const faqRoot = document.getElementById('faq');
if (faqRoot) {
  faqRoot.querySelectorAll('.accordion__item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Collapse others (optional)
      faqRoot.querySelectorAll('.accordion__item[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded', 'false'));
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });
}

// Slider
const sliderTrack = document.getElementById('sliderTrack');
const sliderDots = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Replace these with your own image links
const sliderImages = [
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop', caption: 'Team Collaboration' },
  { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop', caption: 'Growth & Analytics' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop', caption: 'Automation & AI' }
];

let current = 0;
let timer;

function renderSlides() {
  if (!sliderTrack || !sliderDots) return;

  sliderTrack.innerHTML = '';
  sliderDots.innerHTML = '';

  sliderImages.forEach((img, idx) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
      <img src="${img.src}" alt="${img.caption}">
      <div class="slide__caption">${img.caption}</div>
    `;
    sliderTrack.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'slider__dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', idx === current ? 'true' : 'false');
    dot.addEventListener('click', () => goTo(idx));
    sliderDots.appendChild(dot);
  });

  updateSlider();
}

function updateSlider() {
  const width = sliderTrack.clientWidth / sliderImages.length; // each slide width
  sliderTrack.style.transform = `translateX(-${current * 100}%)`;
  [...sliderDots.children].forEach((d, i) => d.setAttribute('aria-selected', i === current ? 'true' : 'false'));
}

function goTo(index) {
  current = (index + sliderImages.length) % sliderImages.length;
  updateSlider();
  restartAutoPlay();
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

function startAutoPlay() {
  timer = setInterval(next, 4000);
}
function stopAutoPlay() {
  if (timer) clearInterval(timer);
}
function restartAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
}

if (sliderTrack) {
  renderSlides();
  startAutoPlay();
  // Pause on hover
  sliderTrack.addEventListener('mouseenter', stopAutoPlay);
  sliderTrack.addEventListener('mouseleave', startAutoPlay);
}
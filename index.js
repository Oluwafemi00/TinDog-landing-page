// ─── NAV TOGGLE ──────────────────────────────────────────
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// ─── CAROUSEL ────────────────────────────────────────────
const track = document.getElementById("carouselTrack");
const dots = document.getElementById("carouselDots");
const slides = track.querySelectorAll(".testimonial-slide");
let current = 0;

// Build dots
slides.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "carousel-dot" + (i === 0 ? " active" : "");
  d.addEventListener("click", () => goTo(i));
  dots.appendChild(d);
});

function goTo(idx) {
  current = (idx + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.querySelectorAll(".carousel-dot").forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });
}

// Auto-advance
setInterval(() => goTo(current + 1), 5000);

// Touch swipe
let startX = 0;
track.addEventListener(
  "touchstart",
  (e) => {
    startX = e.touches[0].clientX;
  },
  { passive: true },
);
track.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
});

// ─── SCROLL ANIMATIONS ───────────────────────────────────
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));

// ─── SMOOTH SCROLL ───────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("navLinks").classList.remove("open");
  });
});

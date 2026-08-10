document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!prefersReducedMotion && hasFinePointer) {
  const cursorDot = document.createElement("div");
  const cursorRing = document.createElement("div");

  cursorDot.className = "cursor-dot";
  cursorRing.className = "cursor-ring";
  document.body.append(cursorDot, cursorRing);
  document.body.classList.add("cursor-enhanced");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  const moveCursor = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(moveCursor);
  };

  moveCursor();

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    document.body.classList.add("cursor-ready");
  });

  window.addEventListener("mousedown", () => document.body.classList.add("cursor-down"));
  window.addEventListener("mouseup", () => document.body.classList.remove("cursor-down"));
  document.addEventListener("mouseleave", () => document.body.classList.remove("cursor-ready"));

  document.querySelectorAll("a, button, .project-card, .timeline-content, .contact-links a").forEach((element) => {
    element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--tilt-x", `${y * -5}deg`);
      card.style.setProperty("--tilt-y", `${x * 5}deg`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

const common = {
  de: {
    "nav.backProjects": "Zurück zu Arbeiten",
    "common.more": "Mehr erfahren →",
    "common.moreView": "Mehr ansehen →",
    "next.project": "Nächstes Projekt ansehen",
    "next.other": "Andere Arbeit ansehen",
    "next.continue": "Weiter",
    "next.overview": "Alle Projekte ansehen",
  },
  en: {
    "nav.backProjects": "Back to work",
    "common.more": "Learn more →",
    "common.moreView": "View more →",
    "next.project": "View next project",
    "next.other": "View another project",
    "next.continue": "Next",
    "next.overview": "View all projects",
  },
};

const translations = {
// in arbeit
};

const pageKey = document.body.dataset.page;
const toggleButton = document.querySelector("[data-language-toggle]");

function getDictionary(lang) {
  const pageTranslations = translations[pageKey];
  if (!pageTranslations || !pageTranslations[lang]) return null;
  return { ...common[lang], ...pageTranslations[lang] };
}

function applyLanguage(lang) {
  const dict = getDictionary(lang);
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict.title || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      element.setAttribute("alt", dict[key]);
    }
  });

  if (toggleButton) {
    toggleButton.textContent = lang === "de" ? "EN" : "DE";
    toggleButton.setAttribute("aria-label", lang === "de" ? "Switch to English" : "Zu Deutsch wechseln");
  }
}

if (toggleButton) {
  const savedLanguage = localStorage.getItem("portfolio-language") || "de";
  applyLanguage(savedLanguage);

  toggleButton.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "de";
    const next = current === "de" ? "en" : "de";
    localStorage.setItem("portfolio-language", next);
    applyLanguage(next);
  });
}

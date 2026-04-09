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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const translations = {
  index: {
    de: {
      title: "Portfolio | Mediamatikerin",
      "nav.home": "Start",
      "nav.work": "Arbeiten",
      "nav.about": "Über mich",
      "nav.contact": "Kontakt",
      "home.eyebrow": "Mediamatikerin in Ausbildung",
      "home.subtitle": "3. Lehrjahr",
      "home.text": "Mein Fokus liegt auf der Gestaltung und Umsetzung von digitalen Projekten mit einem klaren Erscheinungsbild. Dabei verbinde ich Design, Analyse und Technik zu durchdachten Lösungen, die sowohl visuell als auch funktional überzeugen.",
      "home.ctaWork": "Arbeiten ansehen",
      "home.ctaContact": "Kontakt",
      "projects.eyebrow": "Ausgewählte Arbeiten",
      "projects.title": "Projekte",
      "projects.text": "Hier findest du eine Auswahl an Arbeiten.",
      "cards.1.image": "Web Design",
      "cards.1.category": "Web Design",
      "cards.1.title": "Nuruslums",
      "cards.1.text": "AIP+ Projekt mit Fokus auf die Weiterentwicklung und Optimierung einer bestehenden Website unter Berücksichtigung von Struktur, Benutzerfreundlichkeit und responsivem Design.",
      "cards.2.image": "T-Shirt Design",
      "cards.2.category": "Print / Textil",
      "cards.2.title": "T-Shirt Design",
      "cards.2.text": "AIP+ Projekt für das Unternehmen TRY DRY ein T-Shirt für verschiedene Altersgruppen und unterschiedliche Geschmäcker zu Entwerfen.",
      "cards.3.image": "Illustrationen",
      "cards.3.category": "Illustrationen",
      "cards.3.title": "Kreative Arbeiten",
      "cards.3.text": "Gestaltung ist für mich mehr als nur ein Bild. Sie schafft Verbindungen und vermittelt Informationen auch ohne viele Worte.",
      "cards.4.image": "Fotografie",
      "cards.4.category": "Fotografie",
      "cards.4.title": "Selektierte Aufnahmen",
      "cards.4.text": "In jedem Foto stecken Erinnerungen, die verschiedene Emotionen auslösen und besondere Momente festhalten können.",
      "cards.5.image": "Printmedien",
      "cards.5.category": "Printmedien",
      "cards.5.title": "Open Air Kino",
      "cards.5.text": "AIP+ Projekt mit Fokus auf die Gestaltung eines Werbeplakats und die Entwicklung eines klaren visuellen Konzepts unter Berücksichtigung von Corporate Design und Kundenanforderungen.",
      "common.more": "Mehr ansehen →",
      "about.eyebrow": "Über mich",
      "about.title": "Kreativ, strukturiert und digital orientiert",
      "about.text": "Ich bin Mediamatikerin in Ausbildung und interessiere mich besonders für Webdesign, Gestaltung und digitale Kommunikation. Mir ist wichtig, dass Design nicht nur schön, sondern auch funktional, verständlich und professionell ist.",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Lass uns zusammenarbeiten",
      "contact.text": "Für Anfragen, Projekte oder Bewerbungen kannst du mich gerne kontaktieren.",
      "footer.text": "© 2026 Portfolio - Mediamatikerin in Ausbildung"
    },
    en: {
      title: "Portfolio | Media Designer",
      "nav.home": "Home",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "home.eyebrow": "Media designer in training",
      "home.subtitle": "3rd year apprenticeship",
      "home.text": "I create digital and print solutions for web design, content, and visual communication. My goal is to create a calm, modern, and convincing presence.",
      "home.ctaWork": "View work",
      "home.ctaContact": "Contact",
      "projects.eyebrow": "Selected work",
      "projects.title": "Projects",
      "projects.text": "Here you can find a selection of my work.",
      "cards.1.image": "Web Design",
      "cards.1.category": "Web Design",
      "cards.1.title": "Nuruslums",
      "cards.1.text": "Created on behalf of AIP+. A visual concept with a clear design and consistent recognition elements.",
      "cards.2.image": "T-Shirt Design",
      "cards.2.category": "Print / Textile",
      "cards.2.title": "T-Shirt Design",
      "cards.2.text": "Concept, sketches, and textile applications for a T-shirt project with clear design and multiple variations.",
      "cards.3.image": "Illustrations",
      "cards.3.category": "Illustrations",
      "cards.3.title": "Creative Work",
      "cards.3.text": "For me, design is more than just an image. It creates connections and communicates information even without many words.",
      "cards.4.image": "Photography",
      "cards.4.category": "Photography",
      "cards.4.title": "Selected Shots",
      "cards.4.text": "Every photo holds memories that can evoke emotions and capture special moments.",
      "cards.5.image": "Print Media",
      "cards.5.category": "Print Media",
      "cards.5.title": "Open Air Cinema",
      "cards.5.text": "Visual design for an event with a focus on recognition, clarity, and structure.",
      "common.more": "See more →",
      "about.eyebrow": "About me",
      "about.title": "Creative, structured, and digitally focused",
      "about.text": "I am a media designer in training and especially interested in web design, design, and digital communication. It is important to me that design is not only beautiful, but also functional, understandable, and professional.",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's work together",
      "contact.text": "Feel free to contact me for inquiries, projects, or applications.",
      "footer.text": "© 2026 Portfolio - Media designer in training"
    }
  },
  project1: {
    de: {
      title: "Projekt 1 | Portfolio Website",
      "nav.backProjects": "Zurück zu Projekten",
      "hero.category": "Webdesign & Entwicklung",
      "hero.title": "Projekt 1: Portfolio Website",
      "hero.text": "Eine moderne, ruhige und professionelle Portfolio-Seite zur Präsentation meiner Projekte und Fähigkeiten.",
      "intro.title": "Projektbeschreibung",
      "intro.text": "AIP+ Projekt mit Fokus auf die Weiterentwicklung und Optimierung einer bestehenden Website unter Berücksichtigung von Struktur, Benutzerfreundlichkeit und responsivem Design.",
      "facts.toolsLabel": "Tools",
      "facts.durationLabel": "Dauer",
      "facts.durationValue": "2 Wochen",
      "facts.roleLabel": "Rolle",
      "facts.roleValue": "Design & Entwicklung",
      "problem.title": "Problem",
      "problem.text": "Die bisherige Darstellung war unübersichtlich und wirkte nicht modern genug.",
      "solution.title": "Lösung",
      "solution.text": "Entwicklung eines klaren Layouts mit ruhiger Farbwelt, guter Lesbarkeit und einfacher Navigation.",
      "process.title": "Entwicklungsprozess",
      "process.step1": "Wireframes & Skizzen",
      "process.step2": "Design in Figma",
      "process.step3": "Coding & Umsetzung",
      "process.alt1": "Wireframes und Skizzen",
      "process.alt2": "Designprozess",
      "process.alt3": "Coding und Umsetzung",
      "result.title": "Ergebnis",
      "result.subtitle": "Das fertige Portfolio",
      "result.alt": "Finales Portfolio Mockup",
      "reflection.title": "Reflexion",
      "reflection.text": "Bei diesem Projekt habe ich gelernt, wie wichtig ein klares Layout, eine reduzierte Gestaltung und eine saubere Struktur für einen professionellen Webauftritt sind. Besonders wichtig war für mich, dass das Design ruhig wirkt und trotzdem modern und überzeugend bleibt.",
      "next.label": "Nächstes Projekt ansehen",
      "next.button": "Weiter zu Projekt 2"
    },
    en: {
      title: "Project 1 | Portfolio Website",
      "nav.backProjects": "Back to projects",
      "hero.category": "Web Design & Development",
      "hero.title": "Project 1: Portfolio Website",
      "hero.text": "A modern, calm, and professional portfolio page to present my projects and skills.",
      "intro.title": "Project Overview",
      "intro.text": "For this project, I designed and built a minimalist portfolio website. The goal was to create a modern and high-quality presence that feels professional and works well for applications.",
      "facts.toolsLabel": "Tools",
      "facts.durationLabel": "Duration",
      "facts.durationValue": "2 weeks",
      "facts.roleLabel": "Role",
      "facts.roleValue": "Design & Development",
      "problem.title": "Problem",
      "problem.text": "The previous presentation felt cluttered and not modern enough.",
      "solution.title": "Solution",
      "solution.text": "Development of a clear layout with a calm color palette, good readability, and simple navigation.",
      "process.title": "Development Process",
      "process.step1": "Wireframes & Sketches",
      "process.step2": "Design in Figma",
      "process.step3": "Coding & Implementation",
      "process.alt1": "Wireframes and sketches",
      "process.alt2": "Design process",
      "process.alt3": "Coding and implementation",
      "result.title": "Result",
      "result.subtitle": "The finished portfolio",
      "result.alt": "Final portfolio mockup",
      "reflection.title": "Reflection",
      "reflection.text": "This project taught me how important a clear layout, reduced design, and clean structure are for a professional web presence. It was especially important to me that the design feels calm while still looking modern and convincing.",
      "next.label": "View next project",
      "next.button": "Go to Project 2"
    }
  },
  project2: {
    de: {
      title: "T-Shirt Design",
      "nav.backProjects": "Zurück zu Projekten",
      "hero.eyebrow": "Print / Textil",
      "hero.title": "T-Shirt Design",
      "hero.text": "Eine moderne, minimalistische Website mit Fokus auf Lesbarkeit, Struktur und einer ruhigen, professionellen Benutzerführung auf Desktop und Mobile.",
      "tags.1": "Textildesign",
      "tags.2": "Konzept",
      "tags.3": "Printmedien",
      "focus.label": "Projektfokus",
      "focus.text": "Klare Navigation, gute Informationsstruktur und ein modernes Web-Erlebnis.",
      "facts.roleLabel": "Rolle",
      "facts.roleValue": "Konzept, Gestaltung und Ausarbeitung",
      "facts.toolsLabel": "Tools",
      "facts.resultLabel": "Ergebnis",
      "facts.resultValue": "T-Shirt-Serie mit mehreren Varianten",
      "description.title": "Projektbeschreibung",
      "description.text": "Im Zentrum standen ein übersichtlicher Seitenaufbau, eine gute visuelle Hierarchie und ein ruhiges Design, das Inhalte klar präsentiert. Die Website wurde so gestaltet, dass sie auf verschiedenen Geräten stimmig funktioniert.",
      "tools.title": "Tools",
      "tasks.title": "Meine Aufgaben",
      "tasks.text": "Strukturierung der Inhalte, Gestaltung des Layouts, Umsetzung des responsiven Designs und Einbau kleiner Interaktionen für einen lebendigen, aber klaren Auftritt.",
      "phases.1.title": "Skizzen",
      "phases.1.text": "Inhalte gliedern und Navigationslogik festlegen.",
      "phases.2.title": "Ausarbeitung",
      "phases.2.text": "Typografie, Farben und Komponenten definieren.",
      "phases.3.title": "Varianten",
      "phases.3.text": "Responsives Frontend und Interaktionen umsetzen.",
      "next.label": "Nächstes Projekt ansehen",
      "next.button": "Weiter zu Projekt 3"
    },
    en: {
      title: "T-Shirt Design",
      "nav.backProjects": "Back to projects",
      "hero.eyebrow": "Print / Textile",
      "hero.title": "T-Shirt Design",
      "hero.text": "A modern, minimalist website focused on readability, structure, and calm, professional user guidance on desktop and mobile.",
      "tags.1": "Textile Design",
      "tags.2": "Concept",
      "tags.3": "Print Media",
      "focus.label": "Project Focus",
      "focus.text": "Clear navigation, strong information structure, and a modern web experience.",
      "facts.roleLabel": "Role",
      "facts.roleValue": "Concept, design, and development",
      "facts.toolsLabel": "Tools",
      "facts.resultLabel": "Result",
      "facts.resultValue": "T-shirt series with multiple variants",
      "description.title": "Project Overview",
      "description.text": "The focus was on a clear page structure, strong visual hierarchy, and a calm design that presents content clearly. The website was designed to work consistently across different devices.",
      "tools.title": "Tools",
      "tasks.title": "My Tasks",
      "tasks.text": "Structuring content, designing the layout, implementing the responsive design, and adding small interactions for a lively but clear appearance.",
      "phases.1.title": "Sketches",
      "phases.1.text": "Structure content and define navigation logic.",
      "phases.2.title": "Refinement",
      "phases.2.text": "Define typography, colors, and components.",
      "phases.3.title": "Variants",
      "phases.3.text": "Implement responsive frontend and interactions.",
      "next.label": "View next project",
      "next.button": "Go to Project 3"
    }
  },
  project3: {
    de: {
      title: "Illustration | Portfolio",
      "nav.backProjects": "Zurück zu Projekten",
      "header.eyebrow": "Portfolio",
      "header.title": "Illustration",
      "header.text": "Eine Auswahl meiner kreativen Illustrationen und visuellen Arbeiten.",
      "gallery.1.label": "Digital Art",
      "gallery.1.alt": "Digitale Illustration",
      "gallery.2.label": "Sketch",
      "gallery.2.alt": "Skizze und Konzeptarbeit",
      "gallery.3.label": "Character",
      "gallery.3.alt": "Charakterdesign Illustration"
    },
    en: {
      title: "Illustration | Portfolio",
      "nav.backProjects": "Back to projects",
      "header.eyebrow": "Portfolio",
      "header.title": "Illustration",
      "header.text": "A selection of my creative illustrations and visual work.",
      "gallery.1.label": "Digital Art",
      "gallery.1.alt": "Digital illustration",
      "gallery.2.label": "Sketch",
      "gallery.2.alt": "Sketch and concept work",
      "gallery.3.label": "Character",
      "gallery.3.alt": "Character design illustration"
    }
  },
  project4: {
    de: {
      title: "Fotografie | Portfolio",
      "nav.backProjects": "Zurück zu Projekten",
      "header.eyebrow": "Portfolio",
      "header.title": "Fotografie",
      "header.text": "Eine Auswahl meiner fotografischen Arbeiten aus Schule und Freizeit.",
      "gallery.1.label": "Porträt",
      "gallery.1.alt": "Porträtfotografie",
      "gallery.2.label": "Landschaft",
      "gallery.2.alt": "Landschaftsfotografie",
      "gallery.3.label": "Street",
      "gallery.3.alt": "Street Photography",
      "gallery.4.label": "Porträt",
      "gallery.4.alt": "Porträtaufnahme",
      "gallery.5.label": "Natur",
      "gallery.5.alt": "Naturfotografie",
      "gallery.6.label": "Detail",
      "gallery.6.alt": "Detailaufnahme"
    },
    en: {
      title: "Photography | Portfolio",
      "nav.backProjects": "Back to projects",
      "header.eyebrow": "Portfolio",
      "header.title": "Photography",
      "header.text": "A selection of my photographic work from school and personal projects.",
      "gallery.1.label": "Portrait",
      "gallery.1.alt": "Portrait photography",
      "gallery.2.label": "Landscape",
      "gallery.2.alt": "Landscape photography",
      "gallery.3.label": "Street",
      "gallery.3.alt": "Street photography",
      "gallery.4.label": "Portrait",
      "gallery.4.alt": "Portrait shot",
      "gallery.5.label": "Nature",
      "gallery.5.alt": "Nature photography",
      "gallery.6.label": "Detail",
      "gallery.6.alt": "Detail shot"
    }
  },
  project5: {
    de: {
      title: "Open Air Kino",
      "nav.backProjects": "Zurück zu Projekten",
      "hero.eyebrow": "Print / Branding",
      "hero.title": "Open Air Kino",
      "hero.text": "AIP+ Projekt mit Fokus auf die Gestaltung eines Werbeplakats und die Entwicklung eines klaren visuellen Konzepts unter Berücksichtigung von Corporate Design und Kundenanforderungen.",
      "tags.1": "Print Layout",
      "tags.2": "Event Branding",
      "tags.3": "Informationsdesign",
      "focus.label": "Projektfokus",
      "focus.text": "Ein stimmiges Designsystem für Event-Kommunikation und Printmaterialien.",
      "facts.roleLabel": "Rolle",
      "facts.roleValue": "Gestaltung und Layoutsystem",
      "facts.toolsLabel": "Tools",
      "facts.resultLabel": "Ergebnis",
      "facts.resultValue": "Konsistentes Event-Material",
      "description.title": "Projektbeschreibung",
      "description.text": "AIP+ Projekt mit Fokus auf die Gestaltung eines Werbeplakats und die Entwicklung eines klaren visuellen Konzepts unter Berücksichtigung von Corporate Design und Kundenanforderungen.",
      "tools.title": "Tools",
      "tasks.title": "Meine Aufgaben",
      "tasks.text": "Gestaltung von Printmaterialien, Entwicklung eines konsistenten Layouts und Anpassung der visuellen Elemente an das Eventkonzept.",
      "phases.1.title": "Identität",
      "phases.1.text": "Stil, Farben und grafische Leitidee definieren.",
      "phases.2.title": "Layouts",
      "phases.2.text": "Poster, Flyer und Begleitmaterial gestalten.",
      "phases.3.title": "Anwendung",
      "phases.3.text": "Design auf verschiedene Medien übertragen.",
      "next.label": "Zurück zur Übersicht",
      "next.button": "Alle Projekte ansehen"
    },
    en: {
      title: "Open Air Cinema",
      "nav.backProjects": "Back to projects",
      "hero.eyebrow": "Print / Branding",
      "hero.title": "Open Air Cinema",
      "hero.text": "A visual concept for an event that structures information clearly while creating a strong, recognizable design for different print media.",
      "tags.1": "Print Layout",
      "tags.2": "Event Branding",
      "tags.3": "Information Design",
      "focus.label": "Project Focus",
      "focus.text": "A coherent design system for event communication and print materials.",
      "facts.roleLabel": "Role",
      "facts.roleValue": "Design and layout system",
      "facts.toolsLabel": "Tools",
      "facts.resultLabel": "Result",
      "facts.resultValue": "Consistent event material",
      "description.title": "Project Overview",
      "description.text": "For this project, a visual concept for an event was developed that combines information, brand impact, and clear design. Important content needed to be quickly understandable while leaving a professional impression.",
      "tools.title": "Tools",
      "tasks.title": "My Tasks",
      "tasks.text": "Designing print materials, developing a consistent layout, and adapting the visual elements to the event concept.",
      "phases.1.title": "Identity",
      "phases.1.text": "Define style, colors, and the visual concept.",
      "phases.2.title": "Layouts",
      "phases.2.text": "Design posters, flyers, and supporting materials.",
      "phases.3.title": "Application",
      "phases.3.text": "Transfer the design to different media.",
      "next.label": "Back to overview",
      "next.button": "View all projects"
    }
  }
};

const pageKey = document.body.dataset.page;
const toggleButton = document.querySelector("[data-language-toggle]");

function applyLanguage(lang) {
  const pageTranslations = translations[pageKey];
  if (!pageTranslations || !pageTranslations[lang]) return;

  const dict = pageTranslations[lang];
  document.documentElement.lang = lang;
  document.title = dict.title || document.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dict[key]) {
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

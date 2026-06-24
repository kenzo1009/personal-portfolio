/* ================================= */

/* منوی همبرگری موبایل */

/* ================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

/* ================================= */

/* تایپ شدن متن Hero */

/* ================================= */

const typingElement = document.getElementById("typing");

const texts = [
  "Web Developer",

  "Frontend Developer",

  "Software Student",

  "UI Designer",
];

let textIndex = 0;

let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingElement.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);
  } else {
    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }

    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (texts.length) {
    setTimeout(typeEffect, 500);
  }
});

/* ================================= */

/* شمارنده آمار */

/* ================================= */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = parseInt(counter.getAttribute("data-target"));

    const current = parseInt(counter.innerText);

    const increment = Math.ceil(target / 80);

    if (current < target) {
      counter.innerText = current + increment;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* ================================= */

/* دکمه برگشت به بالا */

/* ================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* ================================= */

/* انیمیشن ظاهر شدن سکشن ها */

/* ================================= */

const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
      section.style.opacity = "1";

      section.style.transform = "translateY(0px)";
    }
  });
};

sections.forEach((section) => {
  section.style.opacity = "0";

  section.style.transform = "translateY(50px)";

  section.style.transition = "all 0.8s ease";
});

window.addEventListener(
  "scroll",

  revealSection,
);

revealSection();

/* ================================= */

/* افکت Hover روی کارت ها */

/* ================================= */

const cards = document.querySelectorAll(".project-card, .service-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 15px 40px rgba(56,189,248,.25)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

/* ================================= */

/* نمایش سال فعلی در فوتر */

/* ================================= */

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Nova Dev`;

const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

const menuActive = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", menuActive);

// Image Fade and Change

const imageEl = document.querySelector(".services__img");
const images = [
  "./images/gym-2.jpg",
  "./images/gym-3.jpg",
  "./images/gym-4.jpg",
];

window.setInterval(changePicture, 5000);
let i = 0;
function changePicture() {
  i++;
  if (i > images.length - 1) i = 0;
  imageEl.style.backgroundImage = `url(${images[i]})`;
}

// Animations

gsap.registerPlugin(ScrollTrigger);

gsap.from(".an-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from(".an-services", {
  scrollTrigger: ".an-services",
  duration: 0.5,
  opacity: 1,
  x: -150,
  stagger: 0.12,
});

gsap.from(".an-img", {
  scrollTrigger: ".an-services",
  duration: 1.2,
  opacity: 0,
  x: -200,
});

gsap.from(".an-membership", {
  scrollTrigger: ".an-membership",
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.3,
});

gsap.from(".an-cards", {
  scrollTrigger: ".an-cards",
  duration: 1,
  opacity: 0,
  y: -80,
  stagger: 0.2,
  delay: 1,
});

gsap.from(".an-team", {
  scrollTrigger: ".an-team",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});

gsap.from(".an-team-end", {
  scrollTrigger: ".an-team-end",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});

gsap.from(".an-email", {
  scrollTrigger: ".an-email",
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.4,
});

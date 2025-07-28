"use strict";

const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const body = document.body;
const lightMode = document.querySelectorAll("#nav a, body, .contacts, .scroll-down-link, #home p:nth-child(4), #about, #projects, .project, nav, .scroll-down-link");
const projects = document.querySelector("#projects");

const menuBtn = document.querySelector("#menu");
const slideMenu = document.querySelector('#nav');


sunIcon.addEventListener("click", () => {
  moonIcon.classList.add("light-mode");
  sunIcon.classList.add("light-mode");

  lightMode.forEach(n => {
    n.classList.add("light-mode");
  });
});

moonIcon.addEventListener("click", () => {
  moonIcon.classList.remove("light-mode");
  sunIcon.classList.remove("light-mode");

  lightMode.forEach(n => {
    n.classList.remove("light-mode");
  });
});


menuBtn.addEventListener("click", () => {
  slideMenu.classList.toggle("visible");
});


nav.forEach((link) => {
  link.addEventListener("click", () => {
    slideMenu.classList.toggle("visible");
  });
});
"use strict";

const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const lightModeElements = document.querySelectorAll("#nav a, body, .contacts, .scroll-down-link, #home p:nth-child(4), #about, #projects, .project, nav, .scroll-down-link");

const menuBtn = document.querySelector("#menu");
const slideMenu = document.querySelector('#nav');

function toggleLightMode() {
  moonIcon.classList.toggle("light-mode");
  sunIcon.classList.toggle("light-mode");

  lightModeElements.forEach(n => {
    n.classList.add("light-mode");
  });
}


sunIcon.addEventListener("click", toggleLightMode);

moonIcon.addEventListener("click", toggleLightMode);


menuBtn.addEventListener("click", () => {
  slideMenu.classList.toggle("visible");
});
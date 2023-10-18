"use strict";

const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const body = document.body;
const nav = document.querySelectorAll("#nav a");
const contacts = document.querySelector(".contacts");
const scrollDownLink = document.querySelectorAll(".scroll-down-link");
const homeP = document.querySelector("#home p:nth-child(4)");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");

const menuBtn = document.querySelector("#menu");
const slideMenu = document.querySelector('#nav');


moonIcon.addEventListener("click", () => {
  moonIcon.style.opacity = 1;
  sunIcon.style.opacity = 0.2;

  body.style.backgroundColor = "rgb(1, 5, 8)";

  nav.forEach(link => {
    link.style.color = "white";
  });

  moonIcon.style.color = "white";
  sunIcon.style.color = "white";
  contacts.style.color = "white";

  scrollDownLink.forEach(scroll => {
    scroll.style.color = "white"
  });

  homeP.style.color = "rgb(157, 157, 157)";
  about.style.color = "rgb(157, 157, 157)";
  projects.style.color = "rgb(157, 157, 157)";
});


sunIcon.addEventListener("click", () => {
  moonIcon.style.opacity = 0.2;
  sunIcon.style.opacity = 1;

  body.style.backgroundColor = "white";

  nav.forEach(link => {
    link.style.color = "black"
  })

  moonIcon.style.color = "black";
  sunIcon.style.color = "black";
  contacts.style.color = "black";

  scrollDownLink.forEach(scroll => {
    scroll.style.color = "black";
    scroll.style.opacity = "0.7";

    scroll.addEventListener("mouseover", () => {
      scroll.style.opacity = "1"
    });

    scroll.addEventListener("mouseover", () => {
      scroll.style.opacity = "0.7";
    });
  });

  homeP.style.color = "black";
  about.style.color = "black";
  projects.style.color = "black";
});


menuBtn.addEventListener("click", () => {
  slideMenu.classList.toggle("visible");
});


nav.forEach((link) => {
  link.addEventListener("click", () => {
    slideMenu.classList.toggle("visible");
  });
});
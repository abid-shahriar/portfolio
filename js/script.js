(function rocketFly() {
  let container = document.querySelector(".preloader-container");
  let counter = 20;
  let i = 0;

  while (i < counter) {
    let stars = document.createElement("i");
    let positionX = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * 2;
    let height = Math.random() * 100;

    stars.style.left = `${positionX}px`;
    stars.style.width = `1px`;
    stars.style.height = `${height}px`;
    stars.style.animationDuration = `${duration}s`;

    container.appendChild(stars);

    i++;
  }
})();

window.addEventListener("load", () => {
  let preLoader = document.querySelector(".preloader-container");
  setTimeout(() => {
    preLoader.classList.add("hide");
  }, 1000);
});

window.addEventListener("DOMContentLoaded", () => {
  // selectors************************************************************
  const navToggle = document.querySelector(".nav-toggle");
  const menuItem = document.querySelector(".menu-item");
  const topBtn = document.querySelector(".top-btn a");
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const navContainer = document.querySelector(".nav-container");
  const meImg = document.querySelector(".about__grid--left figure img");

  // Toggle Function******************************************************
  navToggle.addEventListener("click", () => {
    menuItem.classList.toggle("toggle");
    navToggle.classList.toggle("active");
  });

  // Collapse Navbar When Clicked Outside The navContainer*******************
  window.addEventListener("click", (e) => {
    if (
      navToggle.classList.contains("active") &&
      e.target !== navContainer &&
      e.target !== navToggle
    ) {
      menuItem.classList.remove("toggle");
      navToggle.classList.remove("active");
    }
  });

  // top-btn appears when scrolled passed the header***********************
  window.addEventListener("scroll", (e) => {
    let headerHeight = header.getBoundingClientRect().height;
    if (window.pageYOffset > headerHeight) {
      topBtn.classList.add("show-btn");
    } else {
      topBtn.classList.remove("show-btn");
    }
  });

  // NavBar disappear and reapears on scroll down**************************

  (function navOnScroll() {
    let windowWidth = header.getBoundingClientRect().width;
    let headerHeight = header.getBoundingClientRect().height;
    let navHeight = nav.getBoundingClientRect().height;

    if (windowWidth > 900) {
      window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > headerHeight + navHeight) {
          nav.classList.add("nav-fixed");
        } else {
          nav.classList.remove("nav-fixed");
        }
      });
    } else if (windowWidth < 900) {
      window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > navHeight) {
          nav.classList.add("nav-fixed");
        } else {
          nav.classList.remove("nav-fixed");
        }
      });
    }
  })();

  // switch image on mobile view****************************************
  let currentWidth = window.innerWidth;
  if (currentWidth <= 900) {
    meImg.src = "./img/me-2.jpg";
  } else {
    meImg.src = "./img/me.jpg";
  }
});

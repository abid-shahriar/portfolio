// selectors************************************************************
const navToggle = document.querySelector(".nav-toggle");
const menuItem = document.querySelector(".menu-item");
const topBtn = document.querySelector(".top-btn a");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navContainer = document.querySelector(".nav-container");
const meImg = document.querySelector(".about__grid--left figure img");
const submitBtn = document.getElementById("submit-btn");
const messageSentBox = document.getElementById("message-received");
const messageSentBtn = document.getElementById("message-sent-btn");
const form = document.getElementById("form");

console.log(messageSentBox);
console.log(submitBtn);
console.log(form);

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

// Form Submission ********************************************
// function messageSent() {
//   // e.preventDefault();

//   messageSentBox.classList.remove("inactive");
//   messageSentBox.classList.add("active");
// }

// form.addEventListener("submit", (e) => {
//   messageSentBox.classList.remove("inactive");
//   messageSentBox.classList.add("active");
//   e.preventDefault();
// });

// messageSentBtn.addEventListener("click", (e) => {
//   messageSentBox.classList.remove("active");
//   messageSentBox.classList.add("inactive");
//   form.reset();
// });

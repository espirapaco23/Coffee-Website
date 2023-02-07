/////////////////////loader////////////////////////////////////////
onload = () => {
  let load = document.getElementById("load");
  setTimeout(() => {
    load.style.display = "none";
  }, 1000);
};
//sidebar

let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

let navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//background header

function scrollHeader() {
  let header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/////////////////////////////////////////////////////////////////////////////

let mixerProducts = mixitup(".products__content", {
  selectors: {
    target: ".products__card",
  },
  animation: {
    duration: 300,
  },
});

mixerProducts.filter(".delicaies");
let linkProducts = document.querySelectorAll(".products__item");

function activeProducts() {
  linkProducts.forEach((l) => l.classList.remove("active-product"));
  this.classList.add("active-product");
}

linkProducts.forEach((l) => l.addEventListener("click", activeProducts));

//scrollupbutton////////////////////////////////////////////////////////////////
function scrollUp() {
  let scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//scrollsectionactlink/////////////////////////////////////////////////////////
let sections = document.querySelectorAll("section[id]");
function scrollActive() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 58;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

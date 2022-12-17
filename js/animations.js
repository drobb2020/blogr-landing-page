let ul_connect = document.getElementById("sub-connect");
let nav = document.getElementById("nav");
let icon_navbar = document.getElementById("nav-icon");
let arrow = document.getElementById("connect").lastChild;
let arrows_imgs = document.querySelectorAll(".arrow");
let toggle_connect = false;
let nav_toggle = false;

document.getElementById("nav-toggle").addEventListener("click", () => {
  nav_toggle = !nav_toggle;
  if (nav_toggle) {
    nav.style.display = "flex";
    icon_navbar.src = "./assets/icons/icon-close.svg";
  } else {
    nav.style.display = "none";
    icon_navbar.src = "./assets/icons/icon-hamburger.svg";
  }
});

document.getElementById("connect").addEventListener("click", () => {
  toggle_connect = !toggle_connect;
  if (toggle_connect) {
    ul_connect.style.display = "block";
    arrow.style.transform = "rotateX(-180deg)";
  } else {
    ul_connect.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
});

window.onload = function () {
  if (screen.width < 1000) {
      console.log(arrows_imgs[0].src)
    arrows_imgs[0].src = "./assets/icons/icon-arrow-dark.svg";
    arrows_imgs[1].src = "./assets/icons/icon-arrow-dark.svg";
    arrows_imgs[2].src = "./assets/icons/icon-arrow-dark.svg";
  }
};

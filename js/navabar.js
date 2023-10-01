const bars = document.querySelector(".nav-buttons");
const menu = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-close");
const nav = document.querySelector(".nav");
const navTitle= document.querySelector(".navTitle");
var hide = true;
bars.addEventListener("click", () => {
  if (hide) {
    nav.style.left = "0px";
    close.style.display = "block";
    menu.style.display = "none";
    hide = false;
  } else {
    nav.style.left = "-800px";
    close.style.display = "none";
    menu.style.display = "block";
    hide = true;
  }
  navTitle.classList.toggle("active");
});
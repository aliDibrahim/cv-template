// Mega Menu
let otherLinks = document.getElementById("other-links");
let megaMenu = document.getElementById("mega-menu");
otherLinks.addEventListener("click", () => {
  if (megaMenu.style.opacity == 1) {
    megaMenu.style.top = "calc(100% + 60px)";
    megaMenu.style.opacity = 0;
    megaMenu.style.zIndex = -5;
  } else {
    megaMenu.style.top = "calc(100% + 1px)";
    megaMenu.style.opacity = 1;
    megaMenu.style.zIndex = 5;
  }
});
// Scroll up
let scrollUp = document.getElementById("scroll-top");
window.onscroll = function () {
  if (scrollY > 1000) {
    scrollUp.style.right = "25px";
  } else {
    scrollUp.style.right = "-70px";
  }
};
scrollUp.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};

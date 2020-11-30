// The DOM items we want to use
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

// Set Inital State of Menu
// True if Open, False if Closed
let showMenu = false; // When you land on the page

// Event listener for when we click on the button
menuBtn.addEventListener("click", toggleMenu);

// 'On and off' of the menu
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach((item) => item.classList.add("show"));

    // When the menu is shown
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

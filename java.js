// JavaScript code for the personal website

// Select the navbar and the menu
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {

  // Get the scroll position of the window
  let scrollPosition = window.scrollY;

  // If the scroll position is greater than zero, add a dark background to the navbar
  if (scrollPosition > 0) {
      navbar.classList.add("dark-bg");
      menu.classList.add("dark-bg");
  
      // Otherwise, remove the dark background from the navbar
      } else {
          navbar.classList.remove("dark-bg");
          menu.classList.remove("dark-bg");
      }
});

// When user clicks hamburger-menu the nav-links should appear.

// Select hamburger menu

const hamburgerMenu = document.querySelector('.burger');
console.log(hamburgerMenu);

// nav-links

const navLinks = document.querySelector('.nav-links');
console.log(navLinks);

// Ananymous function
hamburgerMenu.addEventListener('click',function(){

    navLinks.classList.toggle('nav-active');

    hamburgerMenu.classList.toggle('toggle');

});
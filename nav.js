// First select the elements

var hamBurgerMenu = document.getElementById('menu');
console.log(hamBurgerMenu);

var exitButton = document.getElementById('close');
console.log(exitButton);

var navLinks = document.getElementById('nav-list');
console.log(navLinks);

// When user clicks menu-icon the nav-links should appear.
// When he clicks close button, nav-links should dis-appear

// Ananymous function

hamBurgerMenu.addEventListener('click',function(e){
    navLinks.classList.toggle('hide-in-mobile');
});

// Ananymous function
exitButton.addEventListener('click',function(e){
    navLinks.classList.add('hide-in-mobile');
});
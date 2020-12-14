// Selecting the elements

const menuIcon = document.querySelector('.menu-icon');
console.log(menuIcon);

const closeBtn = document.querySelector('.exit-button');
console.log(closeBtn);

const showNav = document.getElementById('overlay');
console.log(showNav);

menuIcon.addEventListener('click',function(e){
    e.preventDefault();
    showNav.classList.add('show-overlay');
});
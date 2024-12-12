const menu = document.querySelector('#mobile-menu')
const menuLInks = document.querySelector('.navbar__menu')

menu.addEventListener ('click', function(){
    menu.classList.toggle('is.active');
    menuLInks.classList.toggle('active');
})
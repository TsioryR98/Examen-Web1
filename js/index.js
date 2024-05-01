window.addEventListener("DOMContentLoaded", function(){
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.visible-menu');
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

});
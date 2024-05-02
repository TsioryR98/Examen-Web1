window.addEventListener("DOMContentLoaded", function(){
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.visible-menu');
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

});

const menuIcon = document.querySelector('.menu-icon i');
const visibleMenu = document.querySelector('.visible-menu');
visibleMenu.classList.add('show');
menuIcon.addEventListener('click', () => {
  visibleMenu.classList.toggle('show');
});


var statisticElements = document.querySelectorAll('.statistic1 h1');

function animateStatistics() {
  statisticElements.forEach(function(element) {

    var target = parseInt(element.textContent);
    var start = 0;
    var duration = 1000; // ms
    var interval = 10;
    var step = Math.ceil(target / (duration / interval)); 

    var timer = setInterval(function() {
      start += step;
    
      if (start >= target) {
        clearInterval(timer);
        start = target;
      }
      element.textContent = start;
    }, interval);
  });
}



window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var Topdistance = aboutSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (Topdistance - windowHeight < -130 && !isAnimationStarted) {
        aboutSection.classList.add('show');

        setTimeout(function() {
          animateStatistics();
          isAnimationStarted = true;
        }, 500); //(0.5 secondes)
      } 

      else {
        aboutSection.classList.remove('show');
        isAnimationStarted = false;
      }


});


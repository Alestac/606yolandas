const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
         menuBtn.classList.remove('open');
         menuOpen = false;
    }
});



$(window).scroll(function(){
    $('html, .nav-link').toggleClass('Jscrolled', $(this).scrollTop() > 120);

});

/* $(window).scroll(function(){
document.documentElement.style.cssText = "--ligthmode: white";
} */
const container = document.querySelector('.container');
const header = document.querySelector('.header');

const tl = new TimelineMax();

tl.fromTo(container, 1, {opacity: '0',}, {opacity: '1', ease: Power2.easeInOut}, '0.2');

$(document).ready( () => {

    $(window).scroll( () => {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > 550){
            $('header').css('height', '0');
        } else {
            $('header').css('height', '14vh');
        }
    })
})

// toggle menu in mobile devices

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const openMenu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    openMenu.classList.toggle('toggle');
});
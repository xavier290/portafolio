const container = document.querySelector('.container');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const openMenu = document.querySelector('.menu');

let menuOpen = false;

const tl = new TimelineMax();

tl.fromTo(container, 1, {opacity: '0',}, {opacity: '1', ease: Power2.easeInOut}, '0.1');

$(document).ready( () => {

    $(window).scroll( () => {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > 500){
            $('header').css('height', '0');
        } 
        else {
            $('header').css('height', '14vh');
        }

        if (scrollPosition > 600) {
            $('.go-up').css('display', 'block');
        }
        else {
            $('.go-up').css('display', 'none');
        }

        if(screen.width < 1000) {
            if(scrollPosition > 400) {
                $('.menu').css('display', 'none');
            } 
            else {
                $('.menu').css('display', '')
            }
        }
    })
})

// toggle menu in mobile devices

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } 
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    openMenu.classList.toggle('toggle');
});
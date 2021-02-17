const container = document.querySelector('.container');
const header = document.querySelector('.header');

const mainText = document.querySelector('.main-text');
const talk = document.querySelector('.lets-talk');

const tl = new TimelineMax();

tl.fromTo (container, 1.2, {height: '0vh'}, {height: '100vh', ease: Power2.easeInOut})
    .fromTo (
        header, 1.2, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, '-0.1'
    )
    .fromTo (
        mainText, 1.6, {width: '0'}, {width: '100%'}
    )
    .fromTo (
        talk, 1, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, '1.8'
    )

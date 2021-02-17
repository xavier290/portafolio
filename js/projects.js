const projects = document.querySelector('.projects');
const header = document.querySelector('.header');

const tl = new TimelineMax();

tl.fromTo(header, 1.2, {opacity: '0'}, {opacity: '1', ease: Power2.easeInOut}, '-0.1')
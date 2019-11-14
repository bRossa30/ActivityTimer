import SimpleBar from 'simplebar';

document.querySelector('.activities').classList.add('scroll');
document.querySelector('.history__wrapper').classList.add('scroll');

const scrolls = [...document.querySelectorAll('.scroll')];
scrolls.forEach(el => new SimpleBar(el));

document.querySelector('.simplebar-offset').style.right = '0px !important';

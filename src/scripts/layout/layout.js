import variables from '../../styles/abstracts/_variables.scss';

const title = document.querySelector('.aside__title');
const aside = document.querySelector('.aside');
const hamburger = document.querySelector('.menu-mobile');

const changeAsideMargin = () => {
    const margin = title.clientWidth;
    title.style.marginRight = - margin + 'px';
}

const asideCollapse = () => {
    title.classList.toggle('aside__title--collapse');
    aside.classList.toggle('aside--collapse');
}

const setDisplayHamburger = () => {
    const xsBeakpoint = variables.xsBreakpoint;
    if (window.innerWidth <= parseInt(xsBeakpoint)) {
        hamburger.classList.remove('hidden');
    } else {
        hamburger.classList.add('hidden');
    }
}

window.addEventListener('load', () => {
    const xsBeakpoint = variables.xsBreakpoint;
    changeAsideMargin();
    setDisplayHamburger();
    if (window.innerWidth <= parseInt(xsBeakpoint)) {
        asideCollapse();
    }
});
window.addEventListener('resize', () => {
    changeAsideMargin();
    setDisplayHamburger();
});

title.addEventListener('click', asideCollapse);
hamburger.addEventListener('click', () => {
    setDisplayHamburger();
    asideCollapse();
})


document.querySelector('.history__title-box').addEventListener('click', () => {
    document.querySelector('.section-history').classList.toggle('section-history--collapse');
    document.querySelector('.section-clock').classList.toggle('section-history--collapse');
    document.querySelector('.history').classList.toggle('hidden');
    document.querySelector('.angle-down').style.transform = 'rotateX(180deg)';
})

export { asideCollapse }
const title = document.querySelector('.aside__title');
window.addEventListener('load', () => {
    const margin = title.clientWidth;

    title.style.marginRight = - margin + 'px';


})

title.addEventListener('click', () => {
    title.classList.toggle('aside__title--collapse');
    document.querySelector('.aside').classList.toggle('aside--collapse');

})

document.querySelector('.history__title-box').addEventListener('click', () => {
    document.querySelector('.section-history').classList.toggle('section-history--collapse');
    document.querySelector('.section-clock').classList.toggle('section-history--collapse');
    document.querySelector('.history').classList.toggle('hidden');
    document.querySelector('.angle-down').style.transform = 'rotateX(180deg)';
})



// document.querySelector('.clock__resize').addEventListener('mousedown', () => {

//     window.addEventListener('mousemove', historyBoxResize)
// })

// window.addEventListener('mouseup', () => {
//     document.querySelector('.section-clock').classList.remove('section-clock--grow');
//     document.querySelector('.section-history').classList.remove('section-history--grow');
//     window.removeEventListener('mousemove', historyBoxResize)
// });

// const historyBoxResize = (e) => {
//     document.querySelector('.section-clock').classList.add('section-clock--grow');
//     document.querySelector('.section-history').classList.add('section-history--grow');
//     document.querySelector('.section-history').style.height = window.innerHeight - e.clientY + 'px';

// }

document.querySelector('.history-title__box').addEventListener('click', () => {
    document.querySelector('.history__wrapper').classList.toggle('history__wrapper--collapse');
    document.querySelector('.clock__wrapper').classList.toggle('history__wrapper--collapse');
    document.querySelector('.history__box').classList.toggle('hidden');
    document.querySelector('.fa-angle-down').style.transform = 'rotateX(180deg)';
})

document.querySelector('.clock__resize').addEventListener('mousedown', (e) => {
    window.addEventListener('mousemove', historyBoxResize)
})

window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', historyBoxResize)
});



const historyBoxResize = (e) => {
    document.querySelector('.history__wrapper').style.height = window.innerHeight - e.clientY + 'px';
}


document.querySelector('.aside__title').addEventListener('click', () => {
    document.querySelector('.aside__title').classList.toggle('aside__title--collapse');
    document.querySelector('.activities').classList.toggle('activities--collapse');
})
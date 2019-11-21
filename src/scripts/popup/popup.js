const showPopup = (msg, btn) => {
    const popup = document.querySelector('.section-popup');
    const popupTitle = document.querySelector('.popup__title');
    const btnSubmit = document.querySelector('.popup>.btn--submit');

    popup.classList.toggle('invisible');

    popupTitle.textContent = msg;
    if (btn) {
        btnSubmit.textContent = btn;
        btnSubmit.addEventListener('click', () => {
            closePopup()
        })
    }
}

const closePopup = () => {
    const popup = document.querySelector('.section-popup');

    popup.classList.add('invisible');
}

export { showPopup }
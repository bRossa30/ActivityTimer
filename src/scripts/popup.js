const showPopup = (msg, btn) => {
    const popup = document.querySelector('.popup__wrapper');
    const popupTitle = document.querySelector('.popup__title');
    const btnSubmit = document.querySelector('.popup>.btn--submit');

    popup.classList.toggle('hidden');
    popup.classList.toggle('popup__wrapper--flex');

    popupTitle.textContent = msg;
    if (btn) {
        btnSubmit.textContent = btn;
        btnSubmit.classList.remove('hidden');
        btnSubmit.addEventListener('click', () => {
        closePopup()
        })
    }
}

const closePopup = () => {
    const popup = document.querySelector('.popup__wrapper');
    const btnSubmit = document.querySelector('.popup>.btn--submit');
   
    !btnSubmit.classList.contains('hidden') && btnSubmit.classList.add('hidden');
    popup.classList.add('hidden');
    popup.classList.remove('popup__wrapper--flex');
}

export { showPopup }
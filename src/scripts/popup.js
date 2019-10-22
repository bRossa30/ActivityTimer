const showPopup = (msg, btn1 = {}, btn2 = {}) => {
    const popup = document.querySelector('.popup__wrapper');
    const popupTitle = document.querySelector('.popup__title');
    const btnSubmit = document.querySelector('.btn--submit');

    popup.classList.toggle('hidden');
    popup.classList.toggle('wrapper--flex');

    popupTitle.textContent = msg;
    if (btn1) {
        btnSubmit.textContent = btn1.text;
        btnSubmit.classList.remove('hidden');
        btnSubmit.addEventListener('click', () => {
        closePopup()
        })
    }
}

const closePopup = () => {
    const popup = document.querySelector('.popup__wrapper');
    const btnSubmit = document.querySelector('.btn--submit');
   
    !btnSubmit.classList.contains('hidden') && btnSubmit.classList.add('hidden');
    popup.classList.add('hidden');
    popup.classList.remove('wrapper--flex');
}

export { showPopup }
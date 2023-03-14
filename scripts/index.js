let editBtn = document.querySelector('.profile__edit-btn'), popup = document.querySelector('.popup'), close =document.querySelector ('.edit-form__close')
let formElement =  popup.querySelector(".edit-form");
let nameInput = popup.querySelector('.edit-form__input_name');
let jobInput = popup.querySelector('.edit-form__input_job');
let inputName = document.querySelector('.profile__name'), inputJob = document.querySelector('.profile__job');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = inputName.textContent;
    jobInput.value = inputJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 

    inputName.textContent = nameInput.value;
    inputJob.textContent = jobInput.value;

    closePopup();
}

editBtn.addEventListener('click', openPopup);

close.addEventListener('click', closePopup);

formElement.addEventListener('submit', handleFormSubmit); 



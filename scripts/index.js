const button = document.querySelector(".profile__add");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const profileButton = document.querySelector(".profile__button");
let formElement = document.querySelector(".popup__container");
let title = document.querySelector(".profile__title");
let inputName = document.querySelector(".popup__input_type_name");
let pharagraph = document.querySelector(".profile__pharagraph");
let inputJob = document.querySelector(".popup__input_type_job")

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = inputName.value;
    pharagraph.textContent = inputJob.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

function closePopup() {
    popup.classList.remove("popup_opened");
}

function openPopup() {
    inputName.value = title.textContent;
    inputJob.value = pharagraph.textContent;
    popup.classList.add("popup_opened");
};

profileButton.addEventListener("click", function () {
    openPopup();
});

popupCloseButton.addEventListener("click", function () {
    closePopup();
});
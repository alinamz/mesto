import formValidSetting from "./formValidSetting.js";
import FormValidator from "./FormValid.js";
import { Card, InitalizeCard } from "./card.js";

const profileOpenBtn = document.querySelector(".profile__add");
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileCloseBtn = document.querySelector(".popup__close_type_edit-profile");
const profileButton = document.querySelector(".profile__button");
const profileForm = document.querySelector(".popup__container_type_edit-profile");
const title = document.querySelector(".profile__title");
const inputName = document.querySelector(".popup__input_type_name");
const pharagraph = document.querySelector(".profile__pharagraph");
const inputJob = document.querySelector(".popup__input_type_job");
const popupPicture = document.querySelector(".popup_type_add-place");
const popupPictureCloseBtn = document.querySelector(".popup__close_type_add-place");
const namePicture = document.querySelector(".popup__input_type_name-image");
const picture = document.querySelector(".popup__input_type_link-image");
const fullImage = document.querySelector(".popup__full-image");
const fullImageName = document.querySelector(".popup__title_type_full-image");
const popupCloseImageBtn = document.querySelector(".popup__close_type_full-image");
const popupOpenImageBtn = document.querySelector(".popup_type_full-image");


const formImage = document.querySelector('form[name=formImage]');
const formProfile = document.querySelector("form[name=formProfile]");

const formValidDataProfile = new FormValidator(formValidSetting, formProfile);
const formValidAddImage = new FormValidator(formValidSetting, formImage);

formValidDataProfile.enableValidation();
formValidAddImage.enableValidation();


function openPopup(popupElement) {
  document.addEventListener("keydown", closePopopByKey);
  popupElement.addEventListener("mousedown", closePopupOverlay);
  popupElement.classList.add("popup_opened");
}

const closePopupOverlay = (evt) => {
  if (!evt.target.classList.contains("popup_opened")) {
    return
  }
  else if (evt.target.classList.contains("popup__container")) {
    evt.stopPropagation();
  }
  const popupOpen = document.querySelector(".popup_opened");
  closePopup(popupOpen);
}

const closePopopByKey = (evt) => {
  if (evt.code === "Escape") {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  }
};

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopopByKey);
  popupElement.removeEventListener("click", closePopupOverlay)
}

function handleEditProfileForm(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  pharagraph.textContent = inputJob.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleEditProfileForm);

profileButton.addEventListener("click", function () {
  inputName.value = title.textContent;
  inputJob.value = pharagraph.textContent;
  openPopup(profilePopup);
});

profileCloseBtn.addEventListener("click", function () {
  closePopup(profilePopup);
});

profileOpenBtn.addEventListener("click", function () {
  inputName.value = title.textContent;
  inputJob.value = pharagraph.textContent;
  openPopup(popupPicture);
});

popupPictureCloseBtn.addEventListener("click", function () {
  closePopup(popupPicture);
});

popupCloseImageBtn.addEventListener("click", function () {
  closePopup(popupOpenImageBtn);
});

const handleAddImg = (name, link) => {
  fullImage.src = link;
  fullImage.alt = name;
  fullImageName.textContent = name;
  openPopup(popupOpenImageBtn);
};

const createCard = (item) => {
  const card = new Card(item.name, item.link, "#card", handleAddImg)
  return card.generateCard();
}

const handleAddCardForm = (evt) => {
  evt.preventDefault();
  const element = {
    name: namePicture.value,
    link: picture.value
  }
  document.querySelector('.elements__images').prepend(createCard(element));
  closePopup(popupPicture);
  evt.target.reset();
}

formImage.addEventListener("submit", handleAddCardForm);

InitalizeCard([
  new Card('Архыз', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', handleAddImg),
  new Card('Челябинская область', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', handleAddImg),
  new Card('Иваново', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', handleAddImg),
  new Card('Камчатка', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', handleAddImg),
  new Card('Холмогорский район', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', handleAddImg),
  new Card('Байкал', 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', handleAddImg),
]);
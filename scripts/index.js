const profileOpenBtn = document.querySelector(".profile__add");
const profilePopup = document.querySelector('.popup_type_edit-profile');
const profileCloseBtn = document.querySelector(".popup__close_type_edit-profile");
const profileButton = document.querySelector(".profile__button");
const profileForm = document.querySelector(".popup__container_type_edit-profile");
const formElementPicture = document.querySelector(".popup__container_type_add-place");
const title = document.querySelector(".profile__title");
const inputName = document.querySelector(".popup__input_type_name");
const pharagraph = document.querySelector(".profile__pharagraph");
const inputJob = document.querySelector(".popup__input_type_job");
const elementImages = document.querySelector(".elements__images");
const popupPicture = document.querySelector(".popup_type_add-place");
const popupPictureCloseBtn = document.querySelector(".popup__close_type_add-place");
const namePicture = document.querySelector(".popup__input_type_name-image");
const picture = document.querySelector(".popup__input_type_link-image");
const fullImage = document.querySelector(".popup__full-image");
const fullImageName = document.querySelector(".popup__title_type_full-image");
const popupCloseImageBtn = document.querySelector(".popup__close_type_full-image");
const popupOpenImageBtn = document.querySelector(".popup_type_full-image");
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

function handleAddCardForm(evt) {
  evt.preventDefault();
  const element = {
    name: namePicture.value,
    link: picture.value
  };
  renderCard(createCard(element));
  closePopup(popupPicture);
  evt.target.reset();
}

formElementPicture.addEventListener('submit', handleAddCardForm);

function handleEditProfileForm(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  pharagraph.textContent = inputJob.value;
  closePopup(profilePopup);
}

profileForm.addEventListener('submit', handleEditProfileForm);

profileButton.addEventListener("click", function () {
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

function createCard(element) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const pictureImage = cardElement.querySelector('.element__image');
  pictureImage.src = element.link;
  pictureImage.alt = element.name;
  cardElement.querySelector('.element__text').textContent = element.name;

  cardElement.querySelector(".element__button").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__button_active")
  });

  cardElement.querySelector(".element__delete").addEventListener("click", () => {
    cardElement.remove();
  });

  pictureImage.addEventListener("click", () => {
    fullImage.src = element.link;
    fullImage.alt = element.name;
    fullImageName.textContent = element.name;
    openPopup(popupOpenImageBtn);
  });

  return cardElement;
}

function renderCard(card) {
  elementImages.insertAdjacentElement("afterbegin", card);
}

initialCards.map(createCard).forEach(renderCard);

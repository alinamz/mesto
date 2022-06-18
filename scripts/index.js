const button = document.querySelector(".profile__add");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close_type_edit-profile");
const profileButton = document.querySelector(".profile__button");
const formElement = document.querySelector(".popup__container_type_edit-profile");
const formElementPicture = document.querySelector(".popup__container_type_add-place");
const title = document.querySelector(".profile__title");
const inputName = document.querySelector(".popup__input_type_name");
const pharagraph = document.querySelector(".profile__pharagraph");
const inputJob = document.querySelector(".popup__input_type_job");
const elementImages = document.querySelector(".elements__images");
const popupPicture = document.querySelector(".popup_type_add-place");
const popupPictureClose = document.querySelector(".popup__close_type_add-place");
const namePicture = document.querySelector(".popup__input_type_name-image");
const picture = document.querySelector(".popup__input_type_link-image");
const fullImage = document.querySelector(".popup__full-image");
const fullImageName = document.querySelector(".popup__title_type_full-image");
const popupCloseImage = document.querySelector(".popup__close_type_full-image");
const popupOpenImage = document.querySelector(".popup_type_full-image");
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

function formSubmitHandlerPicture(evt) {
  evt.preventDefault();
  const element = {
    name: namePicture.value,
    link: picture.value
  };
  renderItem(element);
  closePopup(popupPicture);
}

formElementPicture.addEventListener('submit', formSubmitHandlerPicture);

function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = inputName.value;
  pharagraph.textContent = inputJob.value;
  closePopup(popup);
}

formElement.addEventListener('submit', formSubmitHandler);

profileButton.addEventListener("click", function () {
  openPopup(popup);
});

popupCloseButton.addEventListener("click", function () {
  closePopup(popup);
});

button.addEventListener("click", function () {
  inputName.value = title.textContent;
  inputJob.value = pharagraph.textContent;
  openPopup(popupPicture);
});

popupPictureClose.addEventListener("click", function () {
  closePopup(popupPicture);
});

function renderItem(element) {
  const imageTemplate = document.querySelector('#image').content;
  const imageElement = imageTemplate.querySelector('.element').cloneNode(true);
  imageElement.querySelector('.element__image').src = element.link;
  imageElement.querySelector('.element__text').textContent = element.name;
  elementImages.insertAdjacentElement("afterbegin", imageElement);

  imageElement.querySelector(".element__button").addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__button_active")
  });

  imageElement.querySelector(".element__delete").addEventListener("click", () => {
    imageElement.remove();
  });

  imageElement.querySelector('.element__image').addEventListener("click", function () {
    fullImage.src = element.link;
    fullImageName.textContent = element.name;
    openPopup(popupOpenImage);
  });
}

initialCards.forEach(renderItem);

popupCloseImage.addEventListener("click", function () {
  closePopup(popupOpenImage);
});

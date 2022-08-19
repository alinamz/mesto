import "./index.css";
import formValidSetting from "../utils/formValidSetting.js";
import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initalizeCard } from "../utils/initialCards.js";
import { profileOpenBtn, profileButton, title, pharagraph, formImage, formProfile, formAvatar, inputName, inputJob, profileAvatarBtn, avatar} from "../utils/constans.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
  headers: {
    authorization: "7d67df57-04a3-4c0e-b94c-731b56c35104",
    'Content-Type': 'application/json',
  },
});

//функция удаления карточки
const deleteCard = (cardID, cardElement) => {
  api.deleteCard(cardID)
  .then(cardElement.remove())
  .catch(err => console.log(err))
}

//установка попапа подтверждения удаления карточки
const popupWithConfirm = new PopupWithConfirm(".popup_type_confirmation_delete", { submitHandler: deleteCard } );
popupWithConfirm.setEventListeners();

function handleDeleteBtn(cardID, cardElement) {
    popupWithConfirm.open(cardID, cardElement)
}

// валидация
const formValidDataProfile = new FormValidator(formValidSetting, formProfile);
const formValidAddImage = new FormValidator(formValidSetting, formImage);
const formValidAvatar = new FormValidator(formValidSetting, formAvatar)
formValidDataProfile.enableValidation();
formValidAddImage.enableValidation();
formValidAvatar.enableValidation();

// установка попапа с картинкой в увеличенном размере 
const popupWithImg = new PopupWithImage(".popup_type_full-image");
popupWithImg.setEventListeners();

// создание карточки
const createCard = (item) => {
  const card = new Card(item, "#card", popupWithImg.open.bind(popupWithImg), handleDeleteBtn, likeCard);
  return card.generateCard();
}

// внедрение карточки в разметку 
const section = new Section(
  {
    renderer: (item) => {
      section.addItem(createCard(item));
    },
    containerSelector: ".elements__images"
  }
);

// функция передачи данных пользователя
const addInfoProfile = (profileValues) => {
  popupWithFormProfile.loading("Сохранение...");
  api.changeUserData(profileValues.name, profileValues.job)
    .then(data => {
      userInfo.setUserInfo(data.name, data.about);
      popupWithFormProfile.close()
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormProfile.returnInitialValue();
    })
}

//функция установки аватара
const setAvatar = (infoValues) => {
  popupAddAvatar.loading("Сохранение...");
  api.setProfileAvatar(infoValues)
  .then((res) => { userInfo.setUserAvatar(res);
    popupAddAvatar.close()
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    popupAddAvatar.returnInitialValue();
  })
}

// создание попапа добавления аватара
const popupAddAvatar = new PopupWithForm(".popup_type_update_profile", setAvatar);
popupAddAvatar.setEventListeners();

// слушатель открытия попапа редактирования профиля
profileAvatarBtn.addEventListener("click", function () {
  popupAddAvatar.open()
})

// инициализируем попап редактирования данных профиля
const popupWithFormProfile = new PopupWithForm(".popup_type_edit-profile", addInfoProfile);
popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo(title, pharagraph, avatar);

// установка прослушивателя на попап редактирования данных профиля
profileButton.addEventListener("click", function () {
  popupWithFormProfile.open();
  const dataProfile = userInfo.getUserInfo();
  inputName.setAttribute("value", dataProfile.name);
  inputJob.setAttribute("value", dataProfile.job)
});

// функция вставка новой картинки
const addImg = (imgValues) => {
  popupImgInfo.loading("Создание...");
  api.addNewCard(imgValues.name, imgValues.link)
  .then(card => {
    card.canDelete = true;
    section.addItem(createCard(card));
    popupImgInfo.close();
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    popupImgInfo.returnInitialValue();
  })
}

// инициализируем попап создания нового места
const popupImgInfo = new PopupWithForm(".popup_type_add-place", addImg);
popupImgInfo.setEventListeners();

// установка прослушивателя на попап создания нового места
profileOpenBtn.addEventListener("click", function () {
  formValidAddImage.disableButton();
  popupImgInfo.open();
});

// функция установки лайка
const likeCard = (card) => {
  if (!card.canLike) {
    api.addLike(card)
    .then((data)=> {
      card.addLike();
      card.setLike(data.likes);
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    api.removeLike(card)
    .then((data)=> {
      card.removeLike();
      card.setLike(data.likes);
    })
    .catch(err => {
      console.log(err);
    });
  }
}


api.getInitalCards()
  .then(data => {
    section.setItems(data);
    section.renderItems();
  })
  .catch(err => {
    console.log(err)
  })

api.getUserData()
  .then(data => userInfo.setUserInfo(data.name, data.about))
  .catch(err => console.log(err))


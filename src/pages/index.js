import formValidSetting from "../utils/formValidSetting.js";
import FormValidator from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initalizeCard } from "../utils/initialCards.js";
import { profileOpenBtn, profileButton, title, pharagraph, formImage, formProfile } from "../utils/constans.js"



//форма с валидацией
const formValidDataProfile = new FormValidator(formValidSetting, formProfile);
const formValidAddImage = new FormValidator(formValidSetting, formImage);



//установка валидации
formValidDataProfile.enableValidation();
formValidAddImage.enableValidation();


const popupWithImg = new PopupWithImage(".popup_type_full-image");
popupWithImg.setEventListeners();


//создание карточки
const createCard = (item) => {
  const card = new Card(item.name, item.link, "#card", popupWithImg.open.bind(popupWithImg));
  return card.generateCard();
}

//внедрение карточки в разметку 
const section = new Section(
  {
    items: initalizeCard,
    renderer: (item) => {
      section.addItem(createCard(item));
    },
    containerSelector: ".elements__images"
  }
);

section.renderItems();

//передаем данные пользователя
const addInfoProfile = (profileValues) => {
  userInfo.setUserInfo(profileValues.name, profileValues.job)
  popupWithFormProfile.close();
}

//инициализируем попап изображнния
const popupWithFormProfile = new PopupWithForm(".popup_type_edit-profile", addInfoProfile);

//открытие попапа редактированиЯ профиля и вставка данных
const userInfo = new UserInfo(title, pharagraph);

//установка прослушивателя на попап формы
profileButton.addEventListener("click", function () {
  popupWithFormProfile.open();
  popupWithFormProfile.setEventListeners();
});

//вставка новой картинки
const addImg = (imgValues) => {
  section.addItem(createCard(imgValues));
  popupImgInfo.close(); 
}

//инициализируем попап создания нового места
const popupImgInfo = new PopupWithForm(".popup_type_add-place", addImg);

//установка прослушивателя на попап создания нового места
profileOpenBtn.addEventListener("click", function() {
  popupImgInfo.open();
  popupImgInfo.setEventListeners();
})


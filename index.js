var like = document.querySelectorAll(".element__button");
const button = document.querySelector(".profile__add");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const profileButton = document.querySelector(".profile__button");
const save = document.querySelector(".popup__button");
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector(".popup__input-job");
let formElement = document.querySelector(".popup__container");
const logoActiv = document.querySelector(".header__logo");

logoActiv.addEventListener('mouseover', function() {
    logoActiv.classList.add("hover")
})

logoActiv.addEventListener('mouseout', function() {
    logoActiv.classList.remove("hover")
})

function formSubmitHandler (evt) {
    console.log(evt);
    evt.preventDefault();
    document.getElementsByClassName("profile__title")[0].textContent = document.getElementById("name").value;
    document.getElementsByClassName("profile__pharagraph")[0].textContent = document.getElementById("job").value;
}
formElement.addEventListener('submit', formSubmitHandler);

save.addEventListener('click', function() {
    popup.classList.add("popup__opened")
})

function Openpopup() {
    popup.classList.remove("popup__opened");
}

function Closepopup() {
        popup.classList.add("popup__opened");
};

profileButton.addEventListener("click", function() {
    Closepopup();
});

popupCloseButton.addEventListener("click", function() {
    Openpopup();
});

profileButton.addEventListener('mouseover', function() {
    profileButton.classList.add("hover")
})

profileButton.addEventListener('mouseout', function() {
    profileButton.classList.remove("hover")
})

button.addEventListener('mouseover', function() {
    button.classList.add("hover")
})

button.addEventListener('mouseout', function() {
    button.classList.remove("hover")
})

popupCloseButton.addEventListener('mouseover', function() {
    popupCloseButton.classList.add("hover")
})

popupCloseButton.addEventListener('mouseout', function() {
    popupCloseButton.classList.remove("hover")
})

save.addEventListener('mouseover', function() {
    save.classList.add("hover")
})

save.addEventListener('mouseout', function() {
    save.classList.remove("hover")
})

for (let i=0; i < like.length; i++) {
   like[i].addEventListener('mouseover', function() {
    like[i].classList.add("hover")
})
}
  
for (let i=0; i < like.length; i++) {
    like[i].addEventListener('mouseout', function() {
     like[i].classList.remove("hover")
 })
}

for (let i=0; i < like.length; i++) {
    like[i].addEventListener('click', function() {
     like[i].classList.add("element__button_active")
 })
 }
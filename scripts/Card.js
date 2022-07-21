class Card {
    constructor(name, link, handleAddImg, selectorTemplate) {
        this._link = link;
        this._name = name;
        this._handleAddImg = handleAddImg;
        this._selectorTemplate = selectorTemplate;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._selectorTemplate)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    //создание карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__image').src = `${this._link}`;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;

        return this._element;
    }

    //установка слушателя
    _setEventListeners() {
        this._element.querySelector(".element__button").addEventListener("click", (evt) => {
            this._likeCard(evt)
        });
        this._element.querySelector(".element__delete").addEventListener("click", this._deleteCard);
        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleAddImg(this._name, this._link)
        });
    }

    _deleteCard(evt) {
        evt.target.closest(".element").remove();
    }

    _likeCard(evt) {
        evt.target.classList.toggle("element__button_active");
    }
}



export { Card}
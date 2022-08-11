class Card {
    constructor(cardInfo, selectorTemplate, handleCardClick) {
        this._link = cardInfo.link;
        this._name = cardInfo.name;
        this._selectorTemplate = selectorTemplate;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._selectorTemplate)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    // создание карточки
    generateCard() {
        this._element = this._getTemplate();
        
        this._elementImg = this._element.querySelector(".element__image");
        this._elementName = this._element.querySelector(".element__text")

        this._elementImg.src = `${this._link}`;
        this._elementName.alt = this._name;
        this._elementName.textContent = this._name;
        
        this._likeElement = this._element.querySelector(".element__button");
        this._deleteElement = this._element.querySelector(".element__delete");
        
        this._setEventListeners();
        
        return this._element;
    }

    // установка слушателя
    _setEventListeners() {
        this._likeElement.addEventListener("click", this._likeCard.bind(this));
        this._deleteElement.addEventListener("click", this._deleteCard.bind(this));

        this._elementImg.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link)
        });
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _likeCard() {
        this._likeElement.classList.toggle("element__button_active");
    }
}

export { Card }
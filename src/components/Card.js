class Card {
    constructor(cardInfo, selectorTemplate, handleCardClick, handleDeleteBtn, handleLikeCard) {
        this._link = cardInfo.link;
        this._name = cardInfo.name;
        this._cardID = cardInfo._id;
        this._canDelete = cardInfo.canDelete == null ? false : cardInfo.canDelete;
        this._selectorTemplate = selectorTemplate;
        this._handleCardClick = handleCardClick;
        this._handleDeleteBtn = handleDeleteBtn;
        this._likes = cardInfo.likes;
        this._handleLikeCard = handleLikeCard;
        this.canLike = cardInfo.canLike == null ? false : cardInfo.canLike;
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
        this._elementName = this._element.querySelector(".element__text");
        this._elementLikesCount = this._element.querySelector(".element__like-sum");

        this._elementImg.src = `${this._link}`;
        this._elementName.alt = this._name;
        this._elementName.textContent = this._name;
        this._elementLikesCount.textContent = this._likes.length;
        
        this._likeElement = this._element.querySelector(".element__button");
            if (this.canLike) {
                this.addLike();
            }
        this._deleteElement = this._element.querySelector(".element__delete");
         if (!this._canDelete) {
            this._deleteElement.remove()
         }
        
        this._setEventListeners();
        
        return this._element;
    }

    // установка слушателя
    _setEventListeners() {
        if (this._canDelete) {
            this._deleteElement.addEventListener("click", (evt) => {
            this._handleDeleteBtn(this._cardID, this._element)
            });
            
        }
        this._elementImg.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link)
        });

        this._likeElement.addEventListener("click", (evt) => {
            this._handleLikeCard(this);
        })       
    }

    addLike() {
        this._likeElement.classList.add("element__button_active");
        this.canLike = true
    }

    removeLike() {
        this._likeElement.classList.remove("element__button_active");
        this.canLike = false
    }

    setLike(likes) {
        this._likes = likes;
        this._elementLikesCount.textContent = this._likes.length;
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    };

    
}

export { Card }
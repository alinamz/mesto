class Card {
    constructor(cardInfo, selectorTemplate, handleCardClick, handleDeleteBtn, handleLikeCard, userId) {
        this._link = cardInfo.link;
        this._name = cardInfo.name;
        this._cardID = cardInfo._id;
        this._selectorTemplate = selectorTemplate;
        this._handleCardClick = handleCardClick;
        this._handleDeleteBtn = handleDeleteBtn;
        this._likes = cardInfo.likes;
        this._handleLikeCard = handleLikeCard;
        this._isLiked = this._likes.filter(u => u._id === userId).length === 1;
        this._ownerId = cardInfo.owner._id;
        this._userId = userId;
        this._canDelete = this._ownerId === userId;
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
        this._elementImg.alt = this._name;
        this._elementName.textContent = this._name;
        this._elementLikesCount.textContent = this._likes.length;
        
        this._likeElement = this._element.querySelector(".element__button");
        if (this._isLiked) {
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
        this._isLiked = true;
    }

    removeLike() {
        this._likeElement.classList.remove("element__button_active");
        this._isLiked = false;
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
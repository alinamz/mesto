import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__full-image');
        this._popupExposition = this._popup.querySelector('.popup__title_type_full-image');
        this._setEventListeners = super.setEventListeners();
    }

    open(name, link) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupExposition.textContent = name;
        super.open();
    }
}
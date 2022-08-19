import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._formPopup = this._popup.querySelector(".form");
        this._inputList = this._formPopup.querySelectorAll(".popup__input");
        this._submitButton = this._formPopup.querySelector(".popup__button");
        this._initialValueText = this._submitButton.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formPopup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());   
       });
    }

    close () {
        super.close();
        this._formPopup.reset();
    }

    loading(textLoading) {
        this._submitButton.textContent = textLoading;
    }

    returnInitialValue() {
        this._submitButton.textContent = this._initialValueText;
    }
}
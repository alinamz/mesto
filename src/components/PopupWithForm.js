import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSibmitForm) {
        super(popupSelector)
        this._handleSubmitForm = handleSibmitForm;
        this._formPopup = this._popup.querySelector(".form")
        this._inputList = this._formPopup.querySelectorAll(".popup__input")
    }

    _getInputValues() {
        this._formValues = {}
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
       })
    }

    close () {
        super.close();
    }

}
import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(PopupSelector,{ submitHandler }) {
        super(PopupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popup.querySelector(".form"); 
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submitHandler(this._cardID, this._cardDelete);
            super.close()
          });
    }

    open(cardID, cardElement) {
        super.open();
        this._cardID = cardID;
        this._cardDelete = cardElement;
    }

   
}
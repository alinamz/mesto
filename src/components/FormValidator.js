export default class FormValidator {
  constructor(formValidSetting, formElement) {
    this._formValidSetting = formValidSetting;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._formValidSetting.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListener();
  }

  _setEventListener = () => {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._formValidSetting.inputSelector));
    this.toggleButtonState();
    this._inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
        this._isValid(formInput);
        this.toggleButtonState();
      });
    });
  }

  _isValid = (formInput) => {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  };

  _showInputError = (formInput, errorMessage) => {
    const formError = this._formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add(this._formValidSetting.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._formValidSetting.errorClass);
  };

  _hideInputError = (formInput) => {
    const formError = this._formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove(this._formValidSetting.inputErrorClass);
    formError.textContent = '';
    formError.classList.remove(this._formValidSetting.errorClass);
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableButton(this._buttonElement)
    } else {
      this._enableButton(this._buttonElement)
    }
  };

  _enableButton = () => {
    this._buttonElement.classList.remove(this._formValidSetting.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  disableButton = () => {
    this._buttonElement.classList.add(this._formValidSetting.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
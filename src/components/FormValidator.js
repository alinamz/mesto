export default class FormValidator {
  constructor(formValidSetting, formElement) {
    this._formValidSetting = formValidSetting;
    this._formElement = formElement;
  }

  enableValidation() {
    this._setEventListener();
  }

  _setEventListener = () => {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._formValidSetting.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._formValidSetting.submitButtonSelector);
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
      this._disableButton(this._buttonElement)
    } else {
      this._enableButton(this._buttonElement)
    }
  };

  _enableButton = (buttonElement) => {
    buttonElement.classList.remove(this._formValidSetting.inactiveButtonClass);
    buttonElement.disabled = false;
  }

  _disableButton = (buttonElement) => {
    buttonElement.classList.add(this._formValidSetting.inactiveButtonClass);
    buttonElement.disabled = true;
  }

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
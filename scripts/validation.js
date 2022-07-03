
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
const enableButton = (buttonElement, selectors) => {
  buttonElement.classList.remove(selectors.inactiveButtonClass);
  buttonElement.disabled = false;
}

const disableButton = (buttonElement, selectors) => {
  buttonElement.classList.add(selectors.inactiveButtonClass);
  buttonElement.disabled = true;
}

const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
   disableButton(buttonElement, selectors)
  } else {
    enableButton(buttonElement, selectors)
  }
};

const showInputError = (formOpenPopup, formInput, errorMessage, selectors) => {
  const formError = formOpenPopup.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(selectors.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(selectors.errorClass);

};

const hideInputError = (formOpenPopup, formInput, selectors) => {
  const formError = formOpenPopup.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(selectors.inputErrorClass);
  formError.textContent = '';
  formError.classList.remove(selectors.errorClass);
};

const isValid = (formOpenPopup, formInput, selectors) => {
  if (!formInput.validity.valid) {
    showInputError(formOpenPopup, formInput, formInput.validationMessage, selectors);
  } else {
    hideInputError(formOpenPopup, formInput, selectors);
  }
};

const setEventListeners = (formOpenPopup, selectors) => {
  const inputList = Array.from(formOpenPopup.querySelectorAll(selectors.inputSelector));
  const buttonElement = formOpenPopup.querySelector(selectors.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, selectors);
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formOpenPopup, formInput, selectors);
      toggleButtonState(inputList, buttonElement, selectors);
    });
  });
};

const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formOpenPopup) => {
    formOpenPopup.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formOpenPopup, selectors);
  });
};




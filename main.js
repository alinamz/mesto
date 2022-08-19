(()=>{"use strict";const e={formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function e(t,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_setEventListener",(function(){o._inputList=Array.from(o._formElement.querySelectorAll(o._formValidSetting.inputSelector)),o.toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._isValid(e),o.toggleButtonState()}))}))})),n(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),n(this,"_showInputError",(function(e,t){var n=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(o._formValidSetting.inputErrorClass),n.textContent=t,n.classList.add(o._formValidSetting.errorClass)})),n(this,"_hideInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._formValidSetting.inputErrorClass),t.textContent="",t.classList.remove(o._formValidSetting.errorClass)})),n(this,"toggleButtonState",(function(){o._hasInvalidInput()?o.disableButton(o._buttonElement):o._enableButton(o._buttonElement)})),n(this,"_enableButton",(function(){o._buttonElement.classList.remove(o._formValidSetting.inactiveButtonClass),o._buttonElement.disabled=!1})),n(this,"disableButton",(function(){o._buttonElement.classList.add(o._formValidSetting.inactiveButtonClass),o._buttonElement.disabled=!0})),n(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),this._formValidSetting=t,this._formElement=r,this._buttonElement=this._formElement.querySelector(this._formValidSetting.submitButtonSelector)}var r,o;return r=e,(o=[{key:"enableValidation",value:function(){this._setEventListener()}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t.link,this._name=t.name,this._cardID=t._id,this._selectorTemplate=n,this._handleCardClick=r,this._handleDeleteBtn=o,this._likes=t.likes,this._handleLikeCard=i,this._isLiked=1===this._likes.filter((function(e){return e._id===a})).length,this._ownerId=t.owner._id,this._userId=a,this._canDelete=this._ownerId===a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImg=this._element.querySelector(".element__image"),this._elementName=this._element.querySelector(".element__text"),this._elementLikesCount=this._element.querySelector(".element__like-sum"),this._elementImg.src="".concat(this._link),this._elementImg.alt=this._name,this._elementName.textContent=this._name,this._elementLikesCount.textContent=this._likes.length,this._likeElement=this._element.querySelector(".element__button"),this._isLiked&&this.addLike(),this._deleteElement=this._element.querySelector(".element__delete"),this._canDelete||this._deleteElement.remove(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._canDelete&&this._deleteElement.addEventListener("click",(function(t){e._handleDeleteBtn(e._cardID,e._element)})),this._elementImg.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeElement.addEventListener("click",(function(t){e._handleLikeCard(e)}))}},{key:"addLike",value:function(){this._likeElement.classList.add("element__button_active"),this._isLiked=!0}},{key:"removeLike",value:function(){this._likeElement.classList.remove("element__button_active"),this._isLiked=!1}},{key:"setLike",value:function(e){this._likes=e,this._elementLikesCount.textContent=this._likes.length}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.code&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()})),this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=t,n._formPopup=n._popup.querySelector(".form"),n._inputList=n._formPopup.querySelectorAll(".popup__input"),n._submitButton=n._formPopup.querySelector(".popup__button"),n._initialValueText=n._submitButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;s(d(a.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){s(d(a.prototype),"close",this).call(this),this._formPopup.reset()}},{key:"loading",value:function(e){this._submitButton.textContent=e}},{key:"returnInitialValue",value:function(){this._submitButton.textContent=this._initialValueText}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__full-image"),t._popupExposition=t._popup.querySelector(".popup__title_type_full-image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupExposition.textContent=e,b(w(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.items,r=t.renderer,o=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=n,this._renderer=r,this._container=document.querySelector(o)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){this._items.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"setItems",value:function(e){this._items=e}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=t,this._jobProfile=n,this._profileUser=r}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,job:this._jobProfile.textContent,avatar:this._profileUser.src}}},{key:"setUserInfo",value:function(e,t,n){this._nameProfile.textContent=e,this._jobProfile.textContent=t,this._id=n}},{key:"setUserAvatar",value:function(e){var t=e.avatar;this._profileUser.src="".concat(t)}}],n&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile__add"),C=document.querySelector(".profile__button"),I=document.querySelector(".profile__title"),q=document.querySelector(".profile__pharagraph"),T=document.querySelector(".profile__icon"),D=document.querySelector("form[name=formImage]"),R=document.querySelector("form[name=formProfile]"),V=document.querySelector("form[name=formAvatar]"),x=document.querySelector("#name-input"),B=document.querySelector("#job-input"),U=document.querySelector(".profile__update-avatar");function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,n=[{key:"_fetch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers,method:t,body:n}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitalCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.json()}))}},{key:"getUserData",value:function(){return this._fetch("/users/me")}},{key:"changeUserData",value:function(e,t){return this._fetch("/users/me","PATCH",JSON.stringify({name:e,about:t}))}},{key:"addNewCard",value:function(e,t){return this._fetch("/cards","POST",JSON.stringify({name:e,link:t}))}},{key:"deleteCard",value:function(e){return this._fetch("/cards/".concat(e),"DELETE")}},{key:"addLike",value:function(e){return this._fetch("/cards/".concat(e._cardID,"/likes"),"PUT")}},{key:"removeLike",value:function(e){return this._fetch("/cards/".concat(e._cardID,"/likes"),"DELETE")}},{key:"setProfileAvatar",value:function(e){var t={avatar:e.info};return this._fetch("/users/me/avatar","PATCH",JSON.stringify(t))}}],n&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=M(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function M(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function G(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e,t){var n,r=t.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitHandler=r,n._formElement=n._popup.querySelector(".form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;F($(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._cardID,e._cardDelete)}))}},{key:"open",value:function(e,t){F($(a.prototype),"open",this).call(this),this._cardID=e,this._cardDelete=t}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-48",headers:{authorization:"7d67df57-04a3-4c0e-b94c-731b56c35104","Content-Type":"application/json"}}),X=new L(I,q,T),Y=new K(".popup_type_confirmation-delete",{submitHandler:function(e,t){W.deleteCard(e).then((function(){t.remove(),Y.close()})).catch((function(e){return console.log(e)}))}});function Z(e,t){Y.open(e,t)}Y.setEventListeners();var ee=new r(e,R),te=new r(e,D),ne=new r(e,V);ee.enableValidation(),te.enableValidation(),ne.enableValidation();var re=new E(".popup_type_full-image");re.setEventListeners();var oe=function(e){return new i(e,"#card",re.open.bind(re),Z,ce,X._id).generateCard()},ie=new O({renderer:function(e){ie.addItem(oe(e))},containerSelector:".elements__images"}),ae=new y(".popup_type_update-profile",(function(e){ae.loading("Сохранение..."),W.setProfileAvatar(e).then((function(e){X.setUserAvatar(e),ae.close()})).catch((function(e){console.log(e)})).finally((function(){ae.returnInitialValue()}))}));ae.setEventListeners(),U.addEventListener("click",(function(){ae.open()}));var ue=new y(".popup_type_edit-profile",(function(e){ue.loading("Сохранение..."),W.changeUserData(e.name,e.job).then((function(e){X.setUserInfo(e.name,e.about),ue.close()})).catch((function(e){console.log(e)})).finally((function(){ue.returnInitialValue()}))}));ue.setEventListeners(),C.addEventListener("click",(function(){ue.open();var e=X.getUserInfo();x.setAttribute("value",e.name),B.setAttribute("value",e.job)}));var le=new y(".popup_type_add-place",(function(e){le.loading("Создание..."),W.addNewCard(e.name,e.link).then((function(e){e.canDelete=!0,ie.addItem(oe(e)),le.close()})).catch((function(e){console.log(e)})).finally((function(){le.returnInitialValue()}))}));le.setEventListeners(),P.addEventListener("click",(function(){te.disableButton(),le.open()}));var ce=function(e){e._isLiked?W.removeLike(e).then((function(t){e.removeLike(),e.setLike(t.likes)})).catch((function(e){console.log(e)})):W.addLike(e).then((function(t){e.addLike(),e.setLike(t.likes)})).catch((function(e){console.log(e)}))};Promise.all([W.getUserData(),W.getInitalCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X.setUserInfo(o.name,o.about,o._id),X.setUserAvatar(o),ie.setItems(i),ie.renderItems()})).catch((function(e){return console.log(e)}))})();
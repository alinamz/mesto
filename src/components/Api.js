export default class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    _fetch(partUrl, method = 'GET', body = null) {
        return fetch(`${this._baseUrl}${partUrl}`, {
            headers: this._headers,
            method: method,
            body: body
        })
            .then(res => {
                if (res.ok) return res.json();
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }

    getInitalCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => res.json());
    }

    getUserData() {
        return this._fetch('/users/me');
    }

    changeUserData(nameUser, aboutUser) {
        return this._fetch(
            '/users/me',
            'PATCH',
            JSON.stringify({
                name: nameUser,
                about: aboutUser
            }))
    }

    addNewCard(nameCard, linkCard) {
        return this._fetch(
            "/cards",
            "POST",
            JSON.stringify({
                name: nameCard,
                link: linkCard
            }))
    }

    deleteCard(cardId) {
        return this._fetch(
            `/cards/${cardId}`,
            "DELETE"
        )
    }

    addLike(card) {
        return this._fetch(
            `/cards/${card._cardID}/likes`,
            "PUT");
    }

    removeLike(card) {
        return this._fetch(
            `/cards/${card._cardID}/likes`,
            "DELETE");
    }

    setProfileAvatar({ info }) {
        const obj = { "avatar": info }
        return this._fetch(
            '/users/me/avatar',
            'PATCH',
            JSON.stringify(obj))
    }

}
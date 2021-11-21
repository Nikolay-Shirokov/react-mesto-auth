class Api {

  constructor(options) {
    this._options = options;
  }

  _sendQuery(url, queryParams = {}) {
    queryParams.headers = this._options.headers;
    return fetch(`${this._options.baseUrl}/${url}`, queryParams)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getInitialCards() {
    return this._sendQuery('cards');
  }

  getUserInfo() {
    return this._sendQuery('users/me');
  }

  patchUserInfo(userInfo) {
    const queryParams = {
      method: 'PATCH',
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about
      })
    }
    return this._sendQuery('users/me', queryParams);
  }

  patchAvatar(link) {
    const queryParams = {
      method: 'PATCH',
      body: JSON.stringify({
        avatar: link
      })
    }
    return this._sendQuery('users/me/avatar', queryParams);
  }

  postCard(card) {
    const queryParams = {
      method: 'POST',
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    }
    return this._sendQuery('cards', queryParams);
  }

  deleteCard(cardId) {
    const queryParams = {
      method: 'DELETE',
    }
    return this._sendQuery(`cards/${cardId}`, queryParams);
  }

  setStateLike(cardId, isLiked) {
    const method = isLiked? 'DELETE': 'PUT';
    const queryParams = {
      method: method,
    }
    return this._sendQuery(`cards/likes/${cardId}`, queryParams);
  }

}

// Инициализация АПИ
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: {
    authorization: '720b9ff8-fdb3-4425-b748-9e049f638fb6',
    'Content-Type': 'application/json'
  }
});

export default api;

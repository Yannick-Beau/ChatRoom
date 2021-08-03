// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
// intention : ajouter un message sur l'interface utilisateur
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS_OPEN = 'TOGGLE_SETTINGS_OPEN';
// intention : modifier la valeur de l'un des champs de settings
export const UPDATE_SETTINGS_FIELD = 'UPDATE_SETTINGS_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// intention : gérer une authentification réussie
export const CONNECT_USER = 'CONNECT_USER';
// intention : initialiser le websocket
export const INIT_WEBSOCKET = 'INIT_WEBSOCKET';
// intention : envoyer un message au serveur (sur le websocket)
export const SEND_MESSAGE = 'SEND_MESSAGE';

// === action creators
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value,
});

export const addMessage = (newMessage) => ({
  type: ADD_MESSAGE,
  message: newMessage,
});

export const toggleSettingsOpen = () => ({
  type: TOGGLE_SETTINGS_OPEN,
});

export const updateSettingsField = (name, newValue) => ({
  type: UPDATE_SETTINGS_FIELD,
  name: name,
  newValue: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (nickname) => ({
  type: CONNECT_USER,
  nickname: nickname,
});

export const initWebsocket = () => ({
  type: INIT_WEBSOCKET,
});

// est-ce qu'on a besoin d'une information ET que cette information n'est pas déjà
// présente dans le state ? si oui, payload
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

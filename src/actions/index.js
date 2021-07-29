export const SET_INPUT_MESSAGE_VALUE = 'SET_INPUT_MESSAGE_VALUE';
export const SET_INPUT_EMAIL_VALUE = 'SET_INPUT_EMAIL_VALUE';
export const SET_INPUT_PASSWORD_VALUE = 'SET_INPUT_PASSWORD_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_SHOW_SETTINGS = 'SHOW_SETTINGS';

export const changeInputValue = (value, typeInput) => {
  switch (typeInput) {
    case 'message':
      return {
        type: SET_INPUT_MESSAGE_VALUE,
        value: value,
      };

    case 'email':
      return {
        type: SET_INPUT_EMAIL_VALUE,
        value: value,
      };

    case 'password':
      return {
        type: SET_INPUT_PASSWORD_VALUE,
        value: value,
      };

    default:
      return {
        type: SET_INPUT_MESSAGE_VALUE,
        value: value,
      };
  }
};

export const setShowSettings = () => ({
  type: SET_SHOW_SETTINGS,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

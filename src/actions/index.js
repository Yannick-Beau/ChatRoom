export const SET_INPUT_MESSAGE_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const changeInputValue = (value, typeInput) => {
  switch (typeInput) {
    case 'message':
      return {
        type: SET_INPUT_MESSAGE_VALUE,
        value: value,
      };

    default:
      return {
        type: SET_INPUT_MESSAGE_VALUE,
        value: value,
      };
  }
};

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

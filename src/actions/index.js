export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const changeInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  value: value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

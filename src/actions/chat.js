// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// === action creators
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

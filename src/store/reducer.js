import messagesData from 'src/data';
import { SET_INPUT_MESSAGE_VALUE, ADD_MESSAGE } from 'src/actions';
import { getNextId } from 'src/utils';

// reducer : fonction qui prend en paramètre le state actuel et une action, et qui
// retourne le nouveau state suite à la prise en compte de l'action

// => quand le store reçoit une action, il appelle cette fonction, et il remplace
// son state actuel par le nouveau state (le reducer est le collègue du store "qui
// fait tout le boulot")

const initialState = {
  messages: messagesData,
  inputMessage: '',
  nickname: 'Jake Peralta',
};

function reducer(state = initialState, action = {}) {
  console.log('on passe dans le reducer, action:', action);

  switch (action.type) {
    case SET_INPUT_MESSAGE_VALUE:
      return {
        ...state,
        inputMessage: action.value,
      };
    case ADD_MESSAGE: {
      const newMessage = {
        id: getNextId(state.messages),
        userName: state.nickname,
        content: state.inputMessage,
      };
      const messagesCopy = [...state.messages];
      messagesCopy.push(newMessage);
      return {
        ...state,
        messages: messagesCopy,
        inputMessage: '',
      };
    }
    default:
      return state;
  }
}

export default reducer;

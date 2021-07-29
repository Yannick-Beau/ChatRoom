import { CHANGE_INPUT_VALUE, ADD_MESSAGE } from 'src/actions/chat';
import { getNextId } from 'src/utils';

const initialState = {
  messages: [
    {
      id: 1,
      username: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      username: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      username: 'Super Chat',
      content: 'Stp',
    },
  ],
  // contenu de l'input pour saisir un message
  inputMessage: '',
  // pseudo de l'utilisateur
  nickname: 'Super Chat',
};

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputMessage: action.value,
      };

    /*
      la portée de la variable newMessage serait le switch entier, on préfère limiter
      cette portée seulement au case => on ajoute des accolades juste pour limiter
      la portée
    */
    case ADD_MESSAGE: {
      // construire un nouveau message
      const newMessage = {
        id: getNextId(state.messages),
        username: state.nickname,
        content: state.inputMessage,
      };

      // faire une copie du tableau
      // const messagesCopy = [...state.messages];

      // ajouter le nouveau message dans la copie
      // messagesCopy.push(newMessage);

      return {
        ...state,
        // messages: messagesCopy,

        // sans variable intermédiaire
        messages: [...state.messages, newMessage],

        // c'est équivalent à :
        // [state.messages[0], state.messages[1], etc, newMessage]

        // on en profite pour vider l'input
        inputMessage: '',
      };
    }

    default:
      return state;
  }
}

export default chatReducer;

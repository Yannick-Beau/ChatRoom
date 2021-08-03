import {
  CHANGE_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS_OPEN,
  UPDATE_SETTINGS_FIELD,
  CONNECT_USER,
} from 'src/actions/chat';

const initialState = {
  messages: [],
  // contenu de l'input pour saisir un message
  inputMessage: '',
  // pseudo de l'utilisateur
  nickname: null,
  // indique si Settings est ouvert
  isSettingsOpen: true,
  // valeur du champ email
  email: '',
  // valeur du champ password
  password: '',
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
      return {
        ...state,
        messages: [...state.messages, action.message],

        // on en profite pour vider l'input
        inputMessage: '',
      };
    }

    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        // on inverse la valeur
        isSettingsOpen: !state.isSettingsOpen,
      };

    case UPDATE_SETTINGS_FIELD:
      if (action.name === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }

      // pas nécessaire d'avoir un else quand on a fait un return dans le if : de
      // toute façon, si on arrive à cette ligne c'est que forcément on n'est pas
      // passé dans le if
      return {
        ...state,
        password: action.newValue,
      };

    case CONNECT_USER:
      return {
        ...state,
        nickname: action.nickname,
        isSettingsOpen: false,
      };

    default:
      return state;
  }
}

export default chatReducer;

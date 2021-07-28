import messagesData from 'src/data';

// reducer : fonction qui prend en paramètre le state actuel et une action, et qui
// retourne le nouveau state suite à la prise en compte de l'action

// => quand le store reçoit une action, il appelle cette fonction, et il remplace
// son state actuel par le nouveau state (le reducer est le collègue du store "qui
// fait tout le boulot")

const initialState = {
  messages: messagesData,
};

function reducer(state = initialState, action = {}) {
  console.log('on passe dans le reducer, action:', action);

  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;

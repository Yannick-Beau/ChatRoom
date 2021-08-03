import { connect } from 'react-redux';

// on importe le composant de présentation
import Form from 'src/components/Form';

import { changeInputValue, sendMessage } from '../../actions/chat';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  value: state.inputMessage,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (newValue) => {
    // console.log('on va dispatcher une action, newValue:', newValue);

    const action = changeInputValue(newValue);
    dispatch(action);
  },
  addMessage: () => {
    // action send message : envoyer le message au serveur via le websocket
    dispatch(sendMessage());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Form);

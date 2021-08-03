import { connect } from 'react-redux';

import { toggleSettingsOpen, updateSettingsField, submitLogin } from 'src/actions/chat';

// on importe le composant de présentation
import Settings from 'src/components/Settings';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isOpen: state.isSettingsOpen,
  email: state.email,
  password: state.password,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleOpen: () => {
    dispatch(toggleSettingsOpen());
  },
  changeFieldValue: (identifier, newValue) => {
    const action = updateSettingsField(identifier, newValue);
    dispatch(action);
  },
  handleSubmit: () => {
    dispatch(submitLogin());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

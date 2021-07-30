import { connect } from 'react-redux';

// on importe le composant de présentation pour lequel on veut créer un assistant
import Settings from 'src/components/Settings';
import { changeInputValue, setShowSettings, submitLogin } from '../../actions';

const mapStateToProps = (state) => ({
  // nom de la prop : comment récupérer l'info correspondante dans le state
  inputEmailValue: state.inputEmail,
  inputPasswordValue: state.inputPassword,
  showSettings: state.showSettings,
});

// === mapDispatchToProps : dispatch des actions vers le store
const mapDispatchToProps = (dispatch) => ({
  setValue: (newValue, typeInput) => {
    const action = changeInputValue(newValue, typeInput);
    dispatch(action);
  },
  setShowSettings: () => {
    dispatch(setShowSettings());
  },
  handleSubmit: () => {
    dispatch(submitLogin());
  },
});

// ==== création de l'assistant
// connect crée une fonction sur mesure qui permettra de créer l'assistant
const fonctionCreation = connect(mapStateToProps, mapDispatchToProps);
// on applique la fonction fournie par connect sur le composant de présentation
// pour obtenir l'assistant
const assistant = fonctionCreation(Settings);

// on exporte l'assistant
export default assistant;

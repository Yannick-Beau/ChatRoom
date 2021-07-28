// connect : permet de créer un composant assistant (container) pour un composant de
// présentation
import { connect } from 'react-redux';

// on importe le composant de présentation pour lequel on veut créer un assistant
import Messages from 'src/components/Messages';

// === mapStateToProps : lecture des infos du state
// indique le mapping entre les infos du state et les props du composant de
// présentation
// retourne un objet
// const mapStateToProps = (state) => {
//   return {
//     // nom de la prop : comment récupérer l'info correspondante dans le state
//     nbColors: state.nbColors,
//   }
// };

// la seule instruction est un return => simplification avec return implicite
const mapStateToProps = (state) => ({
  // nom de la prop : comment récupérer l'info correspondante dans le state
  messages: state.messages,
});

// === mapDispatchToProps : dispatch des actions vers le store
const mapDispatchToProps = null;

// ==== création de l'assistant
// connect crée une fonction sur mesure qui permettra de créer l'assistant
const fonctionCreation = connect(mapStateToProps, mapDispatchToProps);
// on applique la fonction fournie par connect sur le composant de présentation
// pour obtenir l'assistant
const assistant = fonctionCreation(Messages);

// on exporte l'assistant
export default assistant;

/* ce que fait l'assistant, c'est un peu comme :
const AssistantNbColors = () => {
  // récupération de l'info dans le state
  const nbColorsValue = state.nbColors;

  // injection des valeurs du state dans les props du composant
  return (
    <NbColors nbColors={nbColorsValue}
  );
}

export default AssistantNbColors;
*/

// => assistant ("container") pour le composant NbColors : prendre en charge la
// communication avec le store et transmettre les informations en props au
// composant de présentation NbColors

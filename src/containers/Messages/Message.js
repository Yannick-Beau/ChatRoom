import { connect } from 'react-redux';

// on importe le composant de présentation
import Message from 'src/components/Messages/Message';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
// deuxième paramètre facultatif pour mapStateToProps et mapDispatchToProps :
// permet de récupérer les props qui sont transmises au container par son
// composant parent => ici le parent du container c'est Messages.
// Ces props sont transmises automatiquement au composant de présentation,
// mais on peut s'en servir pour calculer des choses
const mapStateToProps = (state, ownProps) => {
  console.log('ownProps:', ownProps);

  return ({
    // nom de la prop à remplir: élément à récupérer dans le state
    isOwnMessage: state.nickname === ownProps.username,
    /* on compare state.nickname et le username du message */
  });
};

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Message);

import { connect } from 'react-redux';

// on importe le composant de présentation
import Chat from 'src/components/Chat';

import { initWebsocket } from '../../actions/chat';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  // si on est authentifié, on a un nickname défini
  isAuthentified: state.nickname !== null,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  initTheWebsocket: () => {
    dispatch(initWebsocket());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

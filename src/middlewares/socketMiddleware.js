import {
  INIT_WEBSOCKET,
  CONNECT_USER,
  SEND_MESSAGE,
  addMessage,
} from '../actions/chat';

// eslint-disable-next-line no-unused-vars
let socket;

const socketMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware socket: ', action);

  switch (action.type) {
    case INIT_WEBSOCKET:
      socket = window.io('http://localhost:3001');
      // console.log('socket initialisé');
      break;

    case CONNECT_USER:
      // on veut s'abonner à l'événement seulement quand l'authentification est
      // réussie => action CONNECT_USER et pas SUBMIT_LOGIN
      console.log('on va s\'abonner à l\'événement');

      // on s'abonne aux événements "send_message" du websocket
      socket.on('send_message', (message) => {
        // console.log('message reçu', message);

        // je veux ajouter le message reçu sur l'interface
        store.dispatch(addMessage(message));
      });
      break;

      // on rajoute des accolades autour du traitement du case pour limiter la
      // portée des variables à ce case
    case SEND_MESSAGE: {
      // console.log('on va envoyer le message au serveur');

      // on construit le message, sans id car c'est le serveur qui va gérer ça
      const { nickname, inputMessage } = store.getState();

      const newMessage = {
        username: nickname,
        content: inputMessage,
      };

      // on envoie le message sur le websocket
      socket.emit('send_message', newMessage);
      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default socketMiddleware;

/*
  switch(value) {
    case 'a': console.log('1');
    case 'b': console.log('2');
    case 'c': console.log('3');
    default: console.log('4');
  }

  fonctionnement du switch : quand on a trouvé le cas qui correspond à la valeur,
  on continue jusqu'à la fin, si value vaut 'b' => 234

  pour ne pas avoir ce comportement :
  switch(value) {
    case 'a': console.log('1'); break;
    case 'b': console.log('2'); break;
    case 'c': console.log('3'); break;
    default: console.log('4');
  }
  => si value vaut 'b' => 2

  pour le reducer, on n'a pas eu besoin de break, car on faisait un return sur
  chaque cas
*/

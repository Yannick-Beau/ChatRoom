import { CONNECT_USER, INIT_WEBSOCKET } from '../actions';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware socket: ', action);

  switch (action.type) {
    case INIT_WEBSOCKET:
      socket = window.importScripts('http://localhost:3001');
      break;
    case CONNECT_USER:
      socket.on('send_message', (message) => {
        console.log('message reçu', message);
      });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};
export default socketMiddleware;

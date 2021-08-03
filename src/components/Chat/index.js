// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';

import './styles.scss';

/* Plan d'action pour pouvoir faire communiquer John et Burt :
x avoir la bibliothèque socket.io (ajouter la bibliothèque fournie par le serveur =>
  comme ça on est sûr d'avoir la même version des deux côtés)
x ouvrir le canal de communication avec le serveur (websocket)
   const socket = window.io('http://localhost:3001');
x s'abonner à un événement du websocket pour pouvoir être informé en cas de nouveau
message => juste après l'authentification réussie de l'utilisateur
   socket.on('send_message', (message) => { traitement du message })
x quand on écrit un nouveau message, l'envoyer sur le websocket
   socket.emit('send_message', { infos du message })
  Attention, on reçoit nos propres messages
x mettre en place le traitement quand on reçoit un événement (au lieu du console.log)
=> modifier et utiliser ADD_MESSAGE
*/

// == Composant
const Chat = ({ initTheWebsocket, isAuthentified }) => {
  useEffect(() => {
    initTheWebsocket();
  }, []);
  // effet appliqué une seule fois, après le premier rendu de Chat

  return (
    <div className="app">
      <Messages />
      {isAuthentified && <Form />}
      <Settings />
    </div>
  );
};

Chat.propTypes = {
  initTheWebsocket: PropTypes.func.isRequired,
  isAuthentified: PropTypes.bool.isRequired,
};

// == Export
export default Chat;

// == Import npm
import React, { useEffect } from 'react';

// == Import
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
import Settings from 'src/containers/Settings';
import PropTypes from 'prop-types';
import './styles.scss';

// import data
// import messagesData from 'src/data';
// == Composant
const Chat = ({ initTheWebsocket }) => {
  useEffect(() => {
    initTheWebsocket();
  }, []);
  return (
    <div className="app">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

Chat.propTypes = {
  initTheWebsocket: PropTypes.func.isRequired,
};

// == Export
export default Chat;

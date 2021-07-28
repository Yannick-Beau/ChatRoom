import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';

const Messages = ({ messages }) => (
  <ul>
    {messages.map((message) => (<Message key={message.id} {...message} />))}
  </ul>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      /* on valide seulement les informations réellement utilisées par Tasks */
    }).isRequired,
  ).isRequired,
};

export default Messages;

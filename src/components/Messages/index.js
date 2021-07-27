import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';

const Messages = ({ messagesData }) => (
  <ul>
    {messagesData.map((message) => (<Message key={message.id} {...message} />))}
  </ul>
);

Messages.propTypes = {
  messagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      /* on valide seulement les informations réellement utilisées par Tasks */
    }).isRequired,
  ).isRequired,
};

export default Messages;

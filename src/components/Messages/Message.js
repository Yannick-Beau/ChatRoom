import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ id, userName, content }) => (
  <li id={id}>
    <h2>{userName}</h2>
    <p>{content}</p>
  </li>
);

Message.propTypes = {
  id: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;

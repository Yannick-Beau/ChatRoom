import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ id, author, message }) => (
  <li id={id}>
    <h2>{author}</h2>
    <p>{message}</p>
  </li>
);

Message.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;

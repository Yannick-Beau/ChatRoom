import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ username, content }) => (
  <div className="message">
    <div className="message-author">{username}</div>
    <div className="message-content">{content}</div>
  </div>
);

Message.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;

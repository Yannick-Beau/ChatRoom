import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ username, content, isOwnMessage }) => {
  let cssClass = 'message';
  if (isOwnMessage) {
    cssClass += ' message--own';
  }

  return (
    <div className={cssClass}>
      <div className="message-author">{username}</div>
      <div className="message-content">{content}</div>
    </div>
  );
};

Message.propTypes = {
  /* auteur du message */
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  /* indique s'il faut l'affichage spécial */
  isOwnMessage: PropTypes.bool.isRequired,
};

export default Message;

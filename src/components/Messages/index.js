import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';

const Messages = ({ messages }) => {
  // https://reactjs.org/docs/hooks-reference.html#useref
  const refDiv = useRef(null);

  useEffect(() => {
    // console.log('on va scroller');

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
    // déplacer la scrollbar sur un élément

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight
    // hauteur totale d'un élément, y compris la zone non visible en overflow
    // eslint-disable-next-line prefer-destructuring
    const scrollHeight = refDiv.current.scrollHeight;

    // console.log(`scrollHeight: ${scrollHeight}`);

    refDiv.current.scrollTo({
      top: scrollHeight,
      left: 0,
      // scroll progressif
      behavior: 'smooth',
    });
  });
  return (
    <ul ref={refDiv}>
      {messages.map((message) => (<Message key={message.id} {...message} />))}
    </ul>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      /* on valide seulement les informations réellement utilisées par Tasks */
    }).isRequired,
  ).isRequired,
};

export default Messages;

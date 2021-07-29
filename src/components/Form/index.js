import React from 'react';
import { Send } from 'react-feather';
import PropTypes from 'prop-types';

import './style.scss';

const Form = ({ value, setValue, addMessage }) => (
  <form
    className="form-addMessage"
    onSubmit={(event) => {
      event.preventDefault();
      console.log('on va poster le message');
      addMessage();
    }}
  >
    <input
      className="input-message"
      type="text"
      placeholder="Saisissez votre message..."
      value={value}
      onChange={(event) => {
        setValue(event.currentTarget.value, 'message');
      }}
    />
    <button className="submit-addMessage" type="submit">
      <Send size={48} />
    </button>
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default Form;

import React from 'react';
import { Send } from 'react-feather';

import './style.scss';

const Form = () => (
  <form>
    <input
      type="text"
      placeholder="Saisissez votre message..."
    />
    <button type="button">
      <Send size={48} />
    </button>
  </form>
);

export default Form;

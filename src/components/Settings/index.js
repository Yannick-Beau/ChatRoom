import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Settings = ({ value, setValue }) => (
  <div className="settings">
    <button className="show-settings" type="button">
      x
    </button>
    <form
      className="form-settings"
      onSubmit={(event) => {
        event.preventDefault();
        console.log('on va ce connecter');
      }}
    >
      <input
        className="input-email"
        type="text"
        placeholder="Email"
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value, 'email');
        }}
      />
      <input
        className="input-password"
        type="password"
        placeholder="Mot de passe"
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value, 'password');
        }}
      />
      <button className="submit-settings" type="submit">
        Envoyer
      </button>
    </form>
  </div>
);

Settings.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Settings;

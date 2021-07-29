import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Settings = ({
  inputEmailValue,
  inputPasswordValue,
  setValue,
  showSettings,
  setShowSettings,
}) => (
  <div className="settings">
    <button
      className="show-settings"
      type="button"
      onClick={() => {
        setShowSettings();
      }}
    >
      {showSettings ? 'x' : '+'}
    </button>
    {showSettings
      && (
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
          value={inputEmailValue}
          onChange={(event) => {
            setValue(event.currentTarget.value, 'email');
          }}
        />
        <input
          className="input-password"
          type="password"
          placeholder="Mot de passe"
          value={inputPasswordValue}
          onChange={(event) => {
            setValue(event.currentTarget.value, 'password');
          }}
        />
        <button className="submit-settings" type="submit">
          Envoyer
        </button>
      </form>
      )}
  </div>
);

Settings.propTypes = {
  inputEmailValue: PropTypes.string.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  showSettings: PropTypes.bool.isRequired,
  setShowSettings: PropTypes.func.isRequired,
};

export default Settings;

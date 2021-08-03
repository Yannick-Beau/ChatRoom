import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './settings.scss';

// Remplacement multiple : sélectionner à la souris le premier emplacement
// Ctrl + D pour sélectionner chaque emplacement suivant
// on saisit le texte de remplacement
const Settings = ({
  isOpen,
  toggleOpen,
  email,
  password,
  changeFieldValue,
  handleSubmit,
}) => {
  let buttonCssClass = 'settings-toggle';
  if (isOpen) {
    buttonCssClass += ' settings-toggle--open';
  }

  return (
    <div className="settings">
      <button
        type="button"
        className={buttonCssClass}
        onClick={() => {
          toggleOpen();
        }}
      >
        +
      </button>
      {isOpen && (
        <form
          className="settings-form"
          onSubmit={(event) => {
            event.preventDefault();
            // console.log('Soumission du formulaire');
            handleSubmit();
          }}
        >
          <Field
            identifier="email"
            placeholder="lumo@chat.cat"
            label="Adresse e-mail"
            changeField={(identifier, newValue) => {
              // console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
              changeFieldValue(identifier, newValue);
            }}
            value={email}
          />
          <Field
            identifier="password"
            placeholder="Mot de passe"
            label="Mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              // console.log(`changeField sur password : identifier=${identifier}, newValue=${newValue}`);
              changeFieldValue(identifier, newValue);
            }}
            value={password}
          />
          <button type="submit" className="settings-submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

Settings.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Settings;

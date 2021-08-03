import React from 'react';
import PropTypes from 'prop-types';
// https://www.npmjs.com/package/react-feather
// https://bit.dev/feathericons/react-feather
import { Send } from 'react-feather';

import './form.scss';

/*
Champ contrôlé :
- avoir une case dans le state pour contenir la valeur du champ
- contrôle en lecture : l'input lit la valeur dans le state et l'affiche => ajout
d'une prop sur le composant et mise en place d'un container pour injecter la valeur
provenant du state dans cette prop.
A ce stade, un warning " You provided a `value` prop to a form field without an
`onChange` handler" est normal. Si on essaie de saisir des caractères dans le champ,
ils n'apparaissent pas.
Pour vérifier : changer temporairement la valeur dans le state initial (reducer)
- contrôle en écriture : quand on saisit des caractères, ils se répercutent dans le
state (onChange).
On ajoute une prop de type fonction sur le composant, c'est le container qui injecte
une valeur (fonction) pour cette prop, avec un dispatch d'action
- ajout d'une prop de type fonction, on déclenche cette fonction avec onChange
- on ajoute une action (payload : nouvelle valeur) dans l'annuaire et son
traitement dans le reducer
- on remplit la nouvelle prop avec le container => mapDispatchToProps : on dispatch
la nouvelle action (nouvelle valeur fournie en paramètre)
*/

const Form = ({ value, setValue, addMessage }) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();

      console.log('on va poster le message');
      addMessage();
    }}
  >
    <input
      className="form-input"
      type="text"
      value={value}
      onChange={(event) => {
        // console.log(event.currentTarget.value);
        setValue(event.currentTarget.value);
      }}
    />
    <button type="submit" className="form-submit">
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

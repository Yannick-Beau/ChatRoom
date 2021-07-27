// == Import npm
import React from 'react';

// == Import
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import './styles.scss';

// import data
import messagesData from 'src/data';
// == Composant
const App = () => (
  <div className="app">
    <Messages messagesData={messagesData} />
    <Form />
  </div>
);

// == Export
export default App;

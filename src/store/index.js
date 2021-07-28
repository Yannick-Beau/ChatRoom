import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from './reducer';

// le store est le "gardien" de notre state : il le stocke et il le protège (il
// autorise seulement certaines modifications qu'on a prévues à l'avance)

const store = createStore(
  // le reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

// enhancer est normalement le troisième paramètre de createStore, mais si on le
// fournit en deuxième argument, createStore détecte que c'est un enhancer et
// l'utilise comme si c'était le troisième argument (mécanisme spécifique à cette
// fonction)

export default store;

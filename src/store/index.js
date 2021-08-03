import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/chat';

import authMiddleware from 'src/middlewares/authMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';

// on construit un enhancer avec à la fois les dev tools et les middlewares
const enhancer = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    socketMiddleware,
  ),
);

/*
   c'est comme si on faisait :
   const enhancerAvecMiddlewares = applyMiddleware(middleware1, middleware2, etc);
   const enhancerDevTools_et_middlewares = composeWithDevTools(enhancerAvecMiddlewares);
*/

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancer,
);

export default store;

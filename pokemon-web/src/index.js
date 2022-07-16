import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderPokemons = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountPokemons = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

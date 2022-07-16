import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderPokemonDetails = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountPokemonDetails = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

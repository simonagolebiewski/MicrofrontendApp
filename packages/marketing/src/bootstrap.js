import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Mount fx to start app
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

//If in dev and in isolation, call mount immed.
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

//If we are running through container, we should export the mount fx
export { mount };
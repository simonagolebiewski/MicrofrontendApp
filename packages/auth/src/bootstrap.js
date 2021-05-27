import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//Mount fx to start app
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    //if default history given - use default history; otherwise use createMemoryHistory
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            console.log(nextPathname); 
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

//If in dev and in isolation, call mount immed.
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

//If we are running through container, we should export the mount fx
export { mount };
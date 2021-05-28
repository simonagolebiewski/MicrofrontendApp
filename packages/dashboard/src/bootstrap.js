 import { createApp } from 'vue';
 import Dashboard from './components/Dashboard.vue';

//Mount fx to start app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

//If in dev and in isolation, call mount immed.
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

//If we are running through container, we should export the mount fx
export { mount };
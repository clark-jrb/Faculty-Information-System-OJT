require('./bootstrap');

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { NotifProvider } from './Contexts/Notification';
import { EditProvider } from './Contexts/EditButtons';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <NotifProvider>
                <EditProvider>
                    <App {...props} />
                </EditProvider>
            </NotifProvider>,
            el
        );
    },
});

InertiaProgress.init({ color: '#FCC926' });

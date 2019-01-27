import { Route } from '@angular/router';

import { MainComponent } from './layout';

export const mainRoute: Route = {
    path: '',
    component: MainComponent,
    outlet: 'main'
};

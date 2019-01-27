import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainRoute } from './app.route';

// import { DEBUG_INFO_ENABLED } from './app.constants';

const LAYOUT_ROUTES = [
    mainRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true /*, enableTracing: DEBUG_INFO_ENABLED */})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

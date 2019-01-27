import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    LoginComponent, ErrorComponent
} from '../shared';


@NgModule({
    imports: [
    ],
    declarations: [
        LoginComponent,
        ErrorComponent
    ],
    providers: [
    ],
    entryComponents: [LoginComponent],
    exports: [
        LoginComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule {}

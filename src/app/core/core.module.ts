import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        LayoutComponent
    ],
    imports: [
        RouterModule,
        MatIconModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class CoreModule {
    constructor() {}
}

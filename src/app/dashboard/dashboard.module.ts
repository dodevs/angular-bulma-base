import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: DashboardComponent }
]

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        
    ]
})
export class DashboardModule {}

import { Routes } from '@angular/router';
import { OverviewComponent as Overview } from './pages/overview/overview.component';
import { CreateComponent as Create } from './pages/create/create.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
    },
    {
        path: 'overview',
        component: Overview
    },
    {
        path: 'create',
        component: Create
    }
];

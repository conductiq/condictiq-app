import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'agents',
        loadChildren: () => import('./agent/agent.routes').then((r) => r.routes)
    }
];

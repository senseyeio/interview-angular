import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: ``, pathMatch: `full`, redirectTo: 'overview' },
  { path: 'overview', loadComponent: () => import('./overview/overview-page/overview-page.component').then(module => module.OverviewPageComponent) },
];

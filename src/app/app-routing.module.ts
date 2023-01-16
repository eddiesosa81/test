import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'enterprise',
    pathMatch: 'full'
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./pages/enterprise/enterprise.module').then( m => m.EnterprisePageModule)
  },
  {
    path: 'enterprise-ingre',
    loadChildren: () => import('./pages/enterprise-ingre/enterprise-ingre.module').then( m => m.EnterpriseIngrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterpriseIngrePage } from './enterprise-ingre.page';

const routes: Routes = [
  {
    path: '',
    component: EnterpriseIngrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterpriseIngrePageRoutingModule {}

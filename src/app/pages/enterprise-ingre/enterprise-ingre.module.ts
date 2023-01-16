import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterpriseIngrePageRoutingModule } from './enterprise-ingre-routing.module';

import { EnterpriseIngrePage } from './enterprise-ingre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterpriseIngrePageRoutingModule
  ],
  declarations: [EnterpriseIngrePage]
})
export class EnterpriseIngrePageModule {}

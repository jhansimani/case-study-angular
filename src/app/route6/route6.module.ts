import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route6-routing.module';
import { Route6Component } from './route6.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Route6Component],
  imports: [CommonModule, Route6RoutingModule, SharedModule],
})
export class Route6Module {}

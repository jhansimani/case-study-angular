import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route2-routing.module';
import { Route2Component } from './route2.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [Route2Component],
  imports: [CommonModule, Route2RoutingModule, SharedModule, HttpClientModule,DirectivesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Route2Module {}

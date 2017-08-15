import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent
  ]
})
export class CoreModule {}

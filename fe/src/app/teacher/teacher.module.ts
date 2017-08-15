import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { TeacherHomeComponent } from './teacher-home/teacher-home.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherHomeComponent
  ],
  exports: [
    TeacherHomeComponent
  ]
})
export class TeacherModule {}

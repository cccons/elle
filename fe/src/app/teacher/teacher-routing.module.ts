import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherHomeComponent } from './teacher-home/teacher-home.component';

const routes: Routes = [
  { path: '', component: TeacherHomeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TeacherRoutingModule {}

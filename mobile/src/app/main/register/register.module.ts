import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from './register.page';
import { ServerService } from '../tools/server.service'
import { TypePageModule } from './type/type.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'type',
    loadChildren: () => TypePageModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterPage],
  providers: [ServerService]
})
export class RegisterPageModule { }

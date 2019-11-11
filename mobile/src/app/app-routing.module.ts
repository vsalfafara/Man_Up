import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPageModule } from './main/auth/auth.module'
import { RegisterPageModule } from './main/register/register.module'
import { TypePageModule } from './main/register/type/type.module';
import { PatientPageModule } from './main/register/type/patient/patient.module';
import { SpecialistPageModule } from './main/register/type/specialist/specialist.module';
import { HomePageModule } from './main/home/home.module';
import { HomePageModulee } from './home/home.module'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full'
  },
  {
    path: 'hero',
    loadChildren: () => AuthPageModule
  },
  {
    path: 'register',
    loadChildren: () => RegisterPageModule,
  },
  {
    path: 'type',
    loadChildren: () => TypePageModule
  },
  {
    path: 'patient',
    loadChildren: () => PatientPageModule
  },
  {
    path: 'specialist',
    loadChildren: () => SpecialistPageModule
  },
  {
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {
    path: 'home2',
    loadChildren: () => HomePageModulee
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

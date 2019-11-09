import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthPageModule } from './main/auth/auth.module'
import { LoginPageModule } from './main/login/login.module'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hero',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'hero',
    loadChildren: () => AuthPageModule
  },
  {
    path: 'login',
    loadChildren: () => LoginPageModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

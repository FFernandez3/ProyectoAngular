import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KimchiAboutComponent } from './kimchi-about/kimchi-about.component';
import { KimchiKdramasComponent } from './kimchi-kdramas/kimchi-kdramas.component';
import { VistosComponent } from './vistos/vistos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', //home
    pathMatch: 'full',

  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'kdramas',
    component: KimchiKdramasComponent,
  },
  {
    path: 'about',
    component: KimchiAboutComponent,
  },
  {
    path: 'vistos',
    component: VistosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

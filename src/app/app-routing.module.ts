import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KimchiAboutComponent } from './kimchi-about/kimchi-about.component';
import { KimchiKdramasComponent } from './kimchi-kdramas/kimchi-kdramas.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'kdramas',
    pathMatch:'full',

  },
  {
    path: 'kdramas',
    component: KimchiKdramasComponent,
  },
  {
    path: 'about',
    component: KimchiAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

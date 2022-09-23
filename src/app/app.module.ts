import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KdramaListComponent } from './kdrama-list/kdrama-list.component';
import { FormsModule } from '@angular/forms';
import { KimchiAboutComponent } from './kimchi-about/kimchi-about.component';
import { KimchiKdramasComponent } from './kimchi-kdramas/kimchi-kdramas.component';
import { VistosComponent } from './vistos/vistos.component';

@NgModule({
  declarations: [
    AppComponent,
    KdramaListComponent,
    KimchiAboutComponent,
    KimchiKdramasComponent,
    VistosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

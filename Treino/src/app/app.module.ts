import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DISCComponent } from './perfil-disc/perfil-disc.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortifolioComponent,
    HobbiesComponent,
    DISCComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

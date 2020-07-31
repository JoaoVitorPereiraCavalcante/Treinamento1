import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home.component';
import { PortifolioComponent } from './Portifolio/portifolio.component';
import { HobbiesComponent } from './Hobbies/hobbies.component';
import { DISCComponent } from './PerfilDISC/perfilDisc.component';
import { SideBarComponent } from './Side-bar/side-bar.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

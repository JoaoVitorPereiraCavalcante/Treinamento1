import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home.component';
import { PortifolioComponent } from './Portifolio/Portifolio.component';
import { HobbiesComponent } from './Hobbies/Hobbies.component';
import { DISCComponent } from './PerfilDISC/PerfilDisc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortifolioComponent,
    HobbiesComponent,
    DISCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

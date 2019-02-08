import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { ListaCartasComponent } from './components/lista-cartas/lista-cartas.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { TowersComponent } from './components/towers/towers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartasComponent,
    EstadisticasComponent,
    ListaCartasComponent,
    FooterComponent,
    InfoComponent,
    TowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

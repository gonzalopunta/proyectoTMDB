import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './Components/personas/personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DetailActorComponent } from './Components/detail-actor/detail-actor.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonaService } from './Services/persona.service';


const ROUTES: Routes = [
  {path: 'actores', component: PersonasComponent},
  {path: 'detalle/:idActor', component: DetailActorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    DetailActorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(
      ROUTES
    )
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

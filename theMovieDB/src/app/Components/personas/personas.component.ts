import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Interfaces/personas-response.interface';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  actores: Persona[];
  displayedColumns = ['name'];

  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
    this.listaActores();
  }

  listaActores(){
    this.personaService.getActores().subscribe( element =>{
      this.actores = element.results;
    });
  }
}

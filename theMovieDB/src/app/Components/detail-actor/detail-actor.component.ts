import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalles } from 'src/app/Interfaces/personas-response.interface';
import { PersonaService } from 'src/app/Services/persona.service';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.css']
})
export class DetailActorComponent implements OnInit {

  idActor: string;
  actor: Detalles;

  constructor( private route: ActivatedRoute, private personaService: PersonaService ) { }

  ngOnInit() {
    this.detallesActor();
  }

  detallesActor(){
    this.route.paramMap.subscribe(param => {
      this.idActor = param.get('idActor');

      this.personaService.getActor(this.idActor).subscribe(resp =>{
        this.actor = resp;
      });
    });
  }
}

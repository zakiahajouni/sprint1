import { Component, OnInit } from '@angular/core';
import { Type } from '../model/Type.model';
import { MotorsService } from '../service/motors.service';

@Component({
  selector: 'app-liste-types',
  templateUrl: './liste-types.component.html',
  styleUrls: ['./liste-types.component.css']
})
export class ListeTypesComponent implements OnInit {
  
  types! : Type[];
  updatedTyp: Type={"idTyp":0,"nameTyp":""};
  ajout:boolean=true;


  constructor(private motorsService : MotorsService) { }

  ngOnInit(): void {
    this.types=this.motorsService.listeTypes();
  }

  TypeUpdated(types: Type){
    this.motorsService.ajouterType(types);
    console.log(Type);
  }
  
  update(Type: Type){
    this.updatedTyp = Type
    this.ajout=false;

}


}

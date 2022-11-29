import { Component, OnInit } from '@angular/core';
import { Motors } from '../model/motors.model';
import { Type } from '../model/Type.model';
import { AuthService } from '../service/auth.service';
import { MotorsService } from '../service/motors.service';

@Component({
  selector: 'app-recherche-par-name',
  templateUrl: './recherche-par-name.component.html',
  styleUrls: ['./recherche-par-name.component.css']
})
export class RechercheParNameComponent implements OnInit {
  motors! : Motors[];
  idTyp! : number;
  types!: Type[];
  allmotors!:Motors[];


  constructor(public authservice:AuthService,
              private motorsService : MotorsService) { }

  ngOnInit(): void {
  this.allmotors=this.motorsService.listeMotors();
  this.types=this.motorsService.listeTypes();
    }
    onKeyUp(filterText : string){
      console.log(filterText);
      this.motors = this.allmotors.filter(item =>item.nomMotors?.toLowerCase().includes(filterText));
    }

  recherchermotors(){

  }
  supprimerMotors(){

  }

}

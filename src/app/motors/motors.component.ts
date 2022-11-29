import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motors } from '../model/motors.model';
import { AuthService } from '../service/auth.service';
import { MotorsService } from '../service/motors.service';
@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css'],
})
export class MotorsComponent implements OnInit {
  motors : Motors []; 
      constructor(private motorsService: MotorsService,
        private router : Router,
        public authService: AuthService ) {
      this.motors = motorsService.listeMotors();
      console.log(this.motors)
      }
      ngOnInit(): void { 
     
      }
      supprimerMotors(m: Motors)
      {
     //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.motorsService.supprimerMotors(m);
    }
    }
import { Component, OnInit } from '@angular/core';
import { Motors } from '../model/motors.model';
import { MotorsService } from '../service/motors.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Type } from '../model/Type.model';


@Component({
    selector:'add-motors',
    templateUrl:'./add-motors.component.html',
    styleUrls:['./add-motors.component.css'],
})
export class AddMotorsComponent implements OnInit {
newMotors = new Motors();
newIdTyp! : number;
newType! : Type;
types!: Type[];
constructor(private activatedRoute: ActivatedRoute,
            private router :Router,
            private motorsService: MotorsService) { }
            
    ngOnInit() : void {
       this.types = this.motorsService.listeTypes();
    }
    addMotors() {
        console.log(this.newIdTyp);
        this.newType = this.motorsService.consulterType(this.newIdTyp);
        this.newMotors.type = this.newType;
        this.motorsService.ajouterMotors(this.newMotors);
        this.router.navigate(['motors']);
        }
        


}
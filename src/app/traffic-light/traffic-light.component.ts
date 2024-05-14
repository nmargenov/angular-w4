import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange } from '@angular/core';
import { EmergencyButtonComponent } from '../emergency-button/emergency-button.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent {
  @Input() horizontal!: boolean;
  @Input() emergency!: boolean;
  @Input() changeColors!:Function;
  @Input() verticalRed!:boolean;
  @Input() verticalGreen!:boolean;
  @Input() yellowLight!:boolean;
  @Input() horizontalGreen!:boolean;
  @Input() horizontalRed!:boolean;

  canCross:boolean=false;

  ngOnInit() {
    this.changeColors();
    this.checkIfCanCross
  }

  ngOnChanges(){
    this.checkIfCanCross();
  }

  checkIfCanCross(){
    if(this.horizontal){
      if(this.horizontalRed){
        this.canCross = false;
      }else{
        this.canCross = true;
      }
    }
    if(!this.horizontal){
      if(this.verticalRed){
        this.canCross = false;
      }else{
        this.canCross = true;
      }
    }
  }

  cross(){
    if(this.horizontal){
      if(this.horizontalRed){
        return;
      }
      if(this.yellowLight){
        alert('Неправилно пресичане на жълто!')
      }
    }
    if(!this.horizontal){
      if(this.verticalRed){
        return;
      }
      if(this.yellowLight){
        alert('Неправилно пресичане на жълто!')
      }
    }
  }

}

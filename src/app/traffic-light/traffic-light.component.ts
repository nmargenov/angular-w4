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

  ngOnInit() {
    this.changeColors();
  }


  // changeColors() {
  //   this.yellowLight=false;
  //   this.horizontalRed=true;
  //   this.verticalGreen=true;
  //     this.timeoutOne = setTimeout(()=>{
  //       this.horizontalRed=false;
  //       this.verticalGreen=false;
  //       this.yellowLight=true;
  //      this.timeoutTwo= setTimeout(()=>{
  //         this.yellowLight=false;
  //         this.verticalRed=true;
  //         this.horizontalGreen=true;
  //         this.timeoutThree = setTimeout(()=>{
  //           this.verticalRed=false;
  //           this.horizontalGreen=false;
  //           this.yellowLight=true;
  //           this.timeoutFour = setTimeout(()=>{        
  //             this.changeColors();     
  //           },2000)
  //         },5000);
  //       },2000);
  //     },5000);
  // }
}

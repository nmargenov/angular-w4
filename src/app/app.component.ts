import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { CommonModule } from '@angular/common';
import { EmergencyButtonComponent } from './emergency-button/emergency-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent, CommonModule, EmergencyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trafficLight';

  emergency = false;
  time = 0;

  handleEmergencyChange(value: boolean) {
    this.emergency = value;
    if (value === true) {
      clearTimeout(this.timeoutOne);
      this.verticalGreen=false;
      this.verticalRed=false;
      this.horizontalGreen=false;
      this.horizontalRed=false;
      this.yellowLight=true;
    } else {
      this.time=0;
      this.timer();
    }
  }

  horizontalRed = false;
  verticalRed = false;
  yellowLight = false;
  horizontalGreen = false;
  verticalGreen = false;


  timeoutOne: any;
  timeoutTwo: any;
  timeoutThree: any;
  timeoutFour: any;

  ngOnInit() {
    this.changeColors();
    this.timer();
  }

  timer(){
    this.timeoutOne = setInterval(()=>{
      this.time++;
      if(this.time===14){
        this.time=0;
      }
      this.changeColors();
    },1000)
  }

  changeColors() {
    if(this.time===0 || this.time===1){
      this.yellowLight = false;
      this.horizontalRed = true;
      this.verticalGreen = true;
    }
    if(this.time>5){
      this.horizontalRed = false;
      this.verticalGreen = false;
      this.yellowLight = true;
    }
    if(this.time>7){
      this.yellowLight = false;
      this.verticalRed = true;
      this.horizontalGreen = true;
    }
    if(this.time>12){
        this.verticalRed = false;
        this.horizontalGreen = false;
        this.yellowLight = true;
    }
}
clearTimeouts(): void {
  clearInterval(this.timeoutOne);
}
}


import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.css'
})
export class TrafficLightComponent {
  @Input() horizontal!:boolean;
  horizontalRed=false;
  verticalRed=false;
  yellowLight=false;
  horizontalGreen=false;
  verticalGreen=false;

  ngOnInit(){
   this.changeColors();
  }

  changeColors() {
    this.yellowLight=false;
    this.horizontalRed=true;
    this.verticalGreen=true;
      setTimeout(()=>{
        this.horizontalRed=false;
        this.verticalGreen=false;
        this.yellowLight=true;
        setTimeout(()=>{
          this.yellowLight=false;
          this.verticalRed=true;
          this.horizontalGreen=true;
          setTimeout(()=>{
            this.verticalRed=false;
            this.horizontalGreen=false;
            this.yellowLight=true;
            setTimeout(()=>{        
              this.changeColors();     
            },2000)
          },5000);
        },2000);
      },5000);
  }
  
}

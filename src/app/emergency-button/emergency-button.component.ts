import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emergency-button',
  standalone: true,
  imports: [],
  templateUrl: './emergency-button.component.html',
  styleUrl: './emergency-button.component.css'
})
export class EmergencyButtonComponent {
  emergency=false;
  disabled=false;
  @Output() changeEmitter = new EventEmitter<boolean>();

  changeEmergency(value:boolean) {
    this.changeEmitter.emit(value);
  }

  emergencyClick(){
    this.changeEmergency(true);
    this.disabled=true;
    setTimeout(()=>{
      this.changeEmergency(false);
      setTimeout(()=>{
        this.disabled=false;
      },10000);
    },10000);
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day_1';
  dataFromRegister:any;
  getDataFromRegister(data:any){
    this.dataFromRegister = data;
  }
}

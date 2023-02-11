import { ServicesService } from './../../../Services/services.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hover: boolean = false;
  users:any;
  constructor(myService:ServicesService) {
    myService.GetAllUsers().subscribe(
      {
        next:(data)=>{
          this.users = data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }


}

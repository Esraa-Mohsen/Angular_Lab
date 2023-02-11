import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ServicesService } from 'src/app/Services/services.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  ID=0;
  user:any;

  constructor(private myActivated:ActivatedRoute, private myService:ServicesService){
    this.ID = myActivated.snapshot.params["id"];
    console.log(myActivated);

    myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          this.user = data;
          console.log(this.user);
        },
        error:(err)=>{console.log(err)}
      }
    )

  }
  ngOnInit() {}

}

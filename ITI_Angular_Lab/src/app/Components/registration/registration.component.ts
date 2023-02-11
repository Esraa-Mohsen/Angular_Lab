import { Component, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name = "";
  age = "";
  students:{name:string, age:string}[] = [];

  @Output() myEvent = new EventEmitter();

  fireNow() {
    let student:{name:string, age:string} = {name:this.name, age:this.age};
    if(+this.age <= 30 && +this.age >= 20 && this.name.length > 3){
      this.students.push(student);
    this.myEvent.emit(this.students);
    console.log(this.students);
    this.name = this.age = "";
    }

  }
}

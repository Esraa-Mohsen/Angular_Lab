import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private myClient:HttpClient) { }

  private URL_DB = "https://jsonplaceholder.typicode.com/users";
  GetAllUsers(){
    return this.myClient.get(this.URL_DB);
  }

  GetUserByID(id:any){
    return this.myClient.get(this.URL_DB+"/"+id);
  }

  AddNewUser(newUser:any){
    return this.myClient.post(this.URL_DB, newUser)
  }

  UpdateUserByID(id:any,UpdatedUser:any){
    return this.myClient.put(this.URL_DB+"/"+id,UpdatedUser);
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL ='http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  submit(data){
    return this.http.post(URL+'submit',data);
  }
  getData(){
    return this.http.get(URL+'getdata');
  }

}

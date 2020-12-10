import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
interface Mood {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})


export class DataFormComponent implements OnInit {

  constructor(private dataservice:DataService) { }
date = new FormControl('');
tos = new FormControl(' ');
wut = new FormControl('');
mood = new FormControl();

  ngOnInit(): void {
  }

  submitData(){
    let pack={
      data:this.date.value,
      tos:this.tos.value,
      wut:this.wut.value,
      mood:this.mood.value
    };
    this.dataservice.submit(pack).subscribe((res)=>{alert('Successfully inserted!')});
  }
}

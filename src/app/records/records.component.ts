import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {Detail} from '../shared/detail';
import {Details} from '../shared/details';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
records:Detail[];
  constructor(private dataservice:DataService) { 
    this.dataservice.getData().subscribe((res:Detail[])=>{
      this.records = res;
    });
  }

  ngOnInit(): void {
this.records= Details;
    
  }

}

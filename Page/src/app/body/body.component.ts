import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  columns=[
    {
      
     field:"Sr.No."
    },
    {
    
     field:"Name"
    },
    {
     
     field:"ProjectAllocation"
    },
    {

     field:"Skills"
    },
    {
      
     field:"Comments"
    }
   ]
  row:any=[];

  constructor(private details:DataService) {
    this.row=this.details.getFrontendDevelopers();
   }

  ngOnInit(): void {
     
   
  }

   
}

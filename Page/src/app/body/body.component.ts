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

     headerName:"Sr.No.",
     field:"SrNo",
     pinned:'left',
     width:150
    },
    {
      headerName:"Name",
     field:"Name",
     pinned:'left',
     width:150
    },
    {
      headerName:"Project Allocation",
     field:"ProjectAllocation",
     pinned:'left',
     width:150
    },
    {
      headerName:"Skills",
     field:"Skills",
     pinned:'left',
     width:150
    },
    {
      headerName:"Comments",
     field:"Comments",
     pinned:'left',
     width:150,
     editable:true
    }
   ]
  frontendDevelopersRow:any=[];
  backendDevelopersRow:any=[];

  constructor(private details:DataService) {
    this.frontendDevelopersRow=this.details.getFrontendDevelopers();
    this.backendDevelopersRow=this.details.getBackendDevelopers();
   }
//    gridOptionsTop :any= {
   
//     // don't show the horizontal scrollbar on the top grid
//     suppressHorizontalScroll: false,
//     enableSorting: true,
// };
  ngOnInit(): void {
     
   
  }

   
}

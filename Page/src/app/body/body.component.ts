import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi,RowNode } from 'ag-grid';
import { DataService } from '../data.service';
import { PopupSkillComponent } from '../popup-skill/popup-skill.component';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // GridOptions for modifying sizes and columns 
  gridOptions:GridOptions={
    columnDefs:[],
    rowData:[]
  };



  // Columns-->
  columns=[
    {

     headerName:"Sr.No.",
     field:"SrNo",
     pinned:'left',
     
    },
    {
      headerName:"Name",
     field:"Name",
     pinned:'left',
  
    },
    {
      headerName:"Project Allocation",
     field:"ProjectAllocation",
     pinned:'left',
   
    },
    {
      headerName:"Skills",
     field:"Skills",
     pinned:'left',
    cellRendererFramework: PopupSkillComponent
    },
    {
      headerName:"Comments",
     field:"Comments",
     pinned:'left',
  
     editable:true
    //  cellEditor: "agLargeTextCellEditor"
    }
   ]


   
   row2:any=[];



  //  Frontend Developers data-->

  frontendDevelopersRow:any=[];

 
  // Backend Developers Data -->
  backendDevelopersRow:any=[];



  gridApi?: GridApi;
  columnApi?: GridApi;

  // Storing Data from Services to arrays

  constructor(private details:DataService,private http:HttpClient) {
    this.frontendDevelopersRow=this.details.getFrontendDevelopers();
    this.backendDevelopersRow=this.details.getBackendDevelopers();
    
  //   this.gridApi?.forEachNode((RowNode) => {
  //     this.row2.push(RowNode.data);
  //  }
  //   );
  var i=1;
  var datas;
  var index=0;
  var index2=0;
  for( let value of this.frontendDevelopersRow){
      index++;
    if(value.ProjectAllocation=="Yes" || value.ProjectAllocation=="yes"){
      datas={...value};
      datas.SrNo=i;
      this.row2.push(datas);
      i++;
      this.frontendDevelopersRow.splice(index, 1);
      
    }
  }
  for( let value of this.backendDevelopersRow){
    index2++;
    if(value.ProjectAllocation=="Yes" || value.ProjectAllocation=="yes"){
      datas={...value};
      datas.SrNo=i;
      this.row2.push(datas);
      i++;
      this.backendDevelopersRow.splice(index2, 1);
      
    }
  }
  }

  ngOnInit(): void {
     
   
  }
  

  //  This is for fitting the size of grid
  onGridReady(e:any){
    this.gridOptions.api?.sizeColumnsToFit();
  }
  onGrid(params:any){
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
  }
  
  // onRead(e:any){
  // for( let value of this.frontendDevelopersRow){
  //   if(value.ProjectAllocation=="Yes" || value.ProjectAllocation=="yes"){
  //     this.row2.push(value);
  //   }
  // }
  // for( let value of this.backendDevelopersRow){
  //   if(value.ProjectAllocation=="Yes" || value.ProjectAllocation=="yes"){
  //     this.row2.push(value);
  //   }
  // }
// }


  //  Geting data and updating second grid
 



// for(var k=0; k<frontendDevelopersRow.length;k++){

// }







// }
//  row2:any=[];
// onGridData(){
// this.gridApi?.forEachNode((RowNode) => {
//   this.row2.push(RowNode.)
// });
// }
}

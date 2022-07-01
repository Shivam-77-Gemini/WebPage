import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { DataService } from '../data.service';
import { PopupSkillComponent } from '../popup-skill/popup-skill.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  gridOptions:GridOptions={
    columnDefs:[],
    rowData:[]
  };
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
  
     editable:true,
     cellEditor: "agLargeTextCellEditor"
    }
   ]
  
  frontendDevelopersRow:any=[];
  backendDevelopersRow:any=[];
  gridApi: any;

  constructor(private details:DataService) {
    this.frontendDevelopersRow=this.details.getFrontendDevelopers();
    this.backendDevelopersRow=this.details.getBackendDevelopers();
   }

  ngOnInit(): void {
     
   
  }
  onGridReady(e:any){
    this.gridOptions.api?.sizeColumnsToFit();
  }
  getSelectedRowData() {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node: { data: any; })=> node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    return selectedData;
 
   
}
}

import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup-skill',
  templateUrl: './popup-skill.component.html',
  styleUrls: ['./popup-skill.component.css']
})
export class PopupSkillComponent implements OnInit {
  data:any;

  constructor() { }
 agInit(parmas:any){ 
this.data=parmas.value;
 }
  ngOnInit(): void {
  }
  onClickBtn(){
    Swal.fire({
      title: 'Skills',
      text: 'Html CSS And Js'
    }

    )

  }

}

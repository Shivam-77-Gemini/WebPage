import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getFrontendDevelopers(){
    return [
      {
        "Sr.No.":1,
        "Name":"Shivam",
        "ProjectAllocation":"No",
        "Skills":"Java,Python",
        "Comments":"Details"
      },
      {
        "Sr.No.":2,
        "Name":"Shivam",
        "ProjectAllocation":"No",
        "Skills":"Java,Python",
        "Comments":"Details"
      },
      {
        "Sr.No.":3,
        "Name":"Shivam",
        "ProjectAllocation":"No",
        "Skills":"Java,Python",
        "Comments":"Details"
      },
      {
        "Sr.No.":4,
        "Name":"Shivam",
        "ProjectAllocation":"No",
        "Skills":"Java,Python",
        "Comments":"Details"
      },
      {
        "Sr.No.":5,
        "Name":"Shivam",
        "ProjectAllocation":"No",
        "Skills":"Java,Python",
        "Comments":"Details"
      }
    ]
  }
}

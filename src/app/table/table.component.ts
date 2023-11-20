import { Component, Input, OnInit } from '@angular/core';
import { LeadsListService } from '../services/leads-list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  displayedColumns = ["LeadName", "DateAdded", "Probability", "TeamSize", "Location", "Revenue", "Category"];
  // @Input() passengerSearchReadModels: any[] = [];
  // passengerSearchReadModels = [
  //   {
  //     Lead_name: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     address: {
  //       street: "Kulas Light",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874",
  //       geo: {
  //         lat: "-37.3159",
  //         lng: "81.1496"
  //       }
  //     },
  //     phone: "1-770-736-8031 x56442",
  //     website: "hildegard.org",
  //     company: {
  //       name: "Romaguera-Crona",
  //       catchPhrase: "Multi-layered client-server neural-net",
  //       bs: "harness real-time e-markets"
  //     }
  //   }
  // ];
  passengerSearchReadModels = [];

  namespace : string = ''
  constructor(private LeadsListService : LeadsListService) {}
  ngOnInit() {
    this.LeadsListService.getLeadsList({stage_type:'active',limit:10,offset:0,search:'',ordering:'-probability'}).subscribe((x) => 
    {
      this.passengerSearchReadModels = x.data.results
      console.log(this.passengerSearchReadModels)
    })
   console.log(this.namespace)
  
  }
  selectChange(e:any){
    this.LeadsListService.getLeadsList({stage_type:'active',limit:10,offset:0,search:e.value,ordering:'-probability'}).subscribe((x) => 
    {
      this.passengerSearchReadModels = x.data.results
      console.log(this.passengerSearchReadModels)
    })
  }
}

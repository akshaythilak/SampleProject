import { Component, Input, OnInit } from '@angular/core';
import { LeadsListService } from '../services/leads-list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  displayedColumns = ["LeadName", "DateAdded", "Probability", "TeamSize", "Location", "Revenue", "Category"];
  passengerSearchReadModels = [];

  namespace : string = ''
  constructor(private LeadsListService : LeadsListService) {}
  ngOnInit() {
    this.LeadsListService.getLeadsList({stage_type:'active',limit:10,offset:0,search:'',ordering:'-probability'}).subscribe((x) => 
    {
      this.passengerSearchReadModels = x.data.results
    })
  
  }
  selectChange(e:any){
    this.LeadsListService.getLeadsList({stage_type:'active',limit:10,offset:0,search:e.value,ordering:'-probability'}).subscribe((x) => 
    {
      this.passengerSearchReadModels = x.data.results
    })
  }
}

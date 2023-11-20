import { Component, OnInit } from '@angular/core';
import { LeadsListService } from '../services/leads-list.service';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {
  stage:Array<any> = []
  selectedTabIndex:number = 0

  constructor(private LeadsListService: LeadsListService) { }

  ngOnInit(): void {
    this.LeadsListService.getGraphStage({
      stage_type: 'active',
      limit: 0,
      offset: 0,
      search: '',
      ordering: undefined
    }).subscribe((x:any) => {
      this.stage = x?.data?.stage_type_count
      console.log(this.stage)
    })
  }
  classActive(e:any,i:number){
  this.selectedTabIndex = i
  }
}

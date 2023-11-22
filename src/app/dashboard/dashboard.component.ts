import { Component, OnInit } from '@angular/core';
import { LeadsListService } from '../services/leads-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name = '';
  probability: any
  stage: Array<any> = []
  graph: Array<any> = []
  public isCollapsed = true;
  constructor(private LeadsListService: LeadsListService) { }
  ngOnInit() {
  
    this.LeadsListService.getProbability({
      stage_type: 'active',
      limit: 0,
      offset: 0,
      search: '',
      ordering: undefined
    }).subscribe((x: any) => {
      this.probability = x?.data
      console.log(this.probability)
    })
    this.LeadsListService.getGraphStage({
      stage_type: 'active',
      limit: 0,
      offset: 0,
      search: '',
      ordering: undefined
    }).subscribe((value: any) => {
      this.graph = value?.data?.graph
      this.stage = value?.data?.stage_type_count
    })
  }

  displayLeadCount(count: number): string {
    const value = count && count < 10 ? `0${count}` : `${count}` || 0
    return `${value} Leads`
  }

  userDetails(){
    this.LeadsListService.getUserDetails(localStorage.getItem("userId") ).subscribe((user:any) => {
      this.name = user?.first_name
      console.log(user)
    })
  }
}

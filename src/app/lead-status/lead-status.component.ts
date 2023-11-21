import { Component, OnInit } from '@angular/core';
import { LeadsListService } from '../services/leads-list.service';

@Component({
  selector: 'app-lead-status',
  templateUrl: './lead-status.component.html',
  styleUrls: ['./lead-status.component.scss']
})
export class LeadStatusComponent implements OnInit {

  public activeLeadStatus: Array<any> = []
  constructor(private LeadsListService: LeadsListService) { }

  ngOnInit(): void {
    this.LeadsListService.getActiveLeadStatus().subscribe((value: any) => {
      this.activeLeadStatus = value?.data?.results
      console.log('this.activeLeadStatus', value.data?.results)
    })
  }
  displayLeadCount(count: number): string {
    const value = count && count < 10 ? `0${count}` : `${count}`
    return value
  }
}

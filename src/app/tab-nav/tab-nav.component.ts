import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {

  selectedTabIndex: number = 0

  @Input() tabData: Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }
  selectActiveTab(i: number) {
    this.selectedTabIndex = i
  }
}

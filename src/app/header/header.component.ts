import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeadsListService } from '../services/leads-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any
  constructor(private router: Router, private LeadsListService: LeadsListService) { }

  ngOnInit(): void {
    this.LeadsListService.getUserDetails(localStorage.getItem("userId")).subscribe((user: any) => {
      this.user = user?.data
      console.log(user)
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}

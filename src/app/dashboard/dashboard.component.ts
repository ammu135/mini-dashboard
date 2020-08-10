import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideAnimation } from '../animations/slideAnimation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideAnimation]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

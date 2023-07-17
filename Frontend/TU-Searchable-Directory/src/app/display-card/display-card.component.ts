import { Component, Input, OnInit } from '@angular/core';

import { Organization } from '../models/organization.model';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() org: Organization;
  
  constructor() {}

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/api'

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor() { }

  @Input() node: TreeNode;

  ngOnInit(): void {
    console.log(this.node);
  }


}

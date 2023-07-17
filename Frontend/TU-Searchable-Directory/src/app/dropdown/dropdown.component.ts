import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  isMenuOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(): void{
    this.isMenuOpened=!this.isMenuOpened;
  }
}

import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Organization } from '../models/organization.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  searchResult: Organization[];
  empty: boolean;
  error: boolean;
  errorMessage: string;
  isFetching: boolean;

  searchBy: string;

  ngOnInit(): void {
    this.empty = false;
    this.error = false;
    this.searchBy = 'General';
  }

  onSearch(form: NgForm) {
    let keyword = form.value['search'];
    this.isFetching = true;
    this.dataService.search(keyword, this.searchBy).subscribe(
      (response) => {
        this.isFetching = false;
        if(response.body.length == 0) {
          this.empty = true;
          this.error = true;
          this.errorMessage = 'No Results Found!';
        } else {
          this.error = false;
          this.errorMessage = '';
          this.empty = false;
        }
        this.searchResult = response.body;
      },
      (error) => {
        this.isFetching = false;
        console.log(error);
        this.error = true;
        this.errorMessage = "Server Error! Please Try Again!";
      }
    )
  }

  onSearchBy(event:Event) {
    this.searchBy = (<HTMLInputElement>event.target).id;
  }

}

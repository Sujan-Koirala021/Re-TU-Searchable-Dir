import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { Organization } from "../models/organization.model";


@Injectable()
export class DataService {
    constructor(private http: HttpClient) {}

    url = 'http://localhost:7000/';

    getNodes() {
        let url = this.url + 'nodes';
        return this.http.get<{message:string, body:string}>(url)
    }

    search(keyword: string, searchBy='General') {
        let url = this.url + 'search/';
        switch (searchBy) {
            case 'Personnel':
                url += 'personnel/';
                break;
            case 'Program':
                url += 'program/';
                break;
            case 'Organization':
                url += 'organization_name/';
                break;
            default:
                url += 'general/';
                break;
        }
        let query = new HttpParams().append('keyword', keyword);
        return this.http.get<{message:string, body:Organization[]}>(url, {
            params: query
        });
    }

}